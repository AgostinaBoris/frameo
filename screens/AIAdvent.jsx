// figma node: 452:599 AI advent (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "property1=" + __venc(p.property1);

export function AIAdvent(_p = {}) {
  const props = { ..._p, property1: _p.property1 ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 56,
      height: 22,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 66,
        height: 30,
        borderRadius: 12,
        boxShadow: "inset 0 0 0 1px rgb(0,0,0)",
      }} />
      <span style={{
        position: "absolute",
        left: 2,
        top: 10,
        width: 63,
        height: 9,
        fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 9.800000190734863,
        whiteSpace: "nowrap",
        lineHeight: "10px",
        color: "rgb(0,0,0)",
      }}>{props.text1 ?? "Adventurous"}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 56,
      height: 22,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 66,
        height: 30,
        borderRadius: 12,
        backgroundColor: "rgb(217,217,217)",
      }} />
      <span style={{
        position: "absolute",
        left: 2,
        top: 8,
        width: 63,
        height: 9,
        fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 9.800000190734863,
        whiteSpace: "nowrap",
        lineHeight: "10px",
        color: "rgb(0,0,0)",
      }}>{props.text1 ?? "Adventurous"}</span>
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
export default AIAdvent;
