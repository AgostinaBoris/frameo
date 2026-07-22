import { generateObject } from 'ai';
import { z } from 'zod';

const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
const TMDB_IMG_BASE = 'https://image.tmdb.org/t/p/w342';

const MOVIE_GENRE_MAP = {
  relaxed: [35, 10751],
  romantic: [10749],
  curious: [9648, 99],
  focused: [18, 53],
  sad: [18],
  excited: [28, 12],
  adventurous: [12, 28],
  stressed: [35, 16],
};

// TMDB TV genres differ from movie genres (no Romance/Thriller genre for TV)
const TV_GENRE_MAP = {
  relaxed: [35, 10751],
  romantic: [18, 10766],
  curious: [9648, 99],
  focused: [18, 9648],
  sad: [18],
  excited: [10759],
  adventurous: [10759],
  stressed: [35, 16],
};

const RUNTIME_MAP = {
  quick: { lte: 100 },
  short: { lte: 105 },
  night: { gte: 70, lte: 150 },
  'have-time': { gte: 110 },
};

const PROVIDER_MAP = {
  netflix: 8,
  prime: 9,
  disney: 337,
  appletv: 350,
  hulu: 15,
  max: 1899,
};

const CONTEXT_LABEL = {
  solo: 'Solo night',
  date: 'Date night',
  family: 'Family time',
  friends: 'With friends',
  background: 'Background watch',
  marathon: 'Movie marathon',
};

async function discoverByType({ mediaType, genreMap, mood, time, providerIds, voteCountMin }) {
  const apiKey = process.env.VITE_TMDB_API_KEY;
  if (!apiKey) throw new Error('Missing VITE_TMDB_API_KEY');

  const buildParams = ({ includeProviders }) => {
    const params = new URLSearchParams({
      api_key: apiKey,
      language: 'en-US',
      sort_by: 'popularity.desc',
      include_adult: 'false',
      'vote_count.gte': String(voteCountMin),
    });
    const genres = genreMap[mood];
    if (genres) params.set('with_genres', genres.join('|'));
    const runtime = RUNTIME_MAP[time];
    if (runtime?.gte) params.set('with_runtime.gte', String(runtime.gte));
    if (runtime?.lte) params.set('with_runtime.lte', String(runtime.lte));
    if (includeProviders && providerIds.length) {
      params.set('with_watch_providers', providerIds.join('|'));
      params.set('watch_region', 'US');
    }
    return params;
  };

  const fetchWith = async (params) => {
    const res = await fetch(`${TMDB_BASE_URL}/discover/${mediaType}?${params.toString()}`);
    if (!res.ok) throw new Error(`TMDB ${mediaType} discover failed: ${res.status}`);
    const data = await res.json();
    return data.results ?? [];
  };

  let results = await fetchWith(buildParams({ includeProviders: true }));
  if (results.length < 4 && providerIds.length) {
    results = await fetchWith(buildParams({ includeProviders: false }));
  }
  return results;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const { mood, context, time, platforms } = req.body ?? {};
    const providerIds = (Array.isArray(platforms) ? platforms : [])
      .map((p) => PROVIDER_MAP[p])
      .filter(Boolean);

    const [movieResults, tvResults] = await Promise.all([
      discoverByType({ mediaType: 'movie', genreMap: MOVIE_GENRE_MAP, mood, time, providerIds, voteCountMin: 100 }),
      discoverByType({ mediaType: 'tv', genreMap: TV_GENRE_MAP, mood, time, providerIds, voteCountMin: 50 }),
    ]);

    const candidates = [
      ...movieResults.slice(0, 10).map((m) => ({ ...m, __mediaType: 'movie' })),
      ...tvResults.slice(0, 10).map((m) => ({ ...m, __mediaType: 'tv' })),
    ];

    if (!candidates.length) {
      res.status(200).json({ picks: [] });
      return;
    }

    const candidateList = candidates.map((m) => ({
      id: m.id,
      mediaType: m.__mediaType,
      title: m.__mediaType === 'tv' ? m.name : m.title,
      overview: m.overview,
      releaseYear: (m.release_date || m.first_air_date) ? (m.release_date || m.first_air_date).slice(0, 4) : null,
      voteAverage: m.vote_average,
    }));

    const { object } = await generateObject({
      model: 'anthropic/claude-sonnet-4.6',
      schema: z.object({
        picks: z
          .array(
            z.object({
              id: z.number(),
              mediaType: z.enum(['movie', 'tv']),
              matchPercent: z.number().min(1).max(100),
              whyMatch: z.string(),
            })
          )
          .min(1)
          .max(3),
      }),
      prompt: `You are Frameo, a movie and TV series recommendation assistant. A user wants something to watch tonight.
Their mood: ${mood ?? 'not specified'}
Watching context: ${CONTEXT_LABEL[context] ?? 'not specified'}
Time available: ${time ?? 'not specified'}
Streaming platforms they have: ${(platforms ?? []).join(', ') || 'not specified'}

From this list of candidates (a mix of movies and TV series, marked by "mediaType"), pick the 1 to 3 best matches for this user. Feel free to recommend movies, series, or a mix of both — whichever genuinely fits best. For each pick, give a matchPercent (1-100) and a short, warm, personalized "whyMatch" (1-2 sentences, in English) explaining why it fits their mood/context/time.

Candidates:
${JSON.stringify(candidateList, null, 2)}

Only pick id + mediaType combinations that appear in the candidate list above.`,
    });

    const byKey = new Map(candidates.map((m) => [`${m.__mediaType}-${m.id}`, m]));
    const picks = object.picks
      .map((pick) => {
        const item = byKey.get(`${pick.mediaType}-${pick.id}`);
        if (!item) return null;
        const title = pick.mediaType === 'tv' ? item.name : item.title;
        const dateStr = item.release_date || item.first_air_date;
        return {
          id: item.id,
          type: pick.mediaType === 'tv' ? 'series' : 'movie',
          title,
          posterUrl: item.poster_path ? `${TMDB_IMG_BASE}${item.poster_path}` : null,
          overview: item.overview,
          year: dateStr ? dateStr.slice(0, 4) : '',
          matchPercent: Math.round(pick.matchPercent),
          whyMatch: pick.whyMatch,
          tmdbUrl: `https://www.themoviedb.org/${pick.mediaType}/${item.id}`,
        };
      })
      .filter(Boolean);

    res.status(200).json({ picks });
  } catch (err) {
    console.error('AI match failed:', err);
    res.status(500).json({ error: 'AI match failed' });
  }
}
