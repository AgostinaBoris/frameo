import { MiArrowUp } from './MiArrowUp.jsx';
import { TABBAR } from './TABBAR.jsx';
import { TOPNAV } from './TOPNAV.jsx';
import { useLanguage } from '../src/i18n.jsx';

const fontStyle = {
  fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
};

const LanguageOption = ({ label, selected, onClick }) => (
  <div
    className="selectable-card"
    onClick={onClick}
    style={{
      position: "relative",
      width: "100%",
      height: 64,
      borderRadius: 14,
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 20px",
      boxSizing: "border-box",
      backgroundColor: "rgba(139,61,255,0.12)",
      boxShadow: selected
        ? "inset 0 0 0 2px rgb(192,132,252), 0 0 14px 2px rgba(168,85,247,0.5)"
        : "inset 0 0 0 1px rgba(168,85,247,0.5)",
    }}
  >
    <span style={{
      ...fontStyle,
      fontWeight: 700,
      fontSize: 16,
      letterSpacing: "0.020em",
      color: "rgb(255,255,255)",
    }}>{label}</span>
    <div style={{
      width: 20,
      height: 20,
      borderRadius: "50%",
      boxSizing: "border-box",
      border: selected ? "none" : "2px solid rgba(168,85,247,0.6)",
      backgroundColor: selected ? "rgb(168,85,247)" : "transparent",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}>
      {selected && (
        <span style={{ color: "rgb(255,255,255)", fontSize: 12, fontWeight: 700, lineHeight: "12px" }}>✓</span>
      )}
    </div>
  </div>
);

// Profile > Preferences > Language
export function LANGUAGE(props = {}) {
  const { lang, setLang, t } = useLanguage();

  return (
    <div className={props.className} style={{
      width: 402,
      height: 874,
      overflow: "hidden",
      backgroundColor: "rgb(7,3,15)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 84,
        width: 402,
        height: 674,
        overflowY: "auto",
        overflowX: "hidden",
        WebkitOverflowScrolling: "touch",
        backgroundColor: "rgb(7,3,15)",
      }}>
        <div style={{
          position: "relative",
          width: 259,
          height: 40,
          margin: "22px 0 0 24px",
        }}>
          <div
            className="tab-icon-wrap"
            style={{ position: "absolute", left: 0, top: 6, width: 28, height: 28, cursor: "pointer" }}
            onClick={props.onBack}
          >
            <MiArrowUp style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 28,
              height: 28,
              transform: "matrix(0.000,-1,1,0.000,0,34)",
              transformOrigin: "0 0",
            }} />
          </div>
          <span style={{
            ...fontStyle,
            position: "absolute",
            left: 38,
            top: 0,
            width: 221,
            height: 40,
            fontWeight: 700,
            fontSize: 22,
            whiteSpace: "nowrap",
            lineHeight: "40px",
            letterSpacing: "0.100em",
            color: "rgb(255,255,255)",
          }}>{t('language.title')}</span>
        </div>

        <span style={{
          ...fontStyle,
          display: "block",
          margin: "18px 24px 0",
          fontWeight: 600,
          fontSize: 14,
          lineHeight: "20px",
          color: "rgb(138,131,156)",
        }}>{t('language.subtitle')}</span>

        <div style={{
          position: "relative",
          width: 354,
          margin: "24px auto 0",
          display: "flex",
          flexDirection: "column",
          gap: 14,
        }}>
          <LanguageOption label={t('language.english')} selected={lang === 'en'} onClick={() => setLang('en')} />
          <LanguageOption label={t('language.spanish')} selected={lang === 'es'} onClick={() => setLang('es')} />
        </div>
      </div>

      <TOPNAV style={{
          position: "absolute",
          left: 1,
          top: -4,
          width: 402,
          height: 106,
        }}
        onProfileClick={props.onProfile}
      />
      <TABBAR style={{
          position: "absolute",
          left: 0,
          top: 758,
          width: 402,
          height: 98,
        }}
        onHome={props.onHome}
        onDiscover={props.onDiscover}
        onMatch={props.onMatch}
        onWatchlist={props.onWatchlist}
        active={props.active}
      />
    </div>
  );
}
export default LANGUAGE;
