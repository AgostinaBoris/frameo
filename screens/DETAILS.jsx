// figma node: 300:388 DETAILS (2 variants)
import { useLanguage } from '../src/i18n.jsx';
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "property1=" + __venc(p.property1);

export function DETAILS(_p = {}) {
  const props = { ..._p, property1: _p.property1 ?? "default" };
  const { t } = useLanguage();
  const __body0 = () => (
    <div className={`cta-button ${props.className ?? ''}`} style={{
      width: 124,
      height: 44,
      position: "relative",
      cursor: "pointer",
      ...props.style,
    }}
    onClick={props.onClick}
    >
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        borderRadius: 20,
        background: "linear-gradient(135deg, #c084fc 0%, #9333ea 55%, #6d28d9 100%)",
        boxShadow: props.strong
          ? "0 3px 10px -2px rgba(147,51,234,0.5), inset 0 1px 0 rgba(255,255,255,0.25)"
          : "0 2px 6px -2px rgba(147,51,234,0.35), inset 0 1px 0 rgba(255,255,255,0.2)",
      }} />
      <span style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 16,
        whiteSpace: "nowrap",
        letterSpacing: "0.020em",
        color: "rgb(255,255,255)",
      }}>{props.text1 ?? t('common.details')}</span>
    </div>
  );
  const __body1 = __body0;
  const __impls = {
    // figma: Property 1=Default
    "property1=default": __body0,
    // figma: Property 1=Variant2
    "property1=variant2": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default DETAILS;
