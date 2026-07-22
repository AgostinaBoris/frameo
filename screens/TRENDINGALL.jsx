import { MiArrowUp } from './MiArrowUp.jsx';
import { TABBAR } from './TABBAR.jsx';
import { TOPNAV } from './TOPNAV.jsx';

const fontStyle = {
  fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
};

const TRENDING_IMG_CLASSES = [
  'fig-asset-fcb0ef5ff53e601e',
  'fig-asset-237203808fd8fd1f',
  'fig-asset-ff36a2c3a2c4b94f',
  'fig-asset-25943ea217d4f72e',
  'fig-asset-f2fe566f855ae3fe',
  'fig-asset-9c6a2c84f86cb417',
  'fig-asset-ae92377963041c32',
  'fig-asset-e03f4135636ca39c',
  'fig-asset-5ea01b727a89d512',
  'fig-asset-60b65f613ac2cc62',
  'fig-asset-541ef6b35ea6b1f0',
  'fig-asset-d2d7c0a777956e63',
];

// New screen: full grid of all trending posters, opened from Home > Trending now > See all
export function TRENDINGALL(props = {}) {
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
          }}>Trending Now</span>
        </div>

        <div style={{
          position: "relative",
          width: 354,
          margin: "20px auto 32px",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 14,
        }}>
          {TRENDING_IMG_CLASSES.map((imgClass) => (
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
export default TRENDINGALL;
