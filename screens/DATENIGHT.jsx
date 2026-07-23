// figma node: 165:231 DATE NIGHT (2 variants)
import { useLanguage } from '../src/i18n.jsx';
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "property1=" + __venc(p.property1);

export function DATENIGHT(_p = {}) {
  const props = { ..._p, property1: _p.property1 ?? "default" };
  const { t } = useLanguage();
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
        left: 42,
        top: 93,
        width: 85,
        height: 19,
        fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 15,
        whiteSpace: "nowrap",
        lineHeight: "24px",
        letterSpacing: "0.050em",
        color: "rgb(255,255,255)",
      }}>{props.text1 ?? t('context.date')}</span>
      <div className="fig-asset-9cb29cb4e9297e40-373f4e57" style={{
        position: "absolute",
        left: 56,
        top: 38,
        width: 57,
        height: 55,
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
        left: 19,
        top: 116,
        width: 130,
        height: 17,
        fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 10,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        letterSpacing: "0.050em",
        color: "rgb(255,255,255)",
      }}>{props.text1 ?? "Romantic and cozy pics."}</span>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 168,
        height: 152,
        borderRadius: 20,
        backgroundColor: "rgb(138,131,156)",
      }} />
      <span style={{
        position: "absolute",
        left: 42,
        top: 100,
        width: 85,
        height: 23,
        fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 15,
        whiteSpace: "nowrap",
        lineHeight: "24px",
        letterSpacing: "0.050em",
        color: "rgb(255,255,255)",
      }}>{props.text2 ?? t('context.date')}</span>
      <div className="fig-asset-9cb29cb4e9297e40-2ab9bc1a" style={{
        position: "absolute",
        left: 53,
        top: 38,
        width: 62,
        height: 57,
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
export default DATENIGHT;
