// figma node: 439:562 Ellipse 10 (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "property1=" + __venc(p.property1);

const iconCircleStyle = {
  position: "absolute",
  left: 0,
  top: 0,
  width: 56,
  height: 56,
  borderRadius: "50%",
  background: "radial-gradient(circle, rgba(139,61,255,0.32) 0%, rgba(7,3,15,0.95) 72%)",
  boxShadow: "0px 2px 3px 0px rgba(121,55,206,0.4), 0 0 8px 1px rgba(139,61,255,0.28)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const ClockIcon = () => (
  <svg width={22} height={22} viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="1.3" />
    <path d="M12 7v5l3.5 2" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export function Ellipse10(_p = {}) {
  const props = { ..._p, property1: _p.property1 ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 56,
      height: 56,
      position: "relative",
      ...props.style,
    }}>
      <div className="quick-match-pulse" style={{ ...iconCircleStyle, animationDelay: "0.4s" }}><ClockIcon /></div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 56,
      height: 56,
      position: "relative",
      ...props.style,
    }}>
      <div className="quick-match-pulse" style={{ ...iconCircleStyle, animationDelay: "0.4s" }}><ClockIcon /></div>
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
export default Ellipse10;
