import { MiArrowUp } from './MiArrowUp.jsx';
import { TABBAR } from './TABBAR.jsx';
import { TOPNAV } from './TOPNAV.jsx';

const fontStyle = {
  fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
};

// figma node: 319:585 (FRAME) "MOVIE DETAILS"
export function MOVIEDETAILS(props = {}) {
  const movie = props.movie ?? {};
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
            letterSpacing: "0.050em",
            color: "rgb(255,255,255)",
          }}>Movie Details</span>
        </div>

        <div style={{
          position: "relative",
          width: 347,
          margin: "18px auto 0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 14,
        }}>
          <span style={{
            ...fontStyle,
            fontWeight: 700,
            fontSize: 24,
            lineHeight: "30px",
            letterSpacing: "0.020em",
            color: "rgb(255,255,255)",
            textAlign: "center",
          }}>{movie.title}</span>

          <div className={movie.imgClass} style={{
            width: 300,
            height: 300,
            borderRadius: 18,
            boxShadow: "inset 0 0 0 1px rgba(168,85,247,0.5), 0 8px 24px -6px rgba(147,51,234,0.5)",
            flexShrink: 0,
          }} />

          <div style={{
            padding: "6px 20px",
            borderRadius: 20,
            backgroundColor: "rgba(139,61,255,0.35)",
            boxShadow: "inset 0 0 0 1px rgba(168,85,247,0.7)",
          }}>
            <span style={{
              ...fontStyle,
              fontWeight: 700,
              fontSize: 15,
              letterSpacing: "0.020em",
              color: "rgb(255,255,255)",
              whiteSpace: "nowrap",
            }}>{movie.match}</span>
          </div>

          <span style={{
            ...fontStyle,
            fontWeight: 600,
            fontSize: 15,
            letterSpacing: "0.020em",
            color: "rgb(181,174,200)",
            textAlign: "center",
          }}>{movie.genre}</span>

          <span style={{
            ...fontStyle,
            fontWeight: 600,
            fontSize: 15,
            letterSpacing: "0.020em",
            color: "rgb(248,247,255)",
            textAlign: "center",
          }}>{movie.platform}</span>

          <span style={{
            ...fontStyle,
            fontWeight: 500,
            fontSize: 16,
            lineHeight: "24px",
            letterSpacing: "0.010em",
            color: "rgb(248,247,255)",
            textAlign: "center",
          }}>{movie.description}</span>

          <div style={{ alignSelf: "stretch", display: "flex", flexDirection: "column", gap: 6, marginTop: 8 }}>
            <span style={{
              ...fontStyle,
              fontWeight: 700,
              fontSize: 17,
              letterSpacing: "0.020em",
              color: "rgb(255,255,255)",
            }}>Why this match?</span>
            <span style={{
              ...fontStyle,
              fontWeight: 500,
              fontSize: 16,
              lineHeight: "22px",
              letterSpacing: "0.010em",
              color: "rgb(181,174,200)",
            }}>{movie.whyMatch}</span>
          </div>

          <div
            className="cta-button"
            style={{
              width: 260,
              height: 54,
              borderRadius: 20,
              marginTop: 14,
              position: "relative",
              cursor: "pointer",
              background: "linear-gradient(135deg, #c084fc 0%, #9333ea 55%, #6d28d9 100%)",
              boxShadow: "0 4px 12px -2px rgba(147,51,234,0.6), inset 0 1px 0 rgba(255,255,255,0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={() => {
              if (movie.watchUrl) window.open(movie.watchUrl, "_blank", "noopener,noreferrer");
            }}
          >
            <span style={{ ...fontStyle, fontWeight: 700, fontSize: 16, color: "rgb(255,255,255)", letterSpacing: "0.020em" }}>Watch Now</span>
          </div>

          <div
            className="cta-button"
            style={{
              width: 260,
              height: 54,
              borderRadius: 20,
              marginBottom: 40,
              position: "relative",
              cursor: "pointer",
              backgroundColor: "rgba(139,61,255,0.18)",
              boxShadow: "inset 0 0 0 1.5px rgba(168,85,247,0.8)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={props.onWatchlist}
          >
            <span style={{ ...fontStyle, fontWeight: 700, fontSize: 16, color: "rgb(255,255,255)", letterSpacing: "0.020em" }}>Save to Watchlist</span>
          </div>
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
export default MOVIEDETAILS;
