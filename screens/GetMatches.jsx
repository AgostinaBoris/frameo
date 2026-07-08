// figma node: 188:265 Get Matches (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "property1=" + __venc(p.property1);

export function GetMatches(_p = {}) {
  const props = { ..._p, property1: _p.property1 ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 280,
      height: 60,
      position: "relative",
      color: "rgb(255,255,255)",
      cursor: "pointer",
      ...props.style,
    }}
    onClick={props.onClick}
    >
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 280,
        height: 60,
        borderRadius: 15,
        backgroundColor: "rgb(139,61,255)",
        boxShadow: "inset 0 0 0 1px rgba(168,85,247,0.89)",
      }} />
      <span style={{
        position: "absolute",
        left: 58,
        top: 18,
        width: 149,
        height: 24,
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 26,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "44px",
        color: "rgb(241,245,249)",
      }}>{props.text1 ?? "Get matches"}</span>
      <svg width={22.468} height={12.499} viewBox="0 0 22.468 12.499" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: "matrix(0.005,1,-1,0.005,252.962,22)",
        transformOrigin: "0 0",
        width: 22.468,
        height: 12.499,
      }}>
        <path d={"M 21.219 12.499 C 21.055 12.5 20.892 12.468 20.74 12.405 C 20.588 12.342 20.451 12.249 20.335 12.132 L 11.219 3.016 L 2.102 12.132 C 1.865 12.353 1.552 12.473 1.228 12.468 C 0.904 12.462 0.595 12.331 0.366 12.102 C 0.137 11.873 0.006 11.564 0 11.24 C -0.006 10.916 0.115 10.603 0.335 10.366 L 10.335 0.366 C 10.57 0.131 10.888 0 11.219 0 C 11.55 0 11.868 0.131 12.102 0.366 L 22.102 10.366 C 22.336 10.6 22.468 10.918 22.468 11.249 C 22.468 11.58 22.336 11.898 22.102 12.132 C 21.987 12.249 21.849 12.342 21.697 12.405 C 21.546 12.468 21.383 12.5 21.219 12.499 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <svg width={2.500} height={25.833} viewBox="0 0 2.500 25.833" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: "matrix(0.005,1,-1,0.005,252.833,32.181)",
        transformOrigin: "0 0",
        width: 2.5,
        height: 25.833,
      }}>
        <path d={"M 1.25 25.833 C 0.92 25.829 0.604 25.696 0.371 25.462 C 0.137 25.229 0.004 24.914 0 24.583 L 0 1.25 C 0 0.918 0.132 0.601 0.366 0.366 C 0.601 0.132 0.918 0 1.25 0 C 1.582 0 1.899 0.132 2.134 0.366 C 2.368 0.601 2.5 0.918 2.5 1.25 L 2.5 24.583 C 2.496 24.914 2.363 25.229 2.129 25.462 C 1.896 25.696 1.58 25.829 1.25 25.833 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 280,
      height: 60,
      position: "relative",
      color: "rgb(255,255,255)",
      cursor: "pointer",
      ...props.style,
    }}
    onClick={props.onClick}
    >
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 280,
        height: 60,
        borderRadius: 15,
        backgroundColor: "rgb(56,30,114)",
      }} />
      <span style={{
        position: "absolute",
        left: 57,
        top: 18,
        width: 149,
        height: 24,
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 26,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "44px",
        color: "rgb(241,245,249)",
      }}>{props.text1 ?? "Get matches"}</span>
      <svg width={2.500} height={25.833} viewBox="0 0 2.500 25.833" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: "matrix(0.005,1,-1,0.005,251.833,32)",
        transformOrigin: "0 0",
        width: 2.5,
        height: 25.833,
      }}>
        <path d={"M 1.25 25.833 C 0.92 25.829 0.604 25.696 0.371 25.462 C 0.137 25.229 0.004 24.914 0 24.583 L 0 1.25 C 0 0.918 0.132 0.601 0.366 0.366 C 0.601 0.132 0.918 0 1.25 0 C 1.582 0 1.899 0.132 2.134 0.366 C 2.368 0.601 2.5 0.918 2.5 1.25 L 2.5 24.583 C 2.496 24.914 2.363 25.229 2.129 25.462 C 1.896 25.696 1.58 25.829 1.25 25.833 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <svg width={22.468} height={12.499} viewBox="0 0 22.468 12.499" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: "matrix(0.005,1,-1,0.005,253.499,22)",
        transformOrigin: "0 0",
        width: 22.468,
        height: 12.499,
      }}>
        <path d={"M 21.219 12.499 C 21.055 12.5 20.892 12.468 20.74 12.405 C 20.588 12.342 20.451 12.249 20.335 12.132 L 11.219 3.016 L 2.102 12.132 C 1.865 12.353 1.552 12.473 1.228 12.468 C 0.904 12.462 0.595 12.331 0.366 12.102 C 0.137 11.873 0.006 11.564 0 11.24 C -0.006 10.916 0.115 10.603 0.335 10.366 L 10.335 0.366 C 10.57 0.131 10.888 0 11.219 0 C 11.55 0 11.868 0.131 12.102 0.366 L 22.102 10.366 C 22.336 10.6 22.468 10.918 22.468 11.249 C 22.468 11.58 22.336 11.898 22.102 12.132 C 21.987 12.249 21.849 12.342 21.697 12.405 C 21.546 12.468 21.383 12.5 21.219 12.499 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
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
export default GetMatches;
