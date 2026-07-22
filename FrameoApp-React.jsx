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
import TRENDINGALL from './screens/TRENDINGALL';
import RECOMMENDEDALL from './screens/RECOMMENDEDALL';
import { MOVIES as DEFAULT_MOVIES } from './screens/movieData.js';

const CANVAS_W = 402;
const CANVAS_H = 874;
const BEZEL = 12;
const MOBILE_BREAKPOINT = 900;

function useViewportSize() {
  const [size, setSize] = useState(() => ({
    w: typeof window !== 'undefined' ? window.innerWidth : CANVAS_W,
    h: typeof window !== 'undefined' ? window.innerHeight : CANVAS_H,
  }));

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      setSize((prev) => {
        // Mobile browser chrome (address bar) hiding/showing on scroll changes
        // innerHeight without changing innerWidth. Treat the smallest height seen
        // at the current width as the safe, guaranteed-visible viewport so the
        // layout never grows into a state that later gets clipped or has to jump.
        if (w !== prev.w) return { w, h };
        return h < prev.h ? { w, h } : prev;
      });
    };
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
  const [screen, setScreen] = useState('onboarding');
  const [previousScreen, setPreviousScreen] = useState('home');
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [matchAnswers, setMatchAnswers] = useState({ mood: null, context: null, time: null, platforms: [] });
  const [watchlist, setWatchlist] = useState([DEFAULT_MOVIES.ironman2, DEFAULT_MOVIES.endgame, DEFAULT_MOVIES.skyscraper]);
  const addToWatchlist = (movie) => {
    setWatchlist((list) => (list.some((m) => m.id === movie.id) ? list : [movie, ...list]));
  };
  const removeFromWatchlist = (movieId) => {
    setWatchlist((list) => list.filter((m) => m.id !== movieId));
  };
  const viewport = useViewportSize();
  const isMobile = viewport.w <= MOBILE_BREAKPOINT;
  const frameOuterW = CANVAS_W + (isMobile ? 0 : BEZEL * 2);
  const frameOuterH = CANVAS_H + (isMobile ? 0 : BEZEL * 2);
  const scale = isMobile
    ? Math.min(viewport.w / CANVAS_W, viewport.h / CANVAS_H)
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
      minHeight: '100dvh',
      background: '#0a0a0a',
      padding: isMobile ? 0 : '20px',
      overflow: 'hidden',
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
              onLogin={() => setScreen('home')}
              onSignUp={() => setScreen('signup')}
            />
          </div>
        )}

        {screen === 'signup' && (
          <div style={{ width: '100%', height: '100%' }}>
            <SIGNUPFRAMEO
              onSignUp={() => setScreen('home')}
              onLogin={() => setScreen('login')}
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
            <AIMATCHCONTEXT {...navHandlers} active={activeTab} value={matchAnswers.context} onSelect={(context) => setMatchAnswers((a) => ({ ...a, context }))} onNext={() => setScreen('match-time')} />
          </div>
        )}

        {screen === 'match-time' && (
          <div style={{ width: '100%', height: '100%' }}>
            <AIMATCHTIME {...navHandlers} active={activeTab} value={matchAnswers.time} onSelect={(time) => setMatchAnswers((a) => ({ ...a, time }))} onNext={() => setScreen('match-platforms')} />
          </div>
        )}

        {screen === 'match-platforms' && (
          <div style={{ width: '100%', height: '100%' }}>
            <AIMATCHPLATFORMS {...navHandlers} active={activeTab} value={matchAnswers.platforms} onToggle={(id) => setMatchAnswers((a) => ({ ...a, platforms: a.platforms.includes(id) ? a.platforms.filter((p) => p !== id) : [...a.platforms, id] }))} onNext={() => setScreen('match-results')} />
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
            <PROFILE2 {...navHandlers} active={activeTab} onLogout={() => setScreen('onboarding')} onSettings={() => setScreen('settings')} />
          </div>
        )}

        {screen === 'settings' && (
          <div style={{ width: '100%', height: '100%' }}>
            <SETTINGS {...navHandlers} active={activeTab} onBack={() => setScreen('profile')} onLogout={() => setScreen('onboarding')} />
          </div>
        )}

        {screen === 'discover' && (
          <div style={{ width: '100%', height: '100%' }}>
            <DISCOVER {...navHandlers} active={activeTab} />
          </div>
        )}

        {screen === 'watchlist' && (
          <div style={{ width: '100%', height: '100%' }}>
            <WATCHLIST {...navHandlers} active={activeTab} movies={watchlist} onDetails={openMovieDetails} onRemove={removeFromWatchlist} />
          </div>
        )}
      </div>
      </div>
    </div>
  );
}