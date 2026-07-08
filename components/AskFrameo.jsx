// figma node: 84:46 Ask Frameo (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "property1=" + __venc(p.property1);

export function AskFrameo(_p = {}) {
  const props = { ..._p, property1: _p.property1 ?? "default" };
  const __body0 = () => (
    <div className={`cta-button ${props.className ?? ''}`} style={{
      width: 280,
      height: 60,
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
        width: 280,
        height: 60,
        borderRadius: 20,
        background: "linear-gradient(135deg, #c084fc 0%, #9333ea 55%, #6d28d9 100%)",
        boxShadow: "0 10px 28px -6px rgba(147,51,234,0.75), 0 2px 4px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.35), inset 0 0 0 1px rgba(216,180,254,0.5)",
      }} />
      <span style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 26,
        textAlign: "center",
        whiteSpace: "nowrap",
        color: "rgb(255,255,255)",
        textShadow: "0 1px 3px rgba(0,0,0,0.35)",
      }}>✨ {props.text1 ?? "Ask Frameo"}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 280,
      height: 60,
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
        width: 280,
        height: 60,
        borderRadius: 20,
        backgroundColor: "rgb(56,30,114)",
      }} />
      <span style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 26,
        textAlign: "center",
        whiteSpace: "nowrap",
        color: "rgb(241,245,249)",
      }}>{props.text1 ?? "Ask Frameo"}</span>
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
export default AskFrameo;
