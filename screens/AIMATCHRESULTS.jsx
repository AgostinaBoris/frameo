import { AIAdvent } from './AIAdvent.jsx';
import { AIMovieNight2 } from './AIMovieNight2.jsx';
import { DETAILS } from './DETAILS.jsx';
import { MiArrowUp } from './MiArrowUp.jsx';
import { TABBAR } from './TABBAR.jsx';
import { TOPNAV } from './TOPNAV.jsx';

const ResultCard = ({ imgClass, title, match }) => (
  <div className="selectable-card" style={{
    position: "relative",
    height: 210,
    borderRadius: 18,
    overflow: "hidden",
    backgroundColor: "rgb(20,14,32)",
    boxShadow: "inset 0 0 0 1px rgba(168,85,247,0.35)",
    display: "flex",
    flexDirection: "row",
    alignSelf: "stretch",
    flexShrink: 0,
  }}>
    <div className={imgClass} style={{ width: 145, height: 210, flexShrink: 0 }} />
    <div style={{
      flex: 1,
      minWidth: 0,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      gap: 12,
      padding: "0 18px",
      boxSizing: "border-box",
    }}>
      <div>
        <div style={{
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 18,
          lineHeight: "22px",
          letterSpacing: "0.020em",
          color: "rgb(255,255,255)",
        }}>{title}</div>
        <div style={{
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 13,
          marginTop: 4,
          color: "rgb(181,174,200)",
        }}>{match}</div>
      </div>
      <div style={{ display: "flex", flexDirection: "row", gap: 8, flexWrap: "wrap" }}>
        <AIAdvent style={{ position: "relative" }} property1={"default"} />
        <AIMovieNight2 style={{ position: "relative" }} property1={"default"} />
      </div>
      <DETAILS style={{ position: "relative" }} property1={"default"} />
    </div>
  </div>
);

// figma node: 278:307 AI MATCH RESULTS
export function AIMATCHRESULTS(_p = {}) {
  const props = _p;
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
          position: "absolute",
          left: 29,
          top: 110,
          width: 344,
          height: 25,
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 14,
          textAlign: "center",
          whiteSpace: "normal",
          lineHeight: "18px",
          letterSpacing: "0.050em",
          color: "rgb(255,255,255)",
        }}>We found the best picks for your night.</span>
        <div style={{
          position: "absolute",
          left: 23,
          top: 49,
          width: 259,
          height: 40,
          overflow: "hidden",
        }}>
          <MiArrowUp style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 28,
              height: 28,
              transform: "matrix(0.000,-1,1,0.000,0,34)",
              transformOrigin: "0 0",
            }} />
          <span style={{
            position: "absolute",
            left: 38,
            top: 0,
            width: 221,
            height: 40,
            fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 700,
            fontSize: 22,
            whiteSpace: "nowrap",
            lineHeight: "40px",
            letterSpacing: "0.100em",
            color: "rgb(255,255,255)",
          }}>AI Match Results</span>
        </div>
        <div style={{
          position: "absolute",
          left: 22,
          top: 156,
          width: 357,
          display: "flex",
          flexDirection: "column",
          gap: 20,
          alignItems: "stretch",
          flexWrap: "nowrap",
        }}>
          <ResultCard imgClass="fig-asset-1260199bc4366ee9-23daf735" title="Avengers: Endgame" match="98% Match" />
          <ResultCard imgClass="fig-asset-45cc3d44daf46f8f" title="Skyscraper: LIVE" match="93% Match" />
          <ResultCard imgClass="fig-asset-d9a58d848d1c6df9" title="Iron Man 2" match="93% Match" />
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
export default AIMATCHRESULTS;
