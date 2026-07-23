// figma node: 202:21 DISNEY+ (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "property1=" + __venc(p.property1);

export function DISNEY(_p = {}) {
  const props = { ..._p, property1: _p.property1 ?? "default" };
  const __body0 = () => (
    <div className={`selectable-card ${props.className ?? ''}`} style={{
      width: 150,
      height: 100,
      boxShadow: "5px 4px 4px 0px rgba(0,0,0,0.25)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 61,
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
      }}>{props.text1 ?? "Disney+"}</span>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 150,
        height: 100,
        borderRadius: 20,
        boxShadow: "inset 0 0 0 1px rgb(0,0,0), 2px 2px 6px 0.500px rgba(168,85,247,0.89)",
      }} />
      <div className="fig-asset-ed593a51bcb3685d-66e10d6f" style={{
        position: "absolute",
        left: 40,
        top: 21,
        width: 70,
        height: 40,
      }} />
    </div>
  );
  const __body1 = () => (
    <div className={`selectable-card ${props.className ?? ''}`} style={{
      width: 150,
      height: 100,
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
        width: 150,
        height: 100,
        borderRadius: 20,
      }} />
      <span style={{
        position: "absolute",
        left: 0,
        top: 61,
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
      }}>{props.text1 ?? "Disney+"}</span>
      <div className="fig-asset-ed593a51bcb3685d-66e10d6f" style={{
        position: "absolute",
        left: 40,
        top: 21,
        width: 70,
        height: 40,
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
export default DISNEY;
