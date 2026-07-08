import { BoxiconsSearch } from './BoxiconsSearch.jsx';
import { IconoirBrightStar } from './IconoirBrightStar.jsx';
import { MaterialSymbolsBookmarkOutline } from './MaterialSymbolsBookmarkOutline.jsx';
import { MaterialSymbolsHomeOutlineRounded } from './MaterialSymbolsHomeOutlineRounded.jsx';

const labelStyle = {
  fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
  fontWeight: 400,
  fontSize: 11,
  textAlign: "center",
  lineHeight: "18px",
  letterSpacing: "0.02em",
  whiteSpace: "nowrap",
  color: "rgb(201,202,190)",
};

const tabStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 8,
  padding: "10px 4px",
  cursor: "pointer",
};

// figma node: 99:123 TAB BAR
export function TABBAR(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 402,
      height: 98,
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      boxSizing: "border-box",
      padding: "0 8px",
      backgroundColor: "rgb(7,3,15)",
      ...props.style,
    }}>
      <div style={tabStyle} onClick={props.onHome}>
        <div className="tab-icon-wrap" style={{ width: 35, height: 35, display: "flex", alignItems: "center", justifyContent: "center" }}>
          {props.icon1 ?? <MaterialSymbolsHomeOutlineRounded style={{ transform: "scale(1.167, 1.167)", transformOrigin: "0 0" }} />}
        </div>
        <span style={labelStyle}>{props.text1 ?? "Home"}</span>
      </div>
      <div style={tabStyle} onClick={props.onDiscover}>
        <div className="tab-icon-wrap" style={{ width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center" }}>
          {props.icon2 ?? <BoxiconsSearch style={{ transform: "scale(1.333, 1.333)", transformOrigin: "0 0" }} />}
        </div>
        <span style={labelStyle}>{props.text2 ?? "Discover"}</span>
      </div>
      <div style={tabStyle} onClick={props.onMatch}>
        <div className="tab-icon-wrap" style={{ width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center" }}>
          {props.icon3 ?? <IconoirBrightStar style={{ transform: "scale(1.067, 1.067)", transformOrigin: "0 0" }} />}
        </div>
        <span style={labelStyle}>{props.text3 ?? "AI Match"}</span>
      </div>
      <div style={tabStyle} onClick={props.onWatchlist}>
        <div className="tab-icon-wrap" style={{ width: 30, height: 30, display: "flex", alignItems: "center", justifyContent: "center" }}>
          {props.icon4 ?? <MaterialSymbolsBookmarkOutline />}
        </div>
        <span style={labelStyle}>{props.text4 ?? "Watchlist"}</span>
      </div>
    </div>
  );
}
export default TABBAR;
