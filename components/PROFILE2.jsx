import { useRef, useState } from 'react';
import { ACTION } from './ACTION.jsx';
import { ADVENTURE } from './ADVENTURE.jsx';
import { APPLETV } from './APPLETV.jsx';
import { COMEDY } from './COMEDY.jsx';
import { DISNEY } from './DISNEY.jsx';
import { DRAMA } from './DRAMA.jsx';
import { HULU } from './HULU.jsx';
import { MAX2 } from './MAX2.jsx';
import { MYSTERY } from './MYSTERY.jsx';
import { NETFLIX } from './NETFLIX.jsx';
import { PRIMEVIDEO } from './PRIMEVIDEO.jsx';
import { TABBAR } from './TABBAR.jsx';
import { TOPNAV } from './TOPNAV.jsx';
import { WeuiArrowFilled } from './WeuiArrowFilled.jsx';
import { useLanguage } from '../src/i18n.jsx';

const fontStyle = {
  fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
};

const ScrollTrack = ({ progress, style, scrollRef }) => {
  const trackRef = useRef(null);
  const seek = (clientX) => {
    const el = scrollRef?.current;
    const track = trackRef.current;
    if (!el || !track) return;
    const rect = track.getBoundingClientRect();
    const fraction = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
    el.scrollLeft = fraction * (el.scrollWidth - el.clientWidth);
  };
  return (
    <div
      ref={trackRef}
      onMouseDown={(e) => {
        seek(e.clientX);
        const onMove = (ev) => seek(ev.clientX);
        const onUp = () => {
          window.removeEventListener("mousemove", onMove);
          window.removeEventListener("mouseup", onUp);
        };
        window.addEventListener("mousemove", onMove);
        window.addEventListener("mouseup", onUp);
      }}
      style={{
        position: "absolute",
        height: 16,
        display: "flex",
        alignItems: "flex-start",
        cursor: "pointer",
        ...style,
      }}
    >
      <div style={{
        position: "relative",
        width: "100%",
        height: 3,
        borderRadius: 2,
        backgroundColor: "rgba(255,255,255,0.1)",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "28%",
          borderRadius: 2,
          background: "linear-gradient(90deg, rgba(168,85,247,0.9), rgba(139,61,255,0.9))",
          transform: `translateX(${progress * (100 / 0.28 - 100)}%)`,
        }} />
      </div>
    </div>
  );
};

const useDragScroll = () => {
  const state = useRef({ dragging: false, startX: 0, startScrollLeft: 0 });
  return {
    onMouseDown: (e) => {
      state.current.dragging = true;
      state.current.startX = e.pageX;
      state.current.startScrollLeft = e.currentTarget.scrollLeft;
    },
    onMouseMove: (e) => {
      if (!state.current.dragging) return;
      e.preventDefault();
      e.currentTarget.scrollLeft = state.current.startScrollLeft - (e.pageX - state.current.startX);
    },
    onMouseUp: () => { state.current.dragging = false; },
    onMouseLeave: () => { state.current.dragging = false; },
  };
};

const SettingsRow = ({ label, onClick, danger }) => (
  <div
    className="selectable-card"
    style={{
      position: "relative",
      width: "100%",
      height: 72,
      flexShrink: 0,
      borderRadius: 12,
      cursor: "pointer",
      backgroundColor: danger ? "rgba(210,24,24,0.12)" : "rgba(139,61,255,0.12)",
      boxShadow: danger
        ? "inset 0 0 0 1px rgba(210,24,24,0.5)"
        : "inset 0 0 0 1px rgba(168,85,247,0.5), 5px 5px 8px 0px rgba(168,85,247,0.35)",
    }}
    onClick={onClick}
  >
    <span style={{
      ...fontStyle,
      position: "absolute",
      left: 22,
      top: 0,
      bottom: 0,
      display: "flex",
      alignItems: "center",
      fontWeight: 600,
      fontSize: 18,
      letterSpacing: "0.020em",
      color: danger ? "rgb(255,120,120)" : "rgb(255,255,255)",
      whiteSpace: "nowrap",
    }}>{label}</span>
    <WeuiArrowFilled style={{
      position: "absolute",
      right: 20,
      top: 24,
      width: 16,
      height: 32,
      color: danger ? "rgb(255,120,120)" : "rgb(248,247,255)",
    }} />
  </div>
);

