import { Password2 } from './Password2.jsx';

// figma node: 580:620 Password (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "property1=" + __venc(p.property1);

export function Password(_p = {}) {
  const props = { ..._p, property1: _p.property1 ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 350,
      height: 50,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 350,
          height: 50,
        }}>
        <Password2 style={{ transform: "scale(0.994, 0.962)", transformOrigin: "0 0" }} />
      </div>
      <input
        type="password"
        value={props.value}
        onChange={props.onChange}
        placeholder={props.text1 ?? "Password"}
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
      height: 50,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 350,
          height: 50,
        }}>
        <Password2 style={{ transform: "scale(0.994, 0.962)", transformOrigin: "0 0" }} />
      </div>
      <span style={{
        position: "absolute",
        left: 19.886,
        top: 13.462,
        width: 130.256,
        height: 23.077,
        fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 15,
        whiteSpace: "nowrap",
        lineHeight: "24px",
        letterSpacing: "0.280em",
        color: "rgb(248,247,255)",
      }}>{props.text1 ?? "*********"}</span>
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
export default Password;
