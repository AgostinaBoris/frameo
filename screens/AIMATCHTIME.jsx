import relojArenaHero from './assets/reloj-arena-hero.png';
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

const DUR_W = 352;
const DUR_H = 120;
const DUR_SCALE = 0.9;

// figma node: 180:145 AI MATCH TIME
export function AIMATCHTIME(_p = {}) {
  const props = _p;
  const duration = props.value ?? null;
  const Dur = ({ id, Comp, ...rest }) => (
    <div
      className="selectable-card"
      style={{ position: "relative", width: DUR_W * DUR_SCALE, height: DUR_H * DUR_SCALE, flexShrink: 0, cursor: "pointer" }}
      onClick={() => props.onSelect?.(id)}
    >
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: DUR_W,
        height: DUR_H,
        transform: `scale(${DUR_SCALE})`,
        transformOrigin: "top left",
      }}>
        <Comp style={{ position: "relative" }} property1={"default"} {...rest} />
      </div>
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
        <div className="time-image-float" style={{
          position: "absolute",
          left: 229,
          top: 175,
          width: 145,
          height: 170,
          borderRadius: "50%",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 6,
          boxSizing: "border-box",
        }}>
          <img src={relojArenaHero} alt="" style={{
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            objectFit: "cover",
          }} />
          <div className="hourglass-sand" style={{
            position: "absolute",
            left: "50%",
            top: 76,
            width: 3,
            height: 46,
            transform: "translateX(-50%)",
            pointerEvents: "none",
          }} />
        </div>
        <span style={{
          position: "absolute",
          left: 29,
          top: 195,
          width: 190,
          height: 152,
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
                fontSize: 15,
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
            top: 975,
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
          top: 372,
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
        }}>Frameo will match you with something that fits your available time.</span>
        <div style={{
          position: "absolute",
          left: 26,
          top: 439,
          width: 352,
          borderRadius: 20,
          display: "flex",
          flexDirection: "column",
          gap: 18,
          padding: "5px 5px 5px 5px",
          alignItems: "center",
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
