// figma node: 329:446 RECENTLY SAVED (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "property1=" + __venc(p.property1);

export function RECENTLYSAVED(_p = {}) {
  const props = { ..._p, property1: _p.property1 ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 88,
      height: 40,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 88,
        height: 40,
        borderRadius: 5,
        boxShadow: "inset 0 0 0 1px rgb(0,0,0), 2px 2px 6px 0.500px rgba(168,85,247,0.89)",
      }} />
      <span style={{
        position: "absolute",
        left: 8,
        top: 0,
        width: 72.769,
        height: 25,
        fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 11,
        textAlign: "center",
        lineHeight: "40px",
        letterSpacing: "0.020em",
        color: "rgb(248,247,255)",
        whiteSpace: "pre-wrap",
      }}>{props.text1 ?? "Saved\n"}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 88,
      height: 40,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 88,
        height: 40,
        borderRadius: 5,
        backgroundColor: "rgb(217,217,217)",
      }} />
      <span style={{
        position: "absolute",
        left: 1,
        top: 0,
        width: 86,
        height: 25,
        fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 11,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "40px",
        letterSpacing: "0.020em",
        color: "rgb(248,247,255)",
      }}>{props.text1 ?? "Saved"}</span>
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
export default RECENTLYSAVED;
