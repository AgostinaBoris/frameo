// figma node: 165:243 MOVIE MARATHON (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "property1=" + __venc(p.property1);

const MovieMarathonIcon = ({ style }) => (
  <svg width={40} height={40} viewBox="0 0 40 40" fill="none" style={style}>
    <rect x="2" y="5" width="20" height="14" rx="2.5" stroke="white" strokeWidth="1.6" opacity="0.5" />
    <rect x="6" y="9" width="20" height="14" rx="2.5" stroke="white" strokeWidth="1.6" opacity="0.75" />
    <rect x="10" y="13" width="20" height="14" rx="2.5" stroke="white" strokeWidth="1.6" />
    <path d="M17 17l7 3-7 3v-6z" fill="white" />
  </svg>
);

export function MOVIEMARATHON(_p = {}) {
  const props = { ..._p, property1: _p.property1 ?? "default" };
  const __body0 = () => (
    <div className={`selectable-card ${props.className ?? ''}`} style={{
      width: 168,
      height: 152,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 168,
        height: 152,
        borderRadius: 20,
        boxShadow: "inset 0 0 0 1px rgb(0,0,0), 2px 2px 6px 0.500px rgba(168,85,247,0.89)",
      }} />
      <span style={{
        position: "absolute",
        left: 14,
        top: 83,
        width: 140,
        height: 47,
        fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "normal",
        lineHeight: "20px",
        letterSpacing: "0.020em",
        color: "rgb(255,255,255)",
      }}>{props.text1 ?? "Movie Marathon"}</span>
      <MovieMarathonIcon style={{
        position: "absolute",
        left: 56,
        top: 28,
        width: 56,
        height: 58,
      }} />
    </div>
  );
  const __body1 = () => (
    <div className={`selectable-card ${props.className ?? ''}`} style={{
      width: 168,
      height: 152,
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 31,
        top: 116,
        width: 105,
        height: 17,
        fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 10,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        letterSpacing: "0.050em",
        color: "rgb(255,255,255)",
      }}>{props.text1 ?? "Binge-worthy picks."}</span>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 168,
        height: 152,
        borderRadius: 20,
        backgroundColor: "rgb(217,217,217)",
      }} />
      <span style={{
        position: "absolute",
        left: 14,
        top: 78,
        width: 140,
        height: 47,
        fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "normal",
        lineHeight: "20px",
        letterSpacing: "0.020em",
        color: "rgb(255,255,255)",
      }}>{props.text2 ?? "Movie Marathon"}</span>
      <MovieMarathonIcon style={{
        position: "absolute",
        left: 59,
        top: 28,
        width: 50,
        height: 48,
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
export default MOVIEMARATHON;
