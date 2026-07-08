// figma node: 84:46 Ask Frameo (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "property1=" + __venc(p.property1);

export function AskFrameo(_p = {}) {
  const props = { ..._p, property1: _p.property1 ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 280,
      height: 60,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 280,
        height: 60,
        borderRadius: 20,
        backgroundColor: "rgb(139,61,255)",
        boxShadow: "inset 0 0 0 1px rgba(168,85,247,0.89)",
      }} />
      <span style={{
        position: "absolute",
        left: 52,
        top: 19,
        width: 176,
        height: 24,
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 26,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "44px",
        color: "rgb(241,245,249)",
      }}>{props.text1 ?? "Ask Frameo"}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 280,
      height: 60,
      position: "relative",
      ...props.style,
    }}>
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
        left: 52,
        top: 20,
        width: 176.42,
        height: 20,
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 26,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "44px",
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
