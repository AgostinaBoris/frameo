import React, { useState } from 'react';

// Color palette
const colors = {
  dark: '#070311',
  darkBg: '#0a0514',
  darkCard: '#1a1015',
  text: '#fff',
  textMuted: '#b5aec8',
  accent: '#a855f7',
  accentLight: '#c084fc',
  error: '#e50914',
  success: '#1f8a5b',
};

// Onboarding Screen
const OnboardingScreen = ({ onNext }) => (
  <div style={{
    width: '100%',
    height: '100%',
    background: colors.dark,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px 20px',
    boxSizing: 'border-box',
  }}>
    <h1 style={{
      fontSize: '48px',
      fontWeight: 700,
      color: colors.text,
      marginBottom: '60px',
      letterSpacing: '0.28em',
      fontFamily: 'Montserrat, sans-serif',
    }}>FRAMEO</h1>
    
    <div style={{
      width: '120px',
      height: '120px',
      borderRadius: '50%',
      background: `linear-gradient(180deg, rgba(192,132,252,0.2) 0%, rgba(168,85,247,0.2) 50%, rgba(139,61,255,0.2) 100%)`,
      boxShadow: `inset 0 0 0 1px rgba(192,132,252,0.6), 0px 10px 50px 25px rgba(139,61,255,0.5)`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '60px',
      cursor: 'pointer',
      transition: 'transform 0.3s',
    }}
    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
    onClick={onNext}
    >
      <div style={{
        width: '0',
        height: '0',
        borderLeft: '15px solid transparent',
        borderRight: '0px solid transparent',
        borderTop: '10px solid #d9d9d9',
        borderBottom: '10px solid #d9d9d9',
        marginLeft: '8px',
      }} />
    </div>

    <p style={{
      fontSize: '17px',
      fontWeight: 600,
      color: colors.textMuted,
      textAlign: 'center',
      lineHeight: '30px',
      fontFamily: 'Manrope, sans-serif',
    }}>Press play to begin</p>
  </div>
);

