// figma node: 180:250 QUICK BREAK (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "property1=" + __venc(p.property1);

export function QUICKBREAK(_p = {}) {
  const props = { ..._p, property1: _p.property1 ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 352,
      height: 120,
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 116,
        top: 68,
        width: 119,
        height: 26,
        fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "25px",
        letterSpacing: "0.100em",
        color: "rgb(255,255,255)",
      }}>{props.text1 ?? "Under 30 min,"}</span>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 352,
        height: 120,
        borderRadius: 20,
        boxShadow: "inset 0 0 0 1px rgb(0,0,0), 2px 2px 6px 0.500px rgba(168,85,247,0.89)",
      }} />
      <div className="fig-asset-ac80bfa8f4a5bd7c" style={{
        position: "absolute",
        left: 22,
        top: 20,
        width: 80,
        height: 80,
      }} />
      <span style={{
        position: "absolute",
        left: 116,
        top: 30,
        width: 140,
        height: 31,
        fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 20,
        whiteSpace: "nowrap",
        lineHeight: "40px",
        letterSpacing: "0.020em",
        color: "rgb(255,255,255)",
      }}>{props.text2 ?? "Quick Break"}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 352,
      height: 120,
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 118,
        top: 73,
        width: 119,
        height: 26,
        fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "25px",
        letterSpacing: "0.100em",
        color: "rgb(255,255,255)",
      }}>{props.text1 ?? "Under 30 min,"}</span>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 352,
        height: 120,
        borderRadius: 20,
        backgroundColor: "rgb(138,131,156)",
      }} />
      <div className="fig-asset-ac80bfa8f4a5bd7c" style={{
        position: "absolute",
        left: 22,
        top: 20,
        width: 80,
        height: 80,
      }} />
      <span style={{
        position: "absolute",
        left: 118,
        top: 30,
        width: 139,
        height: 38,
        fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 20,
        whiteSpace: "nowrap",
        lineHeight: "40px",
        letterSpacing: "0.020em",
        color: "rgb(255,255,255)",
      }}>{props.text2 ?? "Quick Break"}</span>
      <span style={{
        position: "absolute",
        left: 118,
        top: 71,
        width: 119,
        height: 26,
        fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "25px",
        letterSpacing: "0.100em",
        color: "rgb(255,255,255)",
      }}>{props.text3 ?? "Under 30 min,"}</span>
    </div>
  );
  const __impls = {
    // figma: Property 1=Default
    "property1=default": __body0,
    // figma: Property 1=Variant2
    "property1=variant2": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default QUICKBREAK;
