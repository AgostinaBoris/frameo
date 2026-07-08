// figma node: 439:558 Ellipse 9 (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "property1=" + __venc(p.property1);

const iconCircleStyle = {
  position: "absolute",
  left: 0,
  top: 0,
  width: 64,
  height: 60,
  borderRadius: "50%",
  background: "radial-gradient(circle, rgba(139,61,255,0.32) 0%, rgba(7,3,15,0.95) 72%)",
  boxShadow: "0px 2px 3px 0px rgba(121,55,206,0.4), 0 0 8px 1px rgba(139,61,255,0.28)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const ContextIcon = () => (
  <svg width={22} height={22} viewBox="0 0 24 24" fill="none">
    <path d="M4 12v-1.5A2.5 2.5 0 0 1 6.5 8h11A2.5 2.5 0 0 1 20 10.5V12" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="3" y="12" width="18" height="5" rx="1.5" stroke="white" strokeWidth="1.3" />
    <path d="M4 17v2M20 17v2" stroke="white" strokeWidth="1.3" strokeLinecap="round" />
  </svg>
);

export function Ellipse9(_p = {}) {
  const props = { ..._p, property1: _p.property1 ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 64,
      height: 60,
      position: "relative",
      ...props.style,
    }}>
      <div style={iconCircleStyle}><ContextIcon /></div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 64,
      height: 60,
      position: "relative",
      ...props.style,
    }}>
      <div style={iconCircleStyle}><ContextIcon /></div>
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
export default Ellipse9;
