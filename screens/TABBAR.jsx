import { BoxiconsSearch } from './BoxiconsSearch.jsx';
import { IconoirBrightStar } from './IconoirBrightStar.jsx';
import { MaterialSymbolsBookmarkOutline } from './MaterialSymbolsBookmarkOutline.jsx';
import { MaterialSymbolsHomeOutlineRounded } from './MaterialSymbolsHomeOutlineRounded.jsx';

const ACTIVE_COLOR = "rgb(192,132,252)";
const INACTIVE_COLOR = "rgb(201,202,190)";

const labelStyle = (active) => ({
  fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
  fontWeight: active ? 700 : 400,
  fontSize: 11,
  textAlign: "center",
  lineHeight: "18px",
  letterSpacing: "0.02em",
  whiteSpace: "nowrap",
  color: active ? ACTIVE_COLOR : INACTIVE_COLOR,
});

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

const iconWrapStyle = (active) => ({
  width: 35,
  height: 35,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
  backgroundColor: active ? "rgba(139,61,255,0.18)" : "transparent",
  boxShadow: active ? "0 0 12px 1px rgba(168,85,247,0.5)" : "none",
});

// figma node: 99:123 TAB BAR
export function TABBAR(_p = {}) {
  const props = _p;
  const active = props.active;
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
        <div className="tab-icon-wrap" style={iconWrapStyle(active === "home")}>
          {props.icon1 ?? <MaterialSymbolsHomeOutlineRounded style={{ transform: "scale(1.167, 1.167)", transformOrigin: "0 0", color: active === "home" ? ACTIVE_COLOR : INACTIVE_COLOR }} />}
        </div>
        <span style={labelStyle(active === "home")}>{props.text1 ?? "Home"}</span>
      </div>
      <div style={tabStyle} onClick={props.onDiscover}>
        <div className="tab-icon-wrap" style={iconWrapStyle(active === "discover")}>
          {props.icon2 ?? <BoxiconsSearch style={{ transform: "scale(1.333, 1.333)", transformOrigin: "0 0", color: active === "discover" ? ACTIVE_COLOR : INACTIVE_COLOR }} />}
        </div>
        <span style={labelStyle(active === "discover")}>{props.text2 ?? "Discover"}</span>
      </div>
      <div style={tabStyle} onClick={props.onMatch}>
        <div className="tab-icon-wrap" style={iconWrapStyle(active === "match")}>
          {props.icon3 ?? <IconoirBrightStar style={{ transform: "scale(1.067, 1.067)", transformOrigin: "0 0", color: active === "match" ? ACTIVE_COLOR : INACTIVE_COLOR }} />}
        </div>
        <span style={labelStyle(active === "match")}>{props.text3 ?? "AI Match"}</span>
      </div>
      <div style={tabStyle} onClick={props.onWatchlist}>
        <div className="tab-icon-wrap" style={iconWrapStyle(active === "watchlist")}>
          {props.icon4 ?? <MaterialSymbolsBookmarkOutline style={{ color: active === "watchlist" ? ACTIVE_COLOR : INACTIVE_COLOR }} />}
        </div>
        <span style={labelStyle(active === "watchlist")}>{props.text4 ?? "Watchlist"}</span>
      </div>
    </div>
  );
}
export default TABBAR;
