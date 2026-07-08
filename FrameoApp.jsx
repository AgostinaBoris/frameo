import React, { useState } from 'react';

export default function FrameoApp() {
  const [screen, setScreen] = useState('onboarding');
  const [selectedMoods, setSelectedMoods] = useState([]);
  const [selectedServices, setSelectedServices] = useState([]);

  const moods = ['Excited', 'Relaxed', 'Romantic', 'Focused', 'Adventurous', 'Curious'];
  const services = ['Netflix', 'Disney+', 'Max', 'Hulu', 'Prime Video'];
  const movies = ['Inception', 'The Notebook', 'Interstellar', 'Pride & Prejudice'];
  const profileMoods = ['Romantic', 'Adventurous', 'Focused'];

  const toggleMood = (mood) => {
    setSelectedMoods(prev => 
      prev.includes(mood) ? prev.filter(m => m !== mood) : [...prev, mood]
    );
  };

  const toggleService = (service) => {
    setSelectedServices(prev => 
      prev.includes(service) ? prev.filter(s => s !== service) : [...prev, service]
    );
  };

  const renderOnboarding = () => (
    <div style={{
      width: '100%', height: '100%',
      background: 'linear-gradient(135deg, #1a1a2e 0%, #0f0f1e 100%)',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'space-between',
      padding: '40px 20px', color: '#fff', overflow: 'auto'
    }}>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h1 style={{ fontSize: '32px', marginBottom: '10px', fontWeight: '700' }}>Frameo</h1>
        <p style={{ fontSize: '14px', color: '#aaa' }}>Find your movie soulmate</p>
      </div>

      <div style={{ width: '100%' }}>
        <div style={{ marginBottom: '30px' }}>
          <p style={{ fontSize: '12px', color: '#8b3dff', marginBottom: '12px', fontWeight: '600' }}>
            Select your moods
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {moods.map(mood => (
              <button
                key={mood}
                onClick={() => toggleMood(mood)}
                style={{
                  padding: '10px 16px', borderRadius: '20px',
                  border: selectedMoods.includes(mood) ? '2px solid #8b3dff' : '2px solid #333',
                  background: selectedMoods.includes(mood) ? 'rgba(139, 61, 255, 0.2)' : 'transparent',
                  color: '#fff', cursor: 'pointer', fontSize: '12px', fontWeight: '500',
                  transition: 'all 0.3s ease'
                }}
              >
                {mood}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p style={{ fontSize: '12px', color: '#8b3dff', marginBottom: '12px', fontWeight: '600' }}>
            Preferred services
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {services.map(service => (
              <button
                key={service}
                onClick={() => toggleService(service)}
                style={{
                  padding: '10px 16px', borderRadius: '20px',
                  border: selectedServices.includes(service) ? '2px solid #8b3dff' : '2px solid #333',
                  background: selectedServices.includes(service) ? 'rgba(139, 61, 255, 0.2)' : 'transparent',
                  color: '#fff', cursor: 'pointer', fontSize: '12px', fontWeight: '500',
                  transition: 'all 0.3s ease'
                }}
              >
                {service}
              </button>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={() => setScreen('home')}
        style={{
          width: '100%', padding: '14px', borderRadius: '12px', border: 'none',
          background: 'linear-gradient(135deg, #8b3dff 0%, #6a2dc7 100%)',
          color: '#fff', fontSize: '14px', fontWeight: '600', cursor: 'pointer', marginBottom: '20px'
        }}
      >
        Continue
      </button>
    </div>
  );

  const renderHome = () => (
    <div style={{
      width: '100%', height: '100%',
      background: '#0a0a0a',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'space-between',
      padding: '40px 20px', color: '#fff'
    }}>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h1 style={{ fontSize: '32px', marginBottom: '10px', fontWeight: '700' }}>Frameo</h1>
        <p style={{ fontSize: '14px', color: '#aaa' }}>Ready to match?</p>
      </div>
      <div style={{
        width: '200px', height: '200px', borderRadius: '20px',
        background: 'linear-gradient(135deg, #8b3dff 0%, #6a2dc7 100%)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '80px', marginBottom: '40px'
      }}>
        🎬
      </div>
      <button
        onClick={() => setScreen('match')}
        style={{
          width: '100%', padding: '14px', borderRadius: '12px', border: 'none',
          background: 'linear-gradient(135deg, #8b3dff 0%, #6a2dc7 100%)',
          color: '#fff', fontSize: '14px', fontWeight: '600', cursor: 'pointer', marginBottom: '20px'
        }}
      >
        Find a Match
      </button>
    </div>
  );

  const renderMatch = () => (
    <div style={{
      width: '100%', height: '100%',
      background: '#0a0a0a',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'space-between',
      padding: '40px 20px', color: '#fff'
    }}>
      <h2 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '20px', marginTop: '40px' }}>
        It's a Match! 💫
      </h2>
      <div style={{ display: 'flex', gap: '20px', marginBottom: '30px', alignItems: 'center' }}>
        <div style={{
          width: '80px', height: '80px', borderRadius: '12px',
          background: '#8b3dff', display: 'flex', alignItems: 'center',
          justifyContent: 'center', fontSize: '40px'
        }}>
          👤
        </div>
        <div style={{ fontSize: '24px' }}>💜</div>
        <div style={{
          width: '80px', height: '80px', borderRadius: '12px',
          background: '#8b3dff', display: 'flex', alignItems: 'center',
          justifyContent: 'center', fontSize: '40px'
        }}>
          👤
        </div>
      </div>
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <p style={{ fontSize: '14px', color: '#aaa', marginBottom: '10px' }}>Compatibility</p>
        <p style={{
          fontSize: '36px', fontWeight: '700',
          background: 'linear-gradient(135deg, #8b3dff 0%, #6a2dc7 100%)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
        }}>
          87%
        </p>
        <p style={{ fontSize: '12px', color: '#aaa', marginTop: '8px' }}>
          Netflix • Drama • Romantic
        </p>
      </div>
      <button
        onClick={() => setScreen('profile')}
        style={{
          width: '100%', padding: '14px', borderRadius: '12px', border: 'none',
          background: 'linear-gradient(135deg, #8b3dff 0%, #6a2dc7 100%)',
          color: '#fff', fontSize: '14px', fontWeight: '600', cursor: 'pointer', marginBottom: '20px'
        }}
      >
        View Profile
      </button>
    </div>
  );

  const renderProfile = () => (
    <div style={{
      width: '100%', height: '100%',
      background: '#0a0a0a',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', padding: '40px 20px',
      color: '#fff', overflow: 'auto'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <div style={{
          width: '100px', height: '100px', borderRadius: '50%',
          background: 'linear-gradient(135deg, #8b3dff 0%, #6a2dc7 100%)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '50px', margin: '0 auto 20px'
        }}>
          👤
        </div>
        <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '5px' }}>Alex</h2>
        <p style={{ fontSize: '12px', color: '#8b3dff', fontWeight: '600' }}>27 years old</p>
      </div>

      <div style={{ width: '100%', marginBottom: '30px' }}>
        <p style={{ fontSize: '12px', color: '#8b3dff', marginBottom: '12px', fontWeight: '600' }}>
          Favorite Movies
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {movies.map(movie => (
            <div
              key={movie}
              style={{
                padding: '12px', borderRadius: '8px',
                background: 'rgba(139, 61, 255, 0.1)',
                border: '1px solid rgba(139, 61, 255, 0.3)',
                fontSize: '13px'
              }}
            >
              🎬 {movie}
            </div>
          ))}
        </div>
      </div>

      <div style={{ width: '100%' }}>
        <p style={{ fontSize: '12px', color: '#8b3dff', marginBottom: '12px', fontWeight: '600' }}>
          Moods
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {profileMoods.map(mood => (
            <span
              key={mood}
              style={{
                padding: '8px 12px', borderRadius: '16px',
                background: 'rgba(139, 61, 255, 0.2)',
                border: '1px solid rgba(139, 61, 255, 0.3)',
                fontSize: '12px'
              }}
            >
              {mood}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      minHeight: '100vh', background: '#0a0a0a', padding: '20px'
    }}>
      <div style={{
        position: 'relative', width: '402px', height: '874px',
        borderRadius: '40px', border: '12px solid #1a1a1a',
        overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.9)',
        background: '#0a0a0a'
      }}>
        {screen === 'onboarding' && renderOnboarding()}
        {screen === 'home' && renderHome()}
        {screen === 'match' && renderMatch()}
        {screen === 'profile' && renderProfile()}
      </div>
    </div>
  );
}