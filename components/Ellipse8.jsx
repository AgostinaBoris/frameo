// figma node: 439:554 Ellipse 8 (2 variants)
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

const MoodIcon = () => (
  <svg width={22} height={22} viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="1.3" />
    <circle cx="9" cy="10" r="0.9" fill="white" />
    <circle cx="15" cy="10" r="0.9" fill="white" />
    <path d="M8 14c1 1.3 2.4 2 4 2s3-0.7 4-2" stroke="white" strokeWidth="1.3" strokeLinecap="round" />
  </svg>
);

export function Ellipse8(_p = {}) {
  const props = { ..._p, property1: _p.property1 ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 56,
      height: 56,
      position: "relative",
      ...props.style,
    }}>
      <div style={iconCircleStyle}><MoodIcon /></div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 56,
      height: 56,
      position: "relative",
      ...props.style,
    }}>
      <div style={iconCircleStyle}><MoodIcon /></div>
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
