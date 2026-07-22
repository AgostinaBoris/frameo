import { ADVENTUROUS } from './ADVENTUROUS.jsx';
import { CURIOUS } from './CURIOUS.jsx';
import { Continue } from './Continue.jsx';
import { EXCITED } from './EXCITED.jsx';
import { FOCUSED } from './FOCUSED.jsx';
import { RELAXED } from './RELAXED.jsx';
import { ROMANTIC } from './ROMANTIC.jsx';
import { SAD } from './SAD.jsx';
import { STRESSED } from './STRESSED.jsx';
import { TABBAR } from './TABBAR.jsx';
import { TOPNAV } from './TOPNAV.jsx';

const SelectRing = ({ selected }) => (
  <div style={{
    position: "absolute",
    inset: 0,
    borderRadius: 12,
    pointerEvents: "none",
    boxShadow: selected
      ? "inset 0 0 0 2px rgb(192,132,252), 0 0 14px 2px rgba(168,85,247,0.7)"
      : "inset 0 0 0 0px transparent",
    transition: "box-shadow 0.2s ease",
  }} />
);

// figma node: 109:209 AI MATCH
export function AIMATCH(_p = {}) {
  const props = _p;
  const mood = props.value ?? null;
  const Mood = ({ id, Comp, ...rest }) => (
    <div
      className="selectable-card"
      style={{ position: "relative", width: 160, height: 56, cursor: "pointer" }}
      onClick={() => props.onSelect?.(id)}
    >
      <Comp style={{ position: "relative" }} property1={"default"} {...rest} />
      <SelectRing selected={mood === id} />
    </div>
  );
  return (
    <div className={props.className} style={{
      width: 402,
      height: 874,
      overflow: "hidden",
      backgroundColor: "rgb(7,3,15)",
      position: "relative",
      color: "rgb(217,217,217)",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 29,
        width: 402,
        height: 729,
        overflowY: "auto",
        overflowX: "hidden",
        WebkitOverflowScrolling: "touch",
        backgroundColor: "rgb(7,3,15)",
      }}>
        <div className="fig-asset-64a0b831fcf42582" style={{
          position: "absolute",
          left: 204,
          top: 140,
          width: 172,
          height: 168,
          borderRadius: "50%",
          overflow: "hidden",
        }}>
          <div className="mood-sea-shimmer" />
        </div>
        <span style={{
          position: "absolute",
          left: 30,
          top: 148,
          width: 170,
          height: 40,
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 32,
          whiteSpace: "nowrap",
          lineHeight: "40px",
          letterSpacing: "0.100em",
          color: "rgb(255,255,255)",
        }}>AI Match</span>
        <span style={{
          position: "absolute",
          left: 30,
          top: 192,
          width: 106,
          height: 17,
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 15,
          whiteSpace: "nowrap",
          lineHeight: "40px",
          letterSpacing: "0.100em",
          color: "rgb(255,255,255)",
        }}>Step 1 of 4</span>
        <div style={{
          position: "absolute",
          left: 24,
          top: 224,
          width: 35,
          height: 4,
          backgroundColor: "rgb(217,217,217)",
        }} />
        <svg width={35} height={4} viewBox="0 0 35 4" fill="none" style={{
          position: "absolute",
          left: 64,
          top: 224,
          width: 35,
          height: 4,
        }}>
          <path d={"M 0 0 L 35 0 L 35 4 L 15 4 L 0 4 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <div style={{
          position: "absolute",
          left: 104,
          top: 224,
          width: 35,
          height: 4,
          backgroundColor: "rgb(217,217,217)",
        }} />
        <div style={{
          position: "absolute",
          left: 144,
          top: 224,
          width: 35,
          height: 4,
          backgroundColor: "rgb(217,217,217)",
        }} />
        <Continue
          style={{
            position: "absolute",
            left: 61,
            top: 780,
            width: 280,
            height: 60,
          }}
          property1={"default"}
          onClick={props.onNext}
        />
        <div style={{ position: "absolute", left: 0, top: 833, width: 1, height: 20 }} />
        <div style={{
          position: "absolute",
          left: 25,
          top: 287,
          width: 352,
          borderRadius: 20,
          display: "flex",
          flexDirection: "column",
          gap: 24,
          padding: "20px 32px 20px 32px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            width: 328,
            height: 99,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <span style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 328,
              height: 48,
              fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 700,
              fontSize: 22,
              whiteSpace: "pre-wrap",
              lineHeight: "40px",
              letterSpacing: "0.100em",
              color: "rgb(255,255,255)",
              display: "inline-block",
            }}>{"Tell FRAMEO "}{"your mood"}</span>
            <span style={{
              position: "absolute",
              left: 3,
              top: 48,
              width: 288,
              height: 51,
              fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 700,
              fontSize: 15,
              whiteSpace: "normal",
              lineHeight: "25px",
              letterSpacing: "0.020em",
              color: "rgb(181,174,200)",
            }}>Choose how you feel and FRAMEO will start building your match.</span>
          </div>
          <div style={{
            position: "relative",
            width: 336,
            height: 290,
            display: "grid",
            gridTemplateRows: "1fr 1fr 1fr 1fr",
            gridTemplateColumns: "1fr 1fr",
            gap: "22px 16px",
            flexShrink: 0,
          }}>
            <div style={{ gridRow: "1", gridColumn: "1" }}>
              <Mood id="relaxed" Comp={RELAXED} />
            </div>
            <div style={{ gridRow: "1", gridColumn: "2" }}>
              <Mood id="romantic" Comp={ROMANTIC} />
            </div>
            <div style={{ gridRow: "2", gridColumn: "1" }}>
              <Mood id="curious" Comp={CURIOUS} />
            </div>
            <div style={{ gridRow: "2", gridColumn: "2" }}>
              <Mood id="focused" Comp={FOCUSED} />
            </div>
            <div style={{ gridRow: "3", gridColumn: "1" }}>
              <Mood id="sad" Comp={SAD} />
            </div>
            <div style={{ gridRow: "3", gridColumn: "2" }}>
              <Mood id="excited" Comp={EXCITED} />
            </div>
            <div style={{ gridRow: "4", gridColumn: "1" }}>
              <Mood id="adventurous" Comp={ADVENTUROUS} text1={"Adventurous"} />
            </div>
            <div style={{ gridRow: "4", gridColumn: "2" }}>
              <Mood id="stressed" Comp={STRESSED} />
            </div>
          </div>
        </div>
      </div>
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
      <TOPNAV style={{
          position: "absolute",
          left: 0,
          top: 2,
          width: 402,
          height: 106,
        }}
        onProfileClick={props.onProfile}
      />
    </div>
  );
}
export default AIMATCH;
