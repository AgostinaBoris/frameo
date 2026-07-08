// figma node: 248:241 MAX2 (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "property1=" + __venc(p.property1);

export function MAX2(_p = {}) {
  const props = { ..._p, property1: _p.property1 ?? "default" };
  const __body0 = () => (
    <div className={`selectable-card ${props.className ?? ''}`} style={{
      width: 150,
      height: 100,
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 62,
        top: 50,
        width: 26,
        height: 24,
        fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 12,
        lineHeight: "24px",
        letterSpacing: "0.050em",
        color: "rgb(255,255,255)",
        whiteSpace: "nowrap",
      }}>{(props.text1 ?? "Max").trim()}</span>
      <div className="fig-asset-7ca60bcf740459d7-2e00ffef" style={{
        position: "absolute",
        left: 49,
        top: 24,
        width: 52,
        height: 26,
      }} />
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 150,
        height: 100,
        borderRadius: 20,
        boxShadow: "inset 0 0 0 1px rgb(0,0,0), 2px 2px 6px 0.500px rgba(168,85,247,0.89)",
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
        backgroundColor: "rgb(217,217,217)",
      }} />
      <span style={{
        position: "absolute",
        left: 62,
        top: 50,
        width: 26,
        height: 24,
        fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 12,
        lineHeight: "24px",
        letterSpacing: "0.050em",
        color: "rgb(255,255,255)",
        whiteSpace: "pre-wrap",
      }}>{props.text1 ?? "Max\n"}</span>
      <div style={{
        position: "absolute",
        left: 49,
        top: 24,
        width: 52,
        height: 26,
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
export default MAX2;
