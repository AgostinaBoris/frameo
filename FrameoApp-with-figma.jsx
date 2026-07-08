import React, { useState } from 'react';

// Import Figma components bundle
import { ONBOARDINGFRAMEO, HOMEFRAMEO, AIMATCH, PROFILE2 } from './components/Components.bundle';

export default function FrameoApp() {
  const [screen, setScreen] = useState('onboarding');
  const [selectedMoods, setSelectedMoods] = useState([]);
  const [selectedServices, setSelectedServices] = useState([]);

  const moods = ['Excited', 'Relaxed', 'Romantic', 'Focused', 'Adventurous', 'Curious'];
  const services = ['Netflix', 'Disney+', 'Max', 'Hulu', 'Prime Video'];

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

  const renderScreen = () => {
    const containerStyle = {
      position: 'relative',
      width: '402px',
      height: '874px',
      borderRadius: '40px',
      border: '12px solid #1a1a1a',
      overflow: 'hidden',
      boxShadow: '0 20px 60px rgba(0,0,0,0.9)',
      background: '#0a0a0a'
    };

    switch (screen) {
      case 'onboarding':
        return (
          <div style={containerStyle}>
            <ONBOARDINGFRAMEO />
            <div style={{
              position: 'absolute',
              bottom: '40px',
              left: '20px',
              right: '20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              zIndex: 10
            }}>
              <div>
                <p style={{ fontSize: '12px', color: '#8b3dff', marginBottom: '8px', fontWeight: '600' }}>
                  Select moods
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {moods.map(mood => (
                    <button
                      key={mood}
                      onClick={() => toggleMood(mood)}
                      style={{
                        padding: '6px 12px',
                        borderRadius: '16px',
                        border: selectedMoods.includes(mood) ? '2px solid #8b3dff' : '1px solid #333',
                        background: selectedMoods.includes(mood) ? 'rgba(139, 61, 255, 0.3)' : 'transparent',
                        color: '#fff',
                        fontSize: '10px',
                        fontWeight: '500',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      {mood}
                    </button>
                  ))}
                </div>
              </div>
              <button
                onClick={() => setScreen('home')}
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: '8px',
                  border: 'none',
                  background: 'linear-gradient(135deg, #8b3dff 0%, #6a2dc7 100%)',
                  color: '#fff',
                  fontSize: '12px',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}
              >
                Continue
              </button>
            </div>
          </div>
        );

      case 'home':
        return (
          <div style={containerStyle}>
            <HOMEFRAMEO />
            <button
              onClick={() => setScreen('match')}
              style={{
                position: 'absolute',
                bottom: '40px',
                left: '20px',
                right: '20px',
                padding: '12px',
                borderRadius: '8px',
                border: 'none',
                background: 'linear-gradient(135deg, #8b3dff 0%, #6a2dc7 100%)',
                color: '#fff',
                fontSize: '12px',
                fontWeight: '600',
                cursor: 'pointer',
                zIndex: 10
              }}
            >
              Find a Match
            </button>
          </div>
        );

      case 'match':
        return (
          <div style={containerStyle}>
            <AIMATCH />
            <button
              onClick={() => setScreen('profile')}
              style={{
                position: 'absolute',
                bottom: '40px',
                left: '20px',
                right: '20px',
                padding: '12px',
                borderRadius: '8px',
                border: 'none',
                background: 'linear-gradient(135deg, #8b3dff 0%, #6a2dc7 100%)',
                color: '#fff',
                fontSize: '12px',
                fontWeight: '600',
                cursor: 'pointer',
                zIndex: 10
              }}
            >
              View Profile
            </button>
          </div>
        );

      case 'profile':
        return (
          <div style={containerStyle}>
            <PROFILE2 />
          </div>
        );

      default:
        return null;
    }
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
      {renderScreen()}
    </div>
  );
}