// figma node: 411:451 PROFILE
export function PROFILE2(_p = {}) {
  const props = _p;
  const { t } = useLanguage();
  const [platformsProgress, setPlatformsProgress] = useState(0);
  const platformsDrag = useDragScroll();
  const platformsScrollRef = useRef(null);
  const [genresProgress, setGenresProgress] = useState(0);
  const genresDrag = useDragScroll();
  const genresScrollRef = useRef(null);
  const handleScroll = (setProgress) => (e) => {
    const el = e.currentTarget;
    const max = el.scrollWidth - el.clientWidth;
    setProgress(max > 0 ? el.scrollLeft / max : 0);
  };

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
        <span style={{
          ...fontStyle,
          position: "absolute",
          left: 30,
          top: 44,
          width: 200,
          height: 40,
          fontWeight: 700,
          fontSize: 32,
          whiteSpace: "nowrap",
          lineHeight: "40px",
          letterSpacing: "0.050em",
          color: "rgb(255,255,255)",
        }}>{t('profile.title')}</span>
        <span style={{
          ...fontStyle,
          position: "absolute",
          left: 30,
          top: 94,
          width: 311,
          height: 20,
          fontWeight: 600,
          fontSize: 15,
          whiteSpace: "nowrap",
          letterSpacing: "0.020em",
          color: "rgb(181,174,200)",
        }}>{t('profile.subtitle')}</span>

        <div style={{
          position: "absolute",
          left: 26,
          top: 124,
          width: 350,
          height: 150,
          borderRadius: 22,
          backgroundColor: "rgb(20,14,32)",
          boxShadow: "inset 0 0 0 1px rgba(168,85,247,0.35), 0 8px 20px -6px rgba(147,51,234,0.4)",
        }}>
          <div className="fig-asset-c3d70d6602d14253" style={{
            position: "absolute",
            left: 20,
            top: 17,
            width: 120,
            height: 116,
            borderRadius: "50%",
            boxShadow: "0 0 0 2px rgba(168,85,247,0.6)",
          }} />
          <span style={{
            ...fontStyle,
            position: "absolute",
            left: 165,
            top: 46,
            width: 165,
            height: 40,
            fontWeight: 700,
            fontSize: 26,
            whiteSpace: "nowrap",
            lineHeight: "34px",
            letterSpacing: "0.050em",
            color: "rgb(255,255,255)",
          }}>Aldana</span>
          <span style={{
            ...fontStyle,
            position: "absolute",
            left: 165,
            top: 84,
            width: 155,
            height: 40,
            fontWeight: 500,
            fontSize: 13,
            whiteSpace: "normal",
            lineHeight: "18px",
            letterSpacing: "0.020em",
            color: "rgb(181,174,200)",
          }}>{t('profile.tagline')}</span>
        </div>

        <span style={{
          ...fontStyle,
          position: "absolute",
          left: 31,
          top: 303,
          width: 200,
          height: 26,
          fontWeight: 600,
          fontSize: 15,
          whiteSpace: "nowrap",
          letterSpacing: "0.020em",
          color: "rgb(181,174,200)",
        }}>{t('profile.streamingPlatforms')}</span>

        <ScrollTrack progress={platformsProgress} scrollRef={platformsScrollRef} style={{ left: 26, top: 449, width: 350 }} />
        <div
          ref={platformsScrollRef}
          className="no-scrollbar"
          onScroll={handleScroll(setPlatformsProgress)}
          {...platformsDrag}
          style={{
            position: "absolute",
            left: 0,
            top: 339,
            width: 402,
            height: 100,
            overflowX: "auto",
            overflowY: "hidden",
            WebkitOverflowScrolling: "touch",
            cursor: "grab",
          }}
        >
          <div style={{
            position: "absolute",
            left: 26,
            top: 0,
            display: "flex",
            flexDirection: "row",
            gap: 14,
            alignItems: "center",
            flexWrap: "nowrap",
          }}>
            <DISNEY style={{ position: "relative", width: 150, height: 100, flexShrink: 0 }} property1={"default"} onClick={() => window.open("https://www.disneyplus.com", "_blank", "noopener,noreferrer")} />
            <HULU style={{ position: "relative", width: 150, height: 100, flexShrink: 0 }} property1={"default"} onClick={() => window.open("https://www.hulu.com", "_blank", "noopener,noreferrer")} />
            <MAX2 style={{ position: "relative", width: 150, height: 100, flexShrink: 0 }} property1={"default"} onClick={() => window.open("https://www.max.com", "_blank", "noopener,noreferrer")} />
            <NETFLIX style={{ position: "relative", width: 150, height: 100, flexShrink: 0 }} property1={"default"} onClick={() => window.open("https://www.netflix.com", "_blank", "noopener,noreferrer")} />
            <PRIMEVIDEO style={{ position: "relative", width: 150, height: 100, flexShrink: 0 }} property1={"default"} onClick={() => window.open("https://www.primevideo.com", "_blank", "noopener,noreferrer")} />
            <APPLETV style={{ position: "relative", width: 150, height: 100, flexShrink: 0 }} property1={"default"} onClick={() => window.open("https://tv.apple.com", "_blank", "noopener,noreferrer")} />
            <div style={{ width: 12, flexShrink: 0 }} />
          </div>
        </div>

        <span style={{
          ...fontStyle,
          position: "absolute",
          left: 31,
          top: 466,
          width: 200,
          height: 26,
          fontWeight: 600,
          fontSize: 15,
          whiteSpace: "nowrap",
          letterSpacing: "0.020em",
          color: "rgb(181,174,200)",
        }}>{t('profile.favoriteGenres')}</span>

        <ScrollTrack progress={genresProgress} scrollRef={genresScrollRef} style={{ left: 31, top: 548, width: 350 }} />
        <div
          ref={genresScrollRef}
          className="no-scrollbar"
          onScroll={handleScroll(setGenresProgress)}
          {...genresDrag}
          style={{
            position: "absolute",
            left: 0,
            top: 502,
            width: 402,
            height: 46,
            overflowX: "auto",
            overflowY: "hidden",
            WebkitOverflowScrolling: "touch",
            cursor: "grab",
          }}
        >
          <div style={{
            position: "absolute",
            left: 31,
            top: 0,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            alignItems: "center",
            flexWrap: "nowrap",
          }}>
            <MYSTERY property1={"default"} />
            <COMEDY property1={"default"} />
            <ACTION property1={"default"} />
            <ADVENTURE property1={"default"} />
            <DRAMA property1={"default"} />
            <div style={{ width: 12, flexShrink: 0 }} />
          </div>
        </div>

        <span style={{
          ...fontStyle,
          position: "absolute",
          left: 31,
          top: 603,
          width: 200,
          height: 26,
          fontWeight: 600,
          fontSize: 15,
          whiteSpace: "nowrap",
          letterSpacing: "0.020em",
          color: "rgb(181,174,200)",
        }}>{t('profile.preferences')}</span>

        <div style={{
          position: "absolute",
          left: 41,
          top: 639,
          width: 320,
          borderRadius: 16,
          display: "flex",
          flexDirection: "column",
          gap: 16,
          padding: "4px 10px",
          boxSizing: "border-box",
        }}>
          <SettingsRow label={t('profile.settings')} onClick={props.onSettings} />
          <SettingsRow label={t('profile.language')} onClick={props.onLanguage} />
          <SettingsRow label={t('profile.notifications')} onClick={props.onNotifications} />
          <SettingsRow label={t('profile.privacy')} onClick={props.onPrivacy} />
          <SettingsRow label={t('profile.logout')} onClick={props.onLogout} danger />
        </div>

        <div style={{ position: "absolute", left: 0, top: 1047, width: 1, height: 40 }} />
      </div>

      <TOPNAV style={{
          position: "absolute",
          left: 0,
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
        onMatch={props.onMatch}
        onDiscover={props.onDiscover}
        onWatchlist={props.onWatchlist}
        active={props.active}
      />
    </div>
  );
}
export default PROFILE2;
