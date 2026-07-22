import { MiArrowUp } from './MiArrowUp.jsx';
import { TABBAR } from './TABBAR.jsx';
import { TOPNAV } from './TOPNAV.jsx';

const fontStyle = {
  fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
};

const RECOMMENDED_IMG_CLASSES = [
  'fig-asset-e53d47c0c4f85041',
  'fig-asset-e625a1c455b8166b',
  'fig-asset-efcaca9d3bb699e8',
  'fig-asset-dad827e2556ef886',
  'fig-asset-d771b164fe5721e6',
  'fig-asset-9e8952d1ae35b842',
  'fig-asset-23f6e6cf786c3d41',
  'fig-asset-4b47891a73893a18',
  'fig-asset-4a78ae4c5c2a4b13',
  'fig-asset-2663e0e526ac3651',
];

// New screen: full grid of all recommended posters, opened from Home > Recommended for you > See all
export function RECOMMENDEDALL(props = {}) {
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
          }}>Recommended</span>
        </div>

        <div style={{
          position: "relative",
          width: 354,
          margin: "20px auto 32px",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 14,
        }}>
          {RECOMMENDED_IMG_CLASSES.map((imgClass) => (
            <div
              key={imgClass}
              className={`${imgClass} selectable-card`}
              style={{
                width: "100%",
                aspectRatio: "88 / 130",
                borderRadius: 12,
              }}
            />
          ))}
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
export default RECOMMENDEDALL;
