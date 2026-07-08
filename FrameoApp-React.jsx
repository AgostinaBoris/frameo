import React, { useState } from 'react';
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

export default function FrameoApp() {
  const [screen, setScreen] = useState('onboarding');
  const [previousScreen, setPreviousScreen] = useState('home');
  const [selectedMovie, setSelectedMovie] = useState(null);

  const navHandlers = {
    onHome: () => setScreen('home'),
    onDiscover: () => setScreen('discover'),
    onMatch: () => setScreen('match'),
    onWatchlist: () => setScreen('watchlist'),
    onProfile: () => setScreen('profile'),
  };

  const openMovieDetails = (movie) => {
    setPreviousScreen(screen);
    setSelectedMovie(movie);
    setScreen('movie-details');
  };

  const phoneFrame = {
    boxSizing: 'content-box',
    position: 'relative',
    width: '402px',
    height: '874px',
    borderRadius: '40px',
    border: '12px solid #1a1a1a',
    overflow: 'hidden',
    boxShadow: '0 20px 60px rgba(0,0,0,0.9)',
    background: '#0a0a0a'
  };

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      background: '#0a0a0a',
      padding: '20px',
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
              onLogin={() => setScreen('signup')}
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
            <HOMEFRAMEO {...navHandlers} onAskFrameo={() => setScreen('match')} onQuickMatch={(step) => setScreen(step)} />
          </div>
        )}

        {screen === 'match' && (
          <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            <AIMATCH {...navHandlers} onNext={() => setScreen('match-context')} />
          </div>
        )}

        {screen === 'match-context' && (
          <div style={{ width: '100%', height: '100%' }}>
            <AIMATCHCONTEXT {...navHandlers} onNext={() => setScreen('match-time')} />
          </div>
        )}

        {screen === 'match-time' && (
          <div style={{ width: '100%', height: '100%' }}>
            <AIMATCHTIME {...navHandlers} onNext={() => setScreen('match-platforms')} />
          </div>
        )}

        {screen === 'match-platforms' && (
          <div style={{ width: '100%', height: '100%' }}>
            <AIMATCHPLATFORMS {...navHandlers} onNext={() => setScreen('match-results')} />
          </div>
        )}

        {screen === 'match-results' && (
          <div style={{ width: '100%', height: '100%' }}>
            <AIMATCHRESULTS {...navHandlers} onDetails={openMovieDetails} />
          </div>
        )}

        {screen === 'movie-details' && (
          <div style={{ width: '100%', height: '100%' }}>
            <MOVIEDETAILS {...navHandlers} movie={selectedMovie} onBack={() => setScreen(previousScreen)} />
          </div>
        )}

        {screen === 'profile' && (
          <div style={{ width: '100%', height: '100%' }}>
            <PROFILE2 {...navHandlers} onLogout={() => setScreen('login')} onSettings={() => setScreen('settings')} />
          </div>
        )}

        {screen === 'settings' && (
          <div style={{ width: '100%', height: '100%' }}>
            <SETTINGS {...navHandlers} onBack={() => setScreen('profile')} onLogout={() => setScreen('login')} />
          </div>
        )}

        {screen === 'discover' && (
          <div style={{ width: '100%', height: '100%' }}>
            <DISCOVER {...navHandlers} />
          </div>
        )}

        {screen === 'watchlist' && (
          <div style={{ width: '100%', height: '100%' }}>
            <WATCHLIST {...navHandlers} onDetails={openMovieDetails} />
          </div>
        )}
      </div>
    </div>
  );
}