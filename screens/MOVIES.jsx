// figma node: 329:422 MOVIES (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "property1=" + __venc(p.property1);

export function MOVIES(_p = {}) {
  const props = { ..._p, property1: _p.property1 ?? "default" };
  const __body0 = () => (
    <div className={`selectable-card ${props.className ?? ''}`} style={{
      width: 77,
      height: 40,
      position: "relative",
      cursor: "pointer",
      ...props.style,
    }}
    onClick={props.onClick}
    >
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 77,
        height: 40,
        borderRadius: 5,
        backgroundColor: "rgba(139,61,255,0.65)",
        boxShadow: "inset 0 0 0 1px rgba(168,85,247,0.7), 2px 2px 6px 0.500px rgba(168,85,247,0.45)",
      }} />
      <span style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        letterSpacing: "0.020em",
        color: "rgb(248,247,255)",
      }}>{props.text1 ?? "Movies"}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 77,
      height: 40,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 77,
        height: 40,
        borderRadius: 5,
        backgroundColor: "rgb(217,217,217)",
      }} />
      <span style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        letterSpacing: "0.020em",
        color: "rgb(248,247,255)",
      }}>{props.text1 ?? "Movies"}</span>
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
export default MOVIES;
