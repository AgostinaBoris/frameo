// figma node: 580:616 Email (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "property1=" + __venc(p.property1);

export function Email(_p = {}) {
  const props = { ..._p, property1: _p.property1 ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 350,
      height: 48,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "3px 0px 3px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 350,
        height: 50,
        borderRadius: 12,
        backgroundColor: "rgb(217,217,217)",
        flexShrink: 0,
      }} />
      <input
        type={props.type ?? "email"}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.text1 ?? "Email"}
        style={{
          position: "absolute",
          left: 19.886,
          top: 0,
          width: 310,
          height: 50,
          border: "none",
          outline: "none",
          background: "transparent",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 16,
          color: "rgb(51,51,51)",
        }}
      />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 350,
      height: 48,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "3px 0px 3px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 350,
        height: 50,
        borderRadius: 12,
        background: "linear-gradient(180deg, rgba(59,18,107,0.65) 10.00%, rgb(13,11,26) 100.00%)",
        flexShrink: 0,
      }} />
      <span style={{
        position: "absolute",
        left: 19.886,
        top: 13,
        fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 15,
        whiteSpace: "nowrap",
        lineHeight: "24px",
        letterSpacing: "0.280em",
        color: "rgb(248,247,255)",
      }}>{props.text1 ?? "Aldana@email.com"}</span>
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
export default Email;
