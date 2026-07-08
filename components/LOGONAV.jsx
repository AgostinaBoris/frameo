// figma node: 74:29 LOGO NAV
export function LOGONAV(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 176,
      height: 30,
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 176,
        height: 30,
        fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 25,
        whiteSpace: "pre-wrap",
        lineHeight: "100%",
        letterSpacing: "0.500em",
        color: "rgb(255,255,255)",
        display: "inline-block",
      }}><span style={{ fontSize: 25 }}>{"FRAME"}</span><span style={{ fontSize: 25 }}>{"O"}</span></span>
    </div>
  );
}
export default LOGONAV;
