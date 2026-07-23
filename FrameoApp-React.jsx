import React, { useEffect, useState } from 'react';
import './styles.css';

// Import Figma components from bundle
import ONBOARDINGFRAMEO from './components/ONBOARDINGFRAMEO';
import HOMEFRAMEO from './components/HOMEFRAMEO';
import AIMATCH from './components/AIMATCH';
import PROFILE2 from './components/PROFILE2';
import LOGINFRAMEO from './screens/LOGINFRAMEO';
import SIGNUPFRAMEO from './screens/SIGNUPFRAMEO';
import DISCOVER from './screens/DISCOVER';
import WATCHLIST from './screens/WATCHLIST';
import AIMATCHCONTEXT from './screens/AIMATCHCONTEXT';
import AIMATCHTIME from './screens/AIMATCHTIME';
import AIMATCHPLATFORMS from './screens/AIMATCHPLATFORMS';
import AIMATCHRESULTS from './screens/AIMATCHRESULTS';
import MOVIEDETAILS from './screens/MOVIEDETAILS';
import SETTINGS from './screens/SETTINGS';
import LANGUAGE from './screens/LANGUAGE';
import TRENDINGALL from './screens/TRENDINGALL';
import RECOMMENDEDALL from './screens/RECOMMENDEDALL';
import RESETPASSWORD from './screens/RESETPASSWORD';
import { supabase } from './src/supabaseClient.js';
import { useLanguage } from './src/i18n.jsx';

const PUBLIC_SCREENS = ['onboarding', 'login', 'signup'];

const rowToMovie = (row) => ({
  id: row.movie_id,
  type: row.type,
  title: row.title,
  posterUrl: row.poster_url,
  imgClass: row.img_class,
  match: row.match,
  genre: row.genre,
  platform: row.platform,
  watchUrl: row.watch_url,
  description: row.description,
  whyMatch: row.why_match,
});

const movieToRow = (movie, userId) => ({
  user_id: userId,
  movie_id: String(movie.id),
  type: movie.type ?? 'movie',
  title: movie.title,
  poster_url: movie.posterUrl ?? null,
  img_class: movie.imgClass ?? null,
  match: movie.match ?? null,
  genre: movie.genre ?? null,
  platform: movie.platform ?? null,
  watch_url: movie.watchUrl ?? null,
  description: movie.description ?? null,
  why_match: movie.whyMatch ?? null,
});

const CANVAS_W = 402;
const CANVAS_H = 874;
const BEZEL = 12;
const MOBILE_BREAKPOINT = 900;

function useViewportSize() {
  const getSize = () => ({
    w: typeof window !== 'undefined' ? window.innerWidth : CANVAS_W,
    // visualViewport reflects the true visible area (browser chrome already
    // excluded) where available, so the frame can use all the room it
    // actually has instead of freezing at whatever height was smallest.
    h: typeof window !== 'undefined'
      ? Math.round(window.visualViewport?.height ?? window.innerHeight)
      : CANVAS_H,
  });

  const [size, setSize] = useState(getSize);

  useEffect(() => {
    const update = () => setSize(getSize());
    update();
    window.addEventListener('resize', update);
    window.addEventListener('orientationchange', update);
    window.visualViewport?.addEventListener('resize', update);
    return () => {
      window.removeEventListener('resize', update);
      window.removeEventListener('orientationchange', update);
      window.visualViewport?.removeEventListener('resize', update);
    };
  }, []);

  return size;
}

