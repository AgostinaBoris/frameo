import { MiArrowUp } from './MiArrowUp.jsx';
import { TABBAR } from './TABBAR.jsx';
import { TOPNAV } from './TOPNAV.jsx';
import { WeuiArrowFilled } from './WeuiArrowFilled.jsx';

const fontStyle = {
  fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
};

const SettingsRow = ({ label, danger, onClick }) => (
  <div
    className="selectable-card"
    style={{
      position: "relative",
      width: "100%",
      height: 48,
      borderRadius: 8,
      cursor: "pointer",
      backgroundColor: danger ? "rgba(210,24,24,0.12)" : "rgba(139,61,255,0.12)",
      boxShadow: danger
        ? "inset 0 0 0 1px rgba(210,24,24,0.5)"
        : "inset 0 0 0 1px rgba(168,85,247,0.5), 5px 5px 8px 0px rgba(168,85,247,0.35)",
      flexShrink: 0,
    }}
    onClick={onClick}
  >
    <span style={{
      ...fontStyle,
      position: "absolute",
      left: 20,
      top: 0,
      bottom: 0,
      display: "flex",
      alignItems: "center",
      fontWeight: 600,
      fontSize: 14,
      letterSpacing: "0.020em",
      color: danger ? "rgb(255,120,120)" : "rgb(255,255,255)",
      whiteSpace: "nowrap",
    }}>{label}</span>
    <WeuiArrowFilled style={{
      position: "absolute",
      right: 16,
      top: 12,
      width: 12,
      height: 24,
      color: danger ? "rgb(255,120,120)" : "rgb(248,247,255)",
    }} />
  </div>
);

const Section = ({ title, children }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: 10, width: "100%" }}>
    <span style={{
      ...fontStyle,
      fontWeight: 700,
      fontSize: 16,
      letterSpacing: "0.050em",
      color: "rgb(181,174,200)",
    }}>{title}</span>
    <div style={{ display: "flex", flexDirection: "column", gap: 10, width: "100%" }}>
      {children}
    </div>
  </div>
);

// figma node: 416:794 SETTINGS
export function SETTINGS(props = {}) {
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
        top: 64,
        width: 402,
        height: 694,
        overflowY: "auto",
        overflowX: "hidden",
        WebkitOverflowScrolling: "touch",
        backgroundColor: "rgb(7,3,15)",
      }}>
        <div style={{
          position: "relative",
          width: 259,
          height: 40,
          margin: "44px 0 0 24px",
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
            letterSpacing: "0.050em",
            color: "rgb(255,255,255)",
          }}>Settings</span>
        </div>
        <span style={{
          ...fontStyle,
          display: "block",
          margin: "8px 0 0 30px",
          fontWeight: 600,
          fontSize: 14,
          letterSpacing: "0.020em",
          color: "rgb(181,174,200)",
        }}>Manage your account preferences.</span>

        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: 28,
          width: 344,
          margin: "28px auto 40px",
        }}>
          <Section title="Account">
            <SettingsRow label="Change Password" />
            <SettingsRow label="Email Preferences" />
          </Section>
          <Section title="Preferences">
            <SettingsRow label="Favorite Genres" />
            <SettingsRow label="Watch Preferences" />
          </Section>
          <Section title="App">
            <SettingsRow label="Appearance" />
            <SettingsRow label="Downloads" />
            <SettingsRow label="Log out" danger onClick={props.onLogout} />
          </Section>
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
      />
    </div>
  );
}
export default SETTINGS;
