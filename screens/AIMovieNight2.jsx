// figma node: 452:595 AI movie night (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "property1=" + __venc(p.property1);

export function AIMovieNight2(_p = {}) {
  const props = { ..._p, property1: _p.property1 ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      minWidth: 66,
      height: 30,
      borderRadius: 12,
      backgroundColor: "rgba(139,61,255,0.35)",
      boxShadow: "inset 0 0 0 1px rgba(168,85,247,0.7)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "0 10px",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 10,
        whiteSpace: "nowrap",
        lineHeight: "10px",
        color: "rgb(255,255,255)",
      }}>{props.text1 ?? "With friends"}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      minWidth: 66,
      height: 30,
      borderRadius: 12,
      backgroundColor: "rgb(217,217,217)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "0 10px",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 10,
        whiteSpace: "nowrap",
        lineHeight: "10px",
        color: "rgb(0,0,0)",
      }}>{props.text1 ?? "With friends"}</span>
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
export default AIMovieNight2;