export default function FrameoApp() {
  const { t } = useLanguage();
  const [screen, setScreen] = useState('onboarding');
  const [previousScreen, setPreviousScreen] = useState('home');
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [matchAnswers, setMatchAnswers] = useState({ mood: null, context: null, time: null, platforms: [] });
  const [watchlist, setWatchlist] = useState([]);
  const [session, setSession] = useState(null);
  const [guest, setGuest] = useState(false);
  const [authReady, setAuthReady] = useState(false);
  const [authError, setAuthError] = useState('');
  const [authMessage, setAuthMessage] = useState('');
  const [authSubmitting, setAuthSubmitting] = useState(false);

  useEffect(() => {
    let mounted = true;
    supabase.auth.getSession().then(({ data }) => {
      if (!mounted) return;
      setSession(data.session);
      setAuthReady(true);
    });
    const { data: listener } = supabase.auth.onAuthStateChange((event, nextSession) => {
      setSession(nextSession);
      if (event === 'PASSWORD_RECOVERY') {
        setAuthError('');
        setAuthMessage('');
        setScreen('reset-password');
      }
    });
    return () => {
      mounted = false;
      listener.subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (!authReady) return;
    if (session && PUBLIC_SCREENS.includes(screen)) {
      setScreen('home');
    } else if (!session && !guest && !PUBLIC_SCREENS.includes(screen) && screen !== 'reset-password') {
      setScreen('onboarding');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authReady, session, guest]);

  useEffect(() => {
    const userId = session?.user?.id;
    if (!userId) {
      setWatchlist([]);
      return;
    }
    supabase
      .from('watchlist')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })
      .then(({ data, error }) => {
        if (error) {
          console.error('Failed to load watchlist:', error);
          return;
        }
        setWatchlist((data ?? []).map(rowToMovie));
      });
  }, [session?.user?.id]);

  const addToWatchlist = (movie) => {
    const userId = session?.user?.id;
    if (!userId) {
      setAuthError('');
      setAuthMessage(t('login.needAccountToSave'));
      setGuest(false);
      setScreen('login');
      return;
    }
    const id = String(movie.id);
    setWatchlist((list) => (list.some((m) => m.id === id) ? list : [{ ...movie, id }, ...list]));
    supabase.from('watchlist').insert(movieToRow(movie, userId)).then(({ error }) => {
      if (error && error.code !== '23505') console.error('Failed to save movie:', error);
    });
  };
  const removeFromWatchlist = (movieId) => {
    const userId = session?.user?.id;
    if (!userId) return;
    setWatchlist((list) => list.filter((m) => m.id !== movieId));
    supabase.from('watchlist').delete().eq('user_id', userId).eq('movie_id', String(movieId)).then(({ error }) => {
      if (error) console.error('Failed to remove movie:', error);
    });
  };

  const handleLogin = async ({ email, password }) => {
    setAuthError('');
    setAuthMessage('');
    setAuthSubmitting(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setAuthSubmitting(false);
    if (error) {
      setAuthError(error.message);
      return;
    }
    setScreen('home');
  };

  const handleForgotPassword = async (email) => {
    setAuthError('');
    setAuthMessage('');
    if (!email) {
      setAuthError('Enter your email above first, then tap "Forgot password?".');
      return;
    }
    setAuthSubmitting(true);
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: window.location.origin,
    });
    setAuthSubmitting(false);
    if (error) {
      setAuthError(error.message);
      return;
    }
    setAuthMessage('Check your email for a link to reset your password.');
  };

  const handleResetPassword = async (password) => {
    setAuthError('');
    setAuthSubmitting(true);
    const { error } = await supabase.auth.updateUser({ password });
    setAuthSubmitting(false);
    if (error) {
      setAuthError(error.message);
      return;
    }
    setScreen('home');
  };

  const handleSignUp = async ({ fullName, email, password }) => {
    setAuthError('');
    setAuthSubmitting(true);
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: fullName },
        emailRedirectTo: window.location.origin,
      },
    });
    setAuthSubmitting(false);
    if (error) {
      setAuthError(error.message);
      return;
    }
    if (data.session) {
      setScreen('home');
    } else {
      setAuthError('Check your email to confirm your account, then log in.');
      setScreen('login');
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setGuest(false);
    setScreen('onboarding');
  };

  const handleGuestContinue = () => {
    setAuthError('');
    setAuthMessage('');
    setGuest(true);
    setScreen('home');
  };
  const viewport = useViewportSize();
  const isMobile = viewport.w <= MOBILE_BREAKPOINT;
  const frameOuterW = CANVAS_W + (isMobile ? 0 : BEZEL * 2);
  const frameOuterH = CANVAS_H + (isMobile ? 0 : BEZEL * 2);
  const scale = isMobile
    ? viewport.w / CANVAS_W
    : Math.min(1, (viewport.w - 40) / frameOuterW, (viewport.h - 40) / frameOuterH);
  const scaledW = frameOuterW * scale;
  const scaledH = frameOuterH * scale;

  const navHandlers = {
    onHome: () => setScreen('home'),
    onDiscover: () => setScreen('discover'),
    onMatch: () => setScreen('match'),
    onWatchlist: () => setScreen('watchlist'),
    onProfile: () => setScreen('profile'),
  };

  const activeTabFor = (s) => {
    if (s === 'home' || s === 'trending-all' || s === 'recommended-all') return 'home';
    if (s === 'discover') return 'discover';
    if (s.startsWith('match')) return 'match';
    if (s === 'watchlist') return 'watchlist';
    return null;
  };
  const activeTab = activeTabFor(screen === 'movie-details' ? previousScreen : screen);

  const openMovieDetails = (movie) => {
    setPreviousScreen(screen);
    setSelectedMovie(movie);
    setScreen('movie-details');
  };

  const phoneFrame = {
    boxSizing: 'content-box',
    position: 'absolute',
    top: 0,
    left: 0,
    width: `${CANVAS_W}px`,
    height: `${CANVAS_H}px`,
    borderRadius: isMobile ? 0 : '40px',
    border: isMobile ? 'none' : '12px solid #1a1a1a',
    overflow: 'hidden',
    boxShadow: isMobile ? 'none' : '0 20px 60px rgba(0,0,0,0.9)',
    background: '#0a0a0a',
    transform: `scale(${scale})`,
    transformOrigin: 'top left',
  };

  return (
    <div style={{
      display: 'flex',
      alignItems: isMobile ? 'flex-start' : 'center',
      justifyContent: 'center',
      height: '100dvh',
      background: '#0a0a0a',
      padding: isMobile ? 0 : '20px',
      overflowX: 'hidden',
      overflowY: isMobile ? 'auto' : 'hidden',
      WebkitOverflowScrolling: 'touch',
      fontFamily: 'Manrope, -apple-system, BlinkMacSystemFont, sans-serif'
    }}>
      <div style={{ position: 'relative', width: scaledW, height: scaledH, flex: 'none' }}>
      <div style={phoneFrame}>
        {screen === 'onboarding' && (
          <div
            style={{ width: '100%', height: '100%', position: 'relative', cursor: 'pointer' }}
            onClick={() => setScreen('login')}
          >
            <ONBOARDINGFRAMEO />
          </div>
        )}

        {screen === 'login' && (
          <div style={{ width: '100%', height: '100%' }}>
            <LOGINFRAMEO
              onLogin={handleLogin}
              onSignUp={() => { setAuthError(''); setAuthMessage(''); setScreen('signup'); }}
              onForgotPassword={handleForgotPassword}
              onGuest={handleGuestContinue}
              error={authError}
              message={authMessage}
              submitting={authSubmitting}
            />
          </div>
        )}

        {screen === 'signup' && (
          <div style={{ width: '100%', height: '100%' }}>
            <SIGNUPFRAMEO
              onSignUp={handleSignUp}
              onLogin={() => { setAuthError(''); setAuthMessage(''); setScreen('login'); }}
              error={authError}
              submitting={authSubmitting}
            />
          </div>
        )}

        {screen === 'reset-password' && (
          <div style={{ width: '100%', height: '100%' }}>
            <RESETPASSWORD
              onSave={handleResetPassword}
              error={authError}
              submitting={authSubmitting}
            />
          </div>
        )}

        {screen === 'home' && (
          <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            <HOMEFRAMEO {...navHandlers} active={activeTab} onAskFrameo={() => { setMatchAnswers({ mood: null, context: null, time: null, platforms: [] }); setScreen('match'); }} onQuickMatch={(step) => setScreen(step)} onSeeAllTrending={() => setScreen('trending-all')} onSeeAllRecommended={() => setScreen('recommended-all')} />
          </div>
        )}

        {screen === 'trending-all' && (
          <div style={{ width: '100%', height: '100%' }}>
            <TRENDINGALL {...navHandlers} active={activeTab} onBack={() => setScreen('home')} />
          </div>
        )}

        {screen === 'recommended-all' && (
          <div style={{ width: '100%', height: '100%' }}>
            <RECOMMENDEDALL {...navHandlers} active={activeTab} onBack={() => setScreen('home')} />
          </div>
        )}

        {screen === 'match' && (
          <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            <AIMATCH {...navHandlers} active={activeTab} value={matchAnswers.mood} onSelect={(mood) => setMatchAnswers((a) => ({ ...a, mood }))} onNext={() => setScreen('match-context')} />
          </div>
        )}

        {screen === 'match-context' && (
          <div style={{ width: '100%', height: '100%' }}>
            <AIMATCHCONTEXT {...navHandlers} active={activeTab} value={matchAnswers.context} onSelect={(context) => setMatchAnswers((a) => ({ ...a, context }))} onNext={() => setScreen('match-time')} onBack={() => setScreen('match')} />
          </div>
        )}

        {screen === 'match-time' && (
          <div style={{ width: '100%', height: '100%' }}>
            <AIMATCHTIME {...navHandlers} active={activeTab} value={matchAnswers.time} onSelect={(time) => setMatchAnswers((a) => ({ ...a, time }))} onNext={() => setScreen('match-platforms')} onBack={() => setScreen('match-context')} />
          </div>
        )}

        {screen === 'match-platforms' && (
          <div style={{ width: '100%', height: '100%' }}>
            <AIMATCHPLATFORMS {...navHandlers} active={activeTab} value={matchAnswers.platforms} onToggle={(id) => setMatchAnswers((a) => ({ ...a, platforms: a.platforms.includes(id) ? a.platforms.filter((p) => p !== id) : [...a.platforms, id] }))} onNext={() => setScreen('match-results')} onBack={() => setScreen('match-time')} />
          </div>
        )}

        {screen === 'match-results' && (
          <div style={{ width: '100%', height: '100%' }}>
            <AIMATCHRESULTS {...navHandlers} active={activeTab} answers={matchAnswers} onDetails={openMovieDetails} />
          </div>
        )}

        {screen === 'movie-details' && (
          <div style={{ width: '100%', height: '100%' }}>
            <MOVIEDETAILS {...navHandlers} active={activeTab} movie={selectedMovie} onBack={() => setScreen(previousScreen)} onSave={addToWatchlist} />
          </div>
        )}

        {screen === 'profile' && (
          <div style={{ width: '100%', height: '100%' }}>
            <PROFILE2 {...navHandlers} active={activeTab} onLogout={handleLogout} onSettings={() => setScreen('settings')} onLanguage={() => setScreen('language')} />
          </div>
        )}

        {screen === 'settings' && (
          <div style={{ width: '100%', height: '100%' }}>
            <SETTINGS {...navHandlers} active={activeTab} onBack={() => setScreen('profile')} onLogout={handleLogout} />
          </div>
        )}

        {screen === 'language' && (
          <div style={{ width: '100%', height: '100%' }}>
            <LANGUAGE {...navHandlers} active={activeTab} onBack={() => setScreen('profile')} />
          </div>
        )}

        {screen === 'discover' && (
          <div style={{ width: '100%', height: '100%' }}>
            <DISCOVER {...navHandlers} active={activeTab} />
          </div>
        )}

        {screen === 'watchlist' && (
          <div style={{ width: '100%', height: '100%' }}>
            <WATCHLIST {...navHandlers} active={activeTab} movies={watchlist} onDetails={openMovieDetails} onRemove={removeFromWatchlist} onBack={() => setScreen('home')} />
          </div>
        )}
      </div>
      </div>
    </div>
  );
}