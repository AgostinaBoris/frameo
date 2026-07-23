// figma node: 202:27 PRIME VIDEO (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "property1=" + __venc(p.property1);

export function PRIMEVIDEO(_p = {}) {
  const props = { ..._p, property1: _p.property1 ?? "default" };
  const __body0 = () => (
    <div className={`selectable-card ${props.className ?? ''}`} style={{
      width: 150,
      height: 100,
      position: "relative",
      cursor: "pointer",
      ...props.style,
    }}
    onClick={props.onClick}
    >
      <span style={{
        position: "absolute",
        left: 0,
        top: 57,
        width: 150,
        height: 24,
        fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "24px",
        letterSpacing: "0.050em",
        color: "rgb(255,255,255)",
      }}>{props.text1 ?? "Prime Video"}</span>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 150,
        height: 100,
        borderRadius: 20,
        boxShadow: "inset 0 0 0 1px rgb(0,0,0), 2px 2px 6px 0.500px rgba(168,85,247,0.89)",
      }} />
      <div className="fig-asset-636f404e7bdc5f13-d9f82a16" style={{
        position: "absolute",
        left: 37,
        top: 23,
        width: 75,
        height: 27,
      }} />
    </div>
  );
  const __body1 = () => (
    <div className={`selectable-card ${props.className ?? ''}`} style={{
      width: 150,
      height: 100,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 150,
        height: 100,
        borderRadius: 20,
      }} />
      <span style={{
        position: "absolute",
        left: 0,
        top: 57,
        width: 150,
        height: 24,
        fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "24px",
        letterSpacing: "0.050em",
        color: "rgb(255,255,255)",
      }}>{props.text1 ?? "Prime Video"}</span>
      <div className="fig-asset-636f404e7bdc5f13-d9f82a16" style={{
        position: "absolute",
        left: 38,
        top: 23,
        width: 75,
        height: 27,
      }} />
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
export default PRIMEVIDEO;
