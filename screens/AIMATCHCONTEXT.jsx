import { useState } from 'react';
import { BACKGROUNDWATCH } from './BACKGROUNDWATCH.jsx';
import { Continue } from './Continue.jsx';
import { DATENIGHT } from './DATENIGHT.jsx';
import { FAMILYTIME } from './FAMILYTIME.jsx';
import { MOVIEMARATHON } from './MOVIEMARATHON.jsx';
import { MiArrowUp } from './MiArrowUp.jsx';
import { SOLONIGHT } from './SOLONIGHT.jsx';
import { TABBAR } from './TABBAR.jsx';
import { TOPNAV } from './TOPNAV.jsx';
import { WITHFRIENDS } from './WITHFRIENDS.jsx';

const SelectRing = ({ selected }) => (
  <div style={{
    position: "absolute",
    inset: 0,
    borderRadius: 16,
    pointerEvents: "none",
    boxShadow: selected
      ? "inset 0 0 0 2px rgb(192,132,252), 0 0 14px 2px rgba(168,85,247,0.7)"
      : "inset 0 0 0 0px transparent",
    transition: "box-shadow 0.2s ease",
  }} />
);

const CARD_W = 168;
const CARD_H = 152;
const CARD_SCALE = 0.9;

// figma node: 109:211 AI MATCH CONTEXT
export function AIMATCHCONTEXT(_p = {}) {
  const props = _p;
  const [context, setContext] = useState(null);
  const Ctx = ({ id, Comp }) => (
    <div
      className="selectable-card"
      style={{ position: "relative", width: CARD_W * CARD_SCALE, height: CARD_H * CARD_SCALE, cursor: "pointer" }}
      onClick={() => setContext(id)}
    >
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: CARD_W,
        height: CARD_H,
        transform: `scale(${CARD_SCALE})`,
        transformOrigin: "top left",
      }}>
        <Comp style={{ position: "relative" }} property1={"default"} />
      </div>
      <SelectRing selected={context === id} />
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
        <div className="fig-asset-6e42081eae4ff783 crystal-ball-center" style={{
          position: "absolute",
          left: 210,
          top: 119,
          width: 168,
          height: 169,
          borderRadius: "50%",
        }} />
        <div className="fig-asset-6e42081eae4ff783 crystal-ball-ring" style={{
          position: "absolute",
          left: 210,
          top: 119,
          width: 168,
          height: 169,
          borderRadius: "50%",
        }} />
        <span style={{
          position: "absolute",
          left: 29,
          top: 176,
          width: 165,
          height: 122,
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 32,
          lineHeight: "40px",
          letterSpacing: "0.100em",
          color: "rgb(255,255,255)",
          whiteSpace: "pre-wrap",
        }}>{"Choose \nyour context!"}</span>
        <div style={{
          position: "absolute",
          left: 29,
          top: 123,
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
              }}>Step 2 of 4</span>
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
                backgroundColor: "rgb(217,217,217)",
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
            top: 880,
            width: 280,
            height: 60,
          }}
          property1={"default"}
          onClick={props.onNext}
        />
        <div style={{ position: "absolute", left: 0, top: 974, width: 1, height: 20 }} />
        <div style={{
          position: "absolute",
          left: 0,
          top: 398,
          width: 402,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
          gap: "16px 14px",
          padding: "0 16px",
          boxSizing: "border-box",
        }}>
          <Ctx id="solo" Comp={SOLONIGHT} />
          <Ctx id="date" Comp={DATENIGHT} />
          <Ctx id="family" Comp={FAMILYTIME} />
          <Ctx id="friends" Comp={WITHFRIENDS} />
          <Ctx id="background" Comp={BACKGROUNDWATCH} />
          <Ctx id="marathon" Comp={MOVIEMARATHON} />
        </div>
        <div style={{
          position: "absolute",
          left: 24,
          top: 73,
          width: 152,
          height: 40,
          overflow: "hidden",
        }}>
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
          left: 29,
          top: 324,
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
        }}>Tell us how you’re watching so we can recommend the perfect movie.</span>
      </div>
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
      <TOPNAV style={{
          position: "absolute",
          left: 1,
          top: 1,
          width: 402,
          height: 106,
        }}
        onProfileClick={props.onProfile}
      />
    </div>
  );
}
export default AIMATCHCONTEXT;