// Home Screen
const HomeScreen = ({ onNavigate }) => (
  <div style={{
    width: '100%',
    height: '100%',
    background: '#fff',
    overflow: 'auto',
    paddingBottom: '100px',
  }}>
    {/* Hero Section */}
    <div style={{
      background: `linear-gradient(135deg, ${colors.accent} 0%, ${colors.accentLight} 100%)`,
      padding: '40px 20px',
      textAlign: 'center',
      color: colors.text,
    }}>
      <h1 style={{
        fontSize: '28px',
        fontWeight: 700,
        marginBottom: '12px',
        fontFamily: 'Manrope, sans-serif',
      }}>What should we watch?</h1>
      <p style={{
        fontSize: '14px',
        color: 'rgba(255,255,255,0.9)',
        fontFamily: 'Manrope, sans-serif',
      }}>Get AI-powered recommendations</p>
    </div>

    {/* Ask Frameo Button */}
    <div style={{ padding: '20px' }}>
      <button
        onClick={() => onNavigate('ai-match')}
        style={{
          width: '100%',
          padding: '16px 20px',
          background: colors.accent,
          color: colors.text,
          border: 'none',
          borderRadius: '12px',
          fontSize: '16px',
          fontWeight: 600,
          cursor: 'pointer',
          transition: 'background 0.3s',
          fontFamily: 'Manrope, sans-serif',
        }}
        onMouseEnter={(e) => e.currentTarget.style.background = colors.accentLight}
        onMouseLeave={(e) => e.currentTarget.style.background = colors.accent}
      >
        Ask Frameo
      </button>
    </div>

    {/* Featured Content */}
    <div style={{ padding: '20px' }}>
      <h2 style={{
        fontSize: '18px',
        fontWeight: 700,
        marginBottom: '12px',
        color: colors.dark,
        fontFamily: 'Manrope, sans-serif',
      }}>Trending Now</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '12px',
      }}>
        {['The Last of Us', 'Stranger Things', 'Breaking Bad', 'The Crown'].map((title, i) => (
          <div
            key={i}
            style={{
              background: `linear-gradient(135deg, hsl(${i * 90}, 70%, 50%), hsl(${i * 90 + 30}, 70%, 60%))`,
              borderRadius: '12px',
              padding: '40px 20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: colors.text,
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'transform 0.3s',
              minHeight: '120px',
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            {title}
          </div>
        ))}
      </div>
    </div>
  </div>
);

// AI Match Screen
const AIMatchScreen = ({ step = 1, onNavigate, selectedMood, onSelectMood }) => {
  const moods = ['😌 Relaxed', '❤️ Romantic', '🤔 Curious', '🎯 Focused', '😢 Sad', '🤩 Excited', '🏔️ Adventurous', '😰 Stressed'];
  
  return (
    <div style={{
      width: '100%',
      height: '100%',
      background: colors.dark,
      overflow: 'auto',
      paddingBottom: '100px',
    }}>
      {/* Header */}
      <div style={{
        padding: '30px 20px',
        borderBottom: `1px solid ${colors.darkCard}`,
      }}>
        <h1 style={{
          fontSize: '32px',
          fontWeight: 700,
          color: colors.text,
          marginBottom: '8px',
          fontFamily: 'Manrope, sans-serif',
        }}>AI Match</h1>
        <p style={{
          fontSize: '14px',
          color: colors.textMuted,
          fontFamily: 'Manrope, sans-serif',
        }}>Step {step} of 4</p>
        
        {/* Progress bar */}
        <div style={{
          display: 'flex',
          gap: '8px',
          marginTop: '12px',
        }}>
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              style={{
                flex: 1,
                height: '4px',
                background: i <= step ? colors.accent : colors.darkCard,
                borderRadius: '2px',
                transition: 'background 0.3s',
              }}
            />
          ))}
        </div>
      </div>

      {/* Content Card */}
      <div style={{
        background: colors.darkCard,
        margin: '20px',
        padding: '30px',
        borderRadius: '20px',
      }}>
        <h2 style={{
          fontSize: '22px',
          fontWeight: 700,
          color: colors.text,
          marginBottom: '8px',
          fontFamily: 'Manrope, sans-serif',
        }}>Tell FRAMEO your mood</h2>
        <p style={{
          fontSize: '14px',
          color: colors.textMuted,
          marginBottom: '30px',
          fontFamily: 'Manrope, sans-serif',
        }}>Choose how you feel and FRAMEO will start building your match.</p>

        {/* Mood Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '12px',
        }}>
          {moods.map((mood) => (
            <button
              key={mood}
              onClick={() => onSelectMood(mood)}
              style={{
                padding: '16px',
                background: selectedMood === mood ? colors.accent : 'rgba(168,85,247,0.2)',
                color: colors.text,
                border: `2px solid ${selectedMood === mood ? colors.accent : 'transparent'}`,
                borderRadius: '12px',
                fontSize: '14px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s',
                fontFamily: 'Manrope, sans-serif',
              }}
              onMouseEnter={(e) => {
                if (selectedMood !== mood) {
                  e.currentTarget.style.background = 'rgba(168,85,247,0.4)';
                }
              }}
              onMouseLeave={(e) => {
                if (selectedMood !== mood) {
                  e.currentTarget.style.background = 'rgba(168,85,247,0.2)';
                }
              }}
            >
              {mood}
            </button>
          ))}
        </div>
      </div>

      {/* Continue Button */}
      <div style={{ padding: '0 20px 20px' }}>
        <button
          onClick={() => onNavigate('home')}
          style={{
            width: '100%',
            padding: '16px 20px',
            background: colors.error,
            color: colors.text,
            border: 'none',
            borderRadius: '12px',
            fontSize: '16px',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'background 0.3s',
            fontFamily: 'Manrope, sans-serif',
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = '#cc0810'}
          onMouseLeave={(e) => e.currentTarget.style.background = colors.error}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

// Profile Screen
const ProfileScreen = ({ onNavigate }) => (
  <div style={{
    width: '100%',
    height: '100%',
    background: '#fff',
    overflow: 'auto',
    paddingBottom: '100px',
  }}>
    {/* Header */}
    <div style={{
      background: `linear-gradient(135deg, ${colors.accent} 0%, ${colors.accentLight} 100%)`,
      padding: '40px 20px',
      textAlign: 'center',
      color: colors.text,
    }}>
      <div style={{
        width: '80px',
        height: '80px',
        background: 'rgba(255,255,255,0.2)',
        borderRadius: '50%',
        margin: '0 auto 16px',
      }} />
      <h1 style={{
        fontSize: '24px',
        fontWeight: 700,
        marginBottom: '8px',
        fontFamily: 'Manrope, sans-serif',
      }}>User Profile</h1>
      <p style={{
        fontSize: '14px',
        color: 'rgba(255,255,255,0.9)',
        fontFamily: 'Manrope, sans-serif',
      }}>@username</p>
    </div>

    {/* Stats */}
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '12px',
      padding: '20px',
    }}>
      {[
        { label: 'Matches', value: '12' },
        { label: 'Watchlist', value: '28' },
        { label: 'Watched', value: '43' },
      ].map((stat) => (
        <div
          key={stat.label}
          style={{
            background: 'rgba(168,85,247,0.1)',
            padding: '16px',
            borderRadius: '12px',
            textAlign: 'center',
          }}
        >
          <div style={{
            fontSize: '20px',
            fontWeight: 700,
            color: colors.accent,
            fontFamily: 'Manrope, sans-serif',
          }}>{stat.value}</div>
          <div style={{
            fontSize: '12px',
            color: colors.textMuted,
            marginTop: '4px',
            fontFamily: 'Manrope, sans-serif',
          }}>{stat.label}</div>
        </div>
      ))}
    </div>

    {/* Settings */}
    <div style={{ padding: '20px' }}>
      <h2 style={{
        fontSize: '16px',
        fontWeight: 700,
        color: colors.dark,
        marginBottom: '12px',
        fontFamily: 'Manrope, sans-serif',
      }}>Settings</h2>
      {['Account', 'Preferences', 'Notifications', 'Privacy', 'Logout'].map((item) => (
        <button
          key={item}
          onClick={() => item === 'Logout' && onNavigate('onboarding')}
          style={{
            width: '100%',
            padding: '16px',
            background: 'transparent',
            color: colors.dark,
            border: 'none',
            borderBottom: '1px solid #eee',
            textAlign: 'left',
            cursor: 'pointer',
            fontSize: '15px',
            fontWeight: 500,
            fontFamily: 'Manrope, sans-serif',
            transition: 'background 0.3s',
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.05)'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
        >
          {item}
        </button>
      ))}
    </div>
  </div>
);

