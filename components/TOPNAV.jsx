import { PROFILE } from './PROFILE.jsx';

// figma node: 109:219 TOP NAV
export function TOPNAV(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 402,
      height: 106,
      backgroundColor: "rgb(7,3,15)",
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      boxSizing: "border-box",
      padding: "0 24px",
      ...props.style,
    }}>
      <span style={{
        fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 22,
        letterSpacing: "0.500em",
        color: "rgb(255,255,255)",
      }}>FRAMEO</span>
      <div
        style={{
          width: 38,
          height: 38,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
        onClick={props.onProfileClick}
      >{props.icon1 ?? <PROFILE style={{ transform: "scale(1.086, 1.086)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
}
export default TOPNAV;
