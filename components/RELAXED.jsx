// figma node: 126:119 RELAXED (2 variants)
import { useLanguage } from '../src/i18n.jsx';
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "property1=" + __venc(p.property1);

export function RELAXED(_p = {}) {
  const props = { ..._p, property1: _p.property1 ?? "default" };
  const { t } = useLanguage();
  const __body0 = () => (
    <div className={`selectable-card ${props.className ?? ''}`} style={{
      width: 160,
      height: 56,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 160,
        height: 56,
        borderRadius: 12,
        boxShadow: "inset 0 0 0 1px rgb(0,0,0), 2px 2px 6px 0.500px rgba(168,85,247,0.89)",
      }} />
      <span style={{
        position: "absolute",
        left: 0,
        top: 15,
        width: 160,
        height: 23,
        fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 15,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "24px",
        letterSpacing: "0.020em",
        color: "rgb(255,255,255)",
      }}>{props.text1 ?? t('mood.relaxed')}</span>
    </div>
  );
  const __body1 = () => (
    <div className={`selectable-card ${props.className ?? ''}`} style={{
      width: 160,
      height: 56,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 160,
        height: 56,
        borderRadius: 12,
        backgroundColor: "rgb(217,217,217)",
      }} />
      <span style={{
        position: "absolute",
        left: 0,
        top: 15,
        width: 160,
        height: 23,
        fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 15,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "24px",
        letterSpacing: "0.020em",
        color: "rgb(255,255,255)",
      }}>{props.text1 ?? t('mood.relaxed')}</span>
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
export default RELAXED;
