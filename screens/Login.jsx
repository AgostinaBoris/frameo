// figma node: 22:48 Login (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "property1=" + __venc(p.property1);

export function Login(_p = {}) {
  const props = { ..._p, property1: _p.property1 ?? "default" };
  const __body0 = () => (
    <div className={`cta-button ${props.className ?? ''}`} style={{
      width: 280,
      height: 60,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      cursor: "pointer",
      ...props.style,
    }}
    onClick={props.onClick}
    >
      <div style={{
        position: "relative",
        width: 280,
        borderRadius: 15,
        backgroundColor: "rgb(139,61,255)",
        boxShadow: "inset 0 0 0 1px rgba(168,85,247,0.89)",
        flexShrink: 0,
        alignSelf: "stretch",
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
      }}>{props.text1 ?? "Log in"}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 60,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}
    onClick={props.onClick}
    >
      <div style={{
        position: "relative",
        width: 280,
        borderRadius: 15,
        backgroundColor: "rgba(79,55,139,0.08)",
        flexShrink: 0,
        alignSelf: "stretch",
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
      }}>{props.text1 ?? "Log in"}</span>
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
export default Login;
