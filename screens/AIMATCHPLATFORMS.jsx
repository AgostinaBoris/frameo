import { APPLETV } from './APPLETV.jsx';
import { DISNEY } from './DISNEY.jsx';
import { GetMatches } from './GetMatches.jsx';
import { HULU } from './HULU.jsx';
import { MAX2 } from './MAX2.jsx';
import { MiArrowUp } from './MiArrowUp.jsx';
import { NETFLIX } from './NETFLIX.jsx';
import { PRIMEVIDEO } from './PRIMEVIDEO.jsx';
import { TABBAR } from './TABBAR.jsx';
import { TOPNAV } from './TOPNAV.jsx';
import { useLanguage } from '../src/i18n.jsx';

const SelectRing = ({ selected }) => (
  <div style={{
    position: "absolute",
    inset: 0,
    borderRadius: 20,
    pointerEvents: "none",
    boxShadow: selected
      ? "inset 0 0 0 2px rgb(192,132,252), 0 0 14px 2px rgba(168,85,247,0.7)"
      : "inset 0 0 0 0px transparent",
    transition: "box-shadow 0.2s ease",
  }} />
);

// figma node: 188:195 AI MATCH PLATFORMS
export function AIMATCHPLATFORMS(_p = {}) {
  const props = _p;
  const { t } = useLanguage();
  const platforms = new Set(props.value ?? []);
  const togglePlatform = (id) => props.onToggle?.(id);
  const Plat = ({ id, Comp }) => (
    <div
      className="selectable-card"
      style={{ position: "relative", width: 150, height: 100, flexShrink: 0, cursor: "pointer" }}
      onClick={() => togglePlatform(id)}
    >
      <Comp style={{ position: "relative" }} property1={"default"} />
      <SelectRing selected={platforms.has(id)} />
    </div>
  );
  return (
    <div className={props.className} style={{
      width: 402,
      height: 874,
      overflow: "hidden",
      backgroundColor: "rgb(7,3,15)",
      position: "relative",
      color: "rgb(168,85,247)",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 85,
        width: 402,
        height: 673,
        overflowY: "auto",
        overflowX: "hidden",
        WebkitOverflowScrolling: "touch",
        backgroundColor: "rgb(7,3,15)",
      }}>
        <span style={{
          position: "absolute",
          left: 27,
          top: 174,
          width: 338,
          height: 77,
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 32,
          whiteSpace: "normal",
          lineHeight: "40px",
          letterSpacing: "0.100em",
          color: "rgb(255,255,255)",
        }}>{t('aimatch.platformsHeading')}</span>
        <div style={{
          position: "absolute",
          left: 27,
          top: 115,
          width: 155,
          height: 29,
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 155,
            height: 29,
            overflow: "hidden",
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 155,
              height: 29,
              overflow: "hidden",
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 25,
                width: 35,
                height: 4,
                backgroundColor: "rgb(168,85,247)",
              }} />
              <span style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 106,
                height: 17,
                fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 15,
                whiteSpace: "nowrap",
                lineHeight: "18px",
                letterSpacing: "0.280em",
                color: "rgb(255,255,255)",
              }}>{t('aimatch.step4of4')}</span>
              <svg width={35} height={4} viewBox="0 0 35 4" fill="none" style={{
                position: "absolute",
                left: 40,
                top: 25,
                width: 35,
                height: 4,
              }}>
                <path d={"M 0 0 L 35 0 L 35 4 L 15 4 L 0 4 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
              <div style={{
                position: "absolute",
                left: 80,
                top: 25,
                width: 35,
                height: 4,
                backgroundColor: "rgb(168,85,247)",
              }} />
              <div style={{
                position: "absolute",
                left: 120,
                top: 25,
                width: 35,
                height: 4,
                backgroundColor: "rgb(168,85,247)",
              }} />
            </div>
          </div>
        </div>
        <span style={{
          position: "absolute",
          left: 29,
          top: 276,
          width: 344,
          height: 51,
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 15,
          textAlign: "center",
          whiteSpace: "normal",
          lineHeight: "22px",
          letterSpacing: "0.050em",
          color: "rgb(255,255,255)",
        }}>{t('aimatch.platformsSubtitle')}</span>
        <span style={{
          position: "absolute",
          left: 57,
          top: 714,
          width: 245,
          height: 27,
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 15,
          whiteSpace: "nowrap",
          lineHeight: "25px",
          letterSpacing: "0.100em",
          color: "rgb(255,255,255)",
        }}>{t('aimatch.platformsHint')}</span>
        <div style={{
          position: "absolute",
          left: 19,
          top: 67,
          width: 152,
          height: 40,
          overflow: "hidden",
        }}>
          <div
            className="tab-icon-wrap"
            style={{ position: "absolute", left: 0, top: 0, width: 28, height: 28, cursor: "pointer" }}
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
            position: "absolute",
            left: 38,
            top: 0,
            width: 114,
            height: 40,
            fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 700,
            fontSize: 19,
            whiteSpace: "nowrap",
            lineHeight: "40px",
            letterSpacing: "0.100em",
            color: "rgb(255,255,255)",
          }}>{t('aimatch.title')}</span>
        </div>
        <div style={{
          position: "absolute",
          left: 0,
          top: 351,
          width: 402,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px 18px",
          padding: "0 20px",
          boxSizing: "border-box",
        }}>
          <Plat id="netflix" Comp={NETFLIX} />
          <Plat id="prime" Comp={PRIMEVIDEO} />
          <Plat id="disney" Comp={DISNEY} />
          <Plat id="appletv" Comp={APPLETV} />
          <Plat id="hulu" Comp={HULU} />
          <Plat id="max" Comp={MAX2} />
        </div>
        <GetMatches
          style={{
            position: "absolute",
            left: 61,
            top: 781,
            width: 280,
            height: 60,
          }}
          property1={"default"}
          onClick={props.onNext}
        />
        <div style={{ position: "absolute", left: 0, top: 851, width: 1, height: 20 }} />
      </div>
      <TOPNAV style={{
          position: "absolute",
          left: 0,
          top: -1,
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
export default AIMATCHPLATFORMS;
