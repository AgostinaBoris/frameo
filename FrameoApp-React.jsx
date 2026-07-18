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
    const update = () => setSize({ w: window.innerWidth, h: window.innerHeight });
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
  const viewport = useViewportSize();
  const isMobile = viewport.w <= MOBILE_BREAKPOINT;
  const scale = isMobile
    ? Math.min(viewport.w / CANVAS_W, viewport.h / CANVAS_H)
    : Math.min(1, (viewport.w - 40) / (CANVAS_W + BEZEL * 2), (viewport.h - 40) / (CANVAS_H + BEZEL * 2));

  const navHandlers = {
    onHome: () => setScreen('home'),
    onDiscover: () => setScreen('discover'),
    onMatch: () => setScreen('match'),
    onWatchlist: () => setScreen('watchlist'),
    onProfile: () => setScreen('profile'),
  };

  const activeTabFor = (s) => {
    if (s === 'home') return 'home';
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
    position: 'relative',
    width: `${CANVAS_W}px`,
    height: `${CANVAS_H}px`,
    borderRadius: isMobile ? 0 : '40px',
    border: isMobile ? 'none' : '12px solid #1a1a1a',
    overflow: 'hidden',
    boxShadow: isMobile ? 'none' : '0 20px 60px rgba(0,0,0,0.9)',
    background: '#0a0a0a',
    transform: `scale(${scale})`,
    transformOrigin: 'center center',
    flex: 'none',
  };

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100dvh',
      background: '#0a0a0a',
      padding: isMobile ? 0 : '20px',
      overflow: 'hidden',
      fontFamily: 'Manrope, -apple-system, BlinkMacSystemFont, sans-serif'
    }}>
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
            <HOMEFRAMEO {...navHandlers} active={activeTab} onAskFrameo={() => setScreen('match')} onQuickMatch={(step) => setScreen(step)} />
          </div>
        )}

        {screen === 'match' && (
          <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            <AIMATCH {...navHandlers} active={activeTab} onNext={() => setScreen('match-context')} />
          </div>
        )}

        {screen === 'match-context' && (
          <div style={{ width: '100%', height: '100%' }}>
            <AIMATCHCONTEXT {...navHandlers} active={activeTab} onNext={() => setScreen('match-time')} />
          </div>
        )}

        {screen === 'match-time' && (
          <div style={{ width: '100%', height: '100%' }}>
            <AIMATCHTIME {...navHandlers} active={activeTab} onNext={() => setScreen('match-platforms')} />
          </div>
        )}

        {screen === 'match-platforms' && (
          <div style={{ width: '100%', height: '100%' }}>
            <AIMATCHPLATFORMS {...navHandlers} active={activeTab} onNext={() => setScreen('match-results')} />
          </div>
        )}

        {screen === 'match-results' && (
          <div style={{ width: '100%', height: '100%' }}>
            <AIMATCHRESULTS {...navHandlers} active={activeTab} onDetails={openMovieDetails} />
          </div>
        )}

        {screen === 'movie-details' && (
          <div style={{ width: '100%', height: '100%' }}>
            <MOVIEDETAILS {...navHandlers} active={activeTab} movie={selectedMovie} onBack={() => setScreen(previousScreen)} />
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
            <WATCHLIST {...navHandlers} active={activeTab} onDetails={openMovieDetails} />
          </div>
        )}
      </div>
    </div>
  );
}