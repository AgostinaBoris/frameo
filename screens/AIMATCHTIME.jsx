import { useState } from 'react';
import { Continue } from './Continue.jsx';
import { HAVETIME } from './HAVETIME.jsx';
import { MOVIENIGHT } from './MOVIENIGHT.jsx';
import { QUICKBREAK } from './QUICKBREAK.jsx';
import { SHORTWATCH } from './SHORTWATCH.jsx';
import { TABBAR } from './TABBAR.jsx';
import { TOPNAV } from './TOPNAV.jsx';

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

// figma node: 180:145 AI MATCH TIME
export function AIMATCHTIME(_p = {}) {
  const props = _p;
  const [duration, setDuration] = useState(null);
  const Dur = ({ id, Comp, ...rest }) => (
    <div
      className="selectable-card"
      style={{ position: "relative", height: 120, flexShrink: 0, alignSelf: "stretch", cursor: "pointer" }}
      onClick={() => setDuration(id)}
    >
      <Comp style={{ position: "relative", width: "auto" }} property1={"default"} {...rest} />
      <SelectRing selected={duration === id} />
    </div>
  );
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
        top: 79,
        width: 402,
        height: 679,
        overflowY: "auto",
        overflowX: "hidden",
        WebkitOverflowScrolling: "touch",
        backgroundColor: "rgb(7,3,15)",
      }}>
        <div style={{
          position: "absolute",
          left: 246,
          top: 175,
          width: 145,
          height: 170,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(139,61,255,0.5) 0%, rgba(7,3,15,0.95) 70%)",
          boxShadow: "0 0 44px 8px rgba(139,61,255,0.45)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
          <svg width={110} height={140} viewBox="0 0 110 140" fill="none">
            {[
              { x: 12, y: 40, s: 5 }, { x: 96, y: 60, s: 7 }, { x: 18, y: 105, s: 4 }, { x: 92, y: 20, s: 4 },
            ].map((p, i) => (
              <path key={i} d={`M${p.x} ${p.y - p.s} L${p.x + p.s * 0.35} ${p.y - p.s * 0.35} L${p.x + p.s} ${p.y} L${p.x + p.s * 0.35} ${p.y + p.s * 0.35} L${p.x} ${p.y + p.s} L${p.x - p.s * 0.35} ${p.y + p.s * 0.35} L${p.x - p.s} ${p.y} L${p.x - p.s * 0.35} ${p.y - p.s * 0.35} Z`} fill="rgba(216,180,254,0.85)" />
            ))}
            <text x="55" y="18" textAnchor="middle" fontSize="9" fontFamily="serif" fill="rgba(230,210,255,0.85)" letterSpacing="2">XII</text>
            <rect x="30" y="24" width="50" height="9" rx="4" stroke="rgba(216,180,254,0.9)" strokeWidth="1.6" />
            <rect x="30" y="118" width="50" height="9" rx="4" stroke="rgba(216,180,254,0.9)" strokeWidth="1.6" />
            <path d="M33 33 C33 55 52 55 52 68 C52 70 58 70 58 68 C58 55 77 55 77 33"
              stroke="rgba(216,180,254,0.9)" strokeWidth="1.6" fill="none" />
            <path d="M33 118 C33 96 52 96 52 83 C52 81 58 81 58 83 C58 96 77 96 77 118"
              stroke="rgba(216,180,254,0.9)" strokeWidth="1.6" fill="none" />
            <path d="M38 33 C38 50 55 52 55 63 L55 33 Z" fill="rgba(147,51,234,0.55)" />
            <path d="M40 118 C40 102 55 100 55 92 L55 118 Z" fill="rgba(147,51,234,0.55)" />
            <circle cx="55" cy="72" r="1.4" fill="rgba(230,210,255,0.9)" />
            <circle cx="55" cy="79" r="1.4" fill="rgba(230,210,255,0.9)" />
            <path d="M55 63 L55 72" stroke="rgba(230,210,255,0.9)" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
        </div>
        <span style={{
          position: "absolute",
          left: 29,
          top: 195,
          width: 230,
          height: 122,
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 32,
          whiteSpace: "normal",
          lineHeight: "38px",
          letterSpacing: "0.030em",
          color: "rgb(255,255,255)",
        }}>How much time do you have?</span>
        <div style={{
          position: "absolute",
          left: 29,
          top: 136,
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
                fontSize: 13,
                whiteSpace: "nowrap",
                lineHeight: "18px",
                letterSpacing: "0.280em",
                color: "rgb(255,255,255)",
              }}>Step 3 of 4</span>
              <svg width={35} height={4} viewBox="0 0 35 4" fill="none" style={{
                position: "absolute",
                left: 40,
                top: 25,
                width: 35,
                height: 4,
                color: "rgb(168,85,247)",
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
                backgroundColor: "rgb(217,217,217)",
              }} />
            </div>
          </div>
        </div>
        <Continue
          style={{
            position: "absolute",
            left: 61,
            top: 992,
            width: 280,
            height: 60,
          }}
          property1={"default"}
          onClick={props.onNext}
        />
        <div style={{ position: "absolute", left: 0, top: 1052, width: 1, height: 20 }} />
        <span style={{
          position: "absolute",
          left: 29,
          top: 352,
          width: 344,
          height: 51,
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 14,
          textAlign: "center",
          whiteSpace: "normal",
          lineHeight: "22px",
          letterSpacing: "0.050em",
          color: "rgb(255,255,255)",
        }}>Frameo will match you with something that fits your available time.</span>
        <div style={{
          position: "absolute",
          left: 26,
          top: 419,
          width: 352,
          borderRadius: 20,
          display: "flex",
          flexDirection: "column",
          gap: 18,
          padding: "5px 5px 5px 5px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <Dur id="short" Comp={SHORTWATCH} />
          <Dur id="quick" Comp={QUICKBREAK} text1={"Under 30 min.\n"} />
          <Dur id="night" Comp={MOVIENIGHT} />
          <Dur id="have-time" Comp={HAVETIME} />
        </div>
        <div style={{
          position: "absolute",
          left: 24,
          top: 88,
          width: 152,
          height: 40,
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(0.000,-1,1,0.000,0,34)",
            transformOrigin: "0 0",
            width: 28,
            height: 28,
          }}>
            <svg width={16.305} height={18.667} viewBox="0 0 16.305 18.667" fill="none" style={{
              position: "absolute",
              left: 5.848,
              top: 4.667,
              width: 16.305,
              height: 18.667,
              color: "rgb(248,247,255)",
            }}>
              <path d={"M 8.152 0 C 8.462 0 8.758 0.123 8.977 0.342 L 15.977 7.342 C 16.19 7.562 16.307 7.857 16.305 8.162 C 16.302 8.468 16.179 8.761 15.963 8.977 C 15.747 9.194 15.454 9.316 15.148 9.319 C 14.842 9.322 14.548 9.204 14.327 8.991 L 9.319 3.983 L 9.319 17.5 C 9.319 17.809 9.196 18.106 8.977 18.325 C 8.758 18.544 8.462 18.667 8.152 18.667 C 7.843 18.667 7.546 18.544 7.327 18.325 C 7.109 18.106 6.986 17.809 6.986 17.5 L 6.986 3.983 L 1.977 8.991 C 1.757 9.204 1.462 9.322 1.157 9.319 C 0.851 9.316 0.558 9.194 0.342 8.977 C 0.125 8.761 0.003 8.468 0 8.162 C -0.003 7.857 0.115 7.562 0.327 7.342 L 7.327 0.342 C 7.546 0.123 7.843 0 8.152 0 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
          <span style={{
            position: "absolute",
            left: 38,
            top: 0,
            width: 114,
            height: 40,
            fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 700,
            fontSize: 22,
            whiteSpace: "nowrap",
            lineHeight: "40px",
            letterSpacing: "0.100em",
            color: "rgb(255,255,255)",
          }}>AI Match</span>
        </div>
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
export default AIMATCHTIME;
