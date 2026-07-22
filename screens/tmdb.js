const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
export const TMDB_IMG_BASE = 'https://image.tmdb.org/t/p/w185';

export async function searchMovies(query, { signal } = {}) {
  if (!TMDB_API_KEY) throw new Error('Missing VITE_TMDB_API_KEY');
  const url = `${TMDB_BASE_URL}/search/movie?api_key=${TMDB_API_KEY}&language=es-ES&include_adult=false&query=${encodeURIComponent(query)}`;
  const res = await fetch(url, { signal });
  if (!res.ok) throw new Error(`TMDB request failed: ${res.status}`);
  const data = await res.json();
  return (data.results ?? []).map((m) => ({
    id: m.id,
    title: m.title,
    year: m.release_date ? m.release_date.slice(0, 4) : '',
    posterUrl: m.poster_path ? `${TMDB_IMG_BASE}${m.poster_path}` : null,
    rating: m.vote_average ? m.vote_average.toFixed(1) : null,
    overview: m.overview,
    tmdbUrl: `https://www.themoviedb.org/movie/${m.id}`,
  }));
}

export async function getMoviesByGenre(genreId, { signal } = {}) {
  if (!TMDB_API_KEY) throw new Error('Missing VITE_TMDB_API_KEY');
  const url = `${TMDB_BASE_URL}/discover/movie?api_key=${TMDB_API_KEY}&language=es-ES&sort_by=popularity.desc&include_adult=false&with_genres=${genreId}`;
  const res = await fetch(url, { signal });
  if (!res.ok) throw new Error(`TMDB request failed: ${res.status}`);
  const data = await res.json();
  return (data.results ?? []).map((m) => ({
    id: m.id,
    title: m.title,
    year: m.release_date ? m.release_date.slice(0, 4) : '',
    posterUrl: m.poster_path ? `${TMDB_IMG_BASE}${m.poster_path}` : null,
    rating: m.vote_average ? m.vote_average.toFixed(1) : null,
    overview: m.overview,
    tmdbUrl: `https://www.themoviedb.org/movie/${m.id}`,
  }));
}

export async function getTrendingMovies({ signal } = {}) {
  if (!TMDB_API_KEY) throw new Error('Missing VITE_TMDB_API_KEY');
  const url = `${TMDB_BASE_URL}/trending/movie/week?api_key=${TMDB_API_KEY}&language=es-ES`;
  const res = await fetch(url, { signal });
  if (!res.ok) throw new Error(`TMDB request failed: ${res.status}`);
  const data = await res.json();
  return (data.results ?? []).map((m) => ({
    id: m.id,
    title: m.title,
    year: m.release_date ? m.release_date.slice(0, 4) : '',
    posterUrl: m.poster_path ? `${TMDB_IMG_BASE}${m.poster_path}` : null,
    rating: m.vote_average ? m.vote_average.toFixed(1) : null,
    overview: m.overview,
    tmdbUrl: `https://www.themoviedb.org/movie/${m.id}`,
  }));
}
