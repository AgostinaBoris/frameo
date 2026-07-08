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

// figma node: 109:209 AI MATCH 
export function AIMATCH(_p = {}) {
  const props = _p;
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
        height: 750,
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
        }} />
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
            top: 773,
            width: 280,
            height: 60,
          }}
          property1={"default"}
          onClick={props.onNext}
        />
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
              fontSize: 14,
              whiteSpace: "nowrap",
              lineHeight: "25px",
              letterSpacing: "0.100em",
              color: "rgb(255,255,255)",
            }}>Choose how you feel and FRAMEO will start building your match. </span>
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
            <RELAXED
              style={{
                position: "relative",
                width: 160,
                height: 56,
                gridRow: "1",
                gridColumn: "1",
              }}
              property1={"default"}
            />
            <ROMANTIC
              style={{
                position: "relative",
                width: 160,
                height: 56,
                gridRow: "1",
                gridColumn: "2",
              }}
              property1={"default"}
            />
            <CURIOUS
              style={{
                position: "relative",
                width: 160,
                height: 56,
                gridRow: "2",
                gridColumn: "1",
              }}
              property1={"default"}
            />
            <FOCUSED
              style={{
                position: "relative",
                width: 160,
                height: 56,
                gridRow: "2",
                gridColumn: "2",
              }}
              property1={"default"}
            />
            <SAD
              style={{
                position: "relative",
                width: 160,
                height: 56,
                gridRow: "3",
                gridColumn: "1",
              }}
              property1={"default"}
            />
            <EXCITED
              style={{
                position: "relative",
                width: 160,
                height: 56,
                gridRow: "3",
                gridColumn: "2",
              }}
              property1={"default"}
            />
            <ADVENTUROUS
              style={{
                position: "relative",
                width: 160,
                height: 56,
                gridRow: "4",
                gridColumn: "1",
              }}
              text1={"Adventurous"}
              property1={"default"}
            />
            <STRESSED
              style={{
                position: "relative",
                width: 160,
                height: 56,
                gridRow: "4",
                gridColumn: "2",
              }}
              property1={"default"}
            />
          </div>
        </div>
      </div>
      <TABBAR style={{
          position: "absolute",
          left: 0,
          top: 779,
          width: 402,
          height: 98,
        }}
        onHome={props.onHome}
        onMatch={props.onMatch}
        onDiscover={props.onDiscover}
        onWatchlist={props.onWatchlist}
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