// Main App Component
export default function FrameoApp() {
  const [currentScreen, setCurrentScreen] = useState('onboarding');
  const [selectedMood, setSelectedMood] = useState(null);

  const renderScreen = () => {
    switch (currentScreen) {
      case 'onboarding':
        return <OnboardingScreen onNext={() => setCurrentScreen('home')} />;
      case 'home':
        return <HomeScreen onNavigate={setCurrentScreen} />;
      case 'ai-match':
        return <AIMatchScreen selectedMood={selectedMood} onSelectMood={setSelectedMood} onNavigate={setCurrentScreen} />;
      case 'profile':
        return <ProfileScreen onNavigate={setCurrentScreen} />;
      default:
        return <HomeScreen onNavigate={setCurrentScreen} />;
    }
  };

  return (
    <div style={{
      display: 'flex',
      height: '100vh',
      background: colors.dark,
      fontFamily: 'Manrope, sans-serif',
    }}>
      {/* Sidebar */}
      <div style={{
        width: '240px',
        background: colors.darkCard,
        padding: '20px',
        borderRight: `1px solid ${colors.darkBg}`,
        overflow: 'auto',
      }}>
        <h2 style={{
          color: colors.text,
          marginBottom: '20px',
          fontSize: '18px',
          fontWeight: 700,
          letterSpacing: '0.1em',
        }}>FRAMEO</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {[
            { id: 'onboarding', label: '🎬 Onboarding' },
            { id: 'home', label: '🏠 Home' },
            { id: 'ai-match', label: '🤖 AI Match' },
            { id: 'profile', label: '👤 Profile' },
          ].map((screen) => (
            <button
              key={screen.id}
              onClick={() => setCurrentScreen(screen.id)}
              style={{
                padding: '12px 16px',
                background: currentScreen === screen.id ? colors.error : 'transparent',
                color: colors.text,
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                textAlign: 'left',
                fontSize: '14px',
                transition: 'background 0.2s',
                fontWeight: 500,
              }}
              onMouseEnter={(e) => {
                if (currentScreen !== screen.id) {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                }
              }}
              onMouseLeave={(e) => {
                if (currentScreen !== screen.id) {
                  e.currentTarget.style.background = 'transparent';
                }
              }}
            >
              {screen.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div style={{
        flex: 1,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <div style={{
          width: '402px',
          height: '874px',
          borderRadius: '40px',
          overflow: 'hidden',
          boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
          background: colors.text,
        }}>
          {renderScreen()}
        </div>
      </div>
    </div>
  );
}
