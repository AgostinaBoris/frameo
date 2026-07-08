// figma node: 439:554 Ellipse 8 (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "property1=" + __venc(p.property1);

export function Ellipse8(_p = {}) {
  const props = { ..._p, property1: _p.property1 ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 88,
      height: 82,
      position: "relative",
      ...props.style,
    }}>
      <div className="fig-asset-2b760c39d8a6fa80-c6431073" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 88,
        height: 82,
        borderRadius: "50%",
      }} />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 88,
      height: 82,
      position: "relative",
      ...props.style,
    }}>
      <div className="fig-asset-2b760c39d8a6fa80" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 88,
        height: 82,
        borderRadius: "50%",
        boxShadow: "0px 3px 5px 0px rgba(121,55,206,0.64)",
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
export default Ellipse8;
