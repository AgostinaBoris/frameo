// figma node: 416:569 ADVENTURE (2 variants)
import { useLanguage } from '../src/i18n.jsx';
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "property1=" + __venc(p.property1);

export function ADVENTURE(_p = {}) {
  const props = { ..._p, property1: _p.property1 ?? "default" };
  const { t } = useLanguage();
  const __body0 = () => (
    <div className={`selectable-card ${props.className ?? ''}`} style={{
      width: 64,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 36,
        borderRadius: 15,
        backgroundColor: "rgba(139,61,255,0.35)",
        boxShadow: "inset 0 0 0 1px rgba(168,85,247,0.7), 2px 2px 6px 0.500px rgba(168,85,247,0.45)",
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
      <span style={{
        position: "absolute",
        left: 2,
        top: 4,
        fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 11,
        whiteSpace: "nowrap",
        lineHeight: "25px",
        letterSpacing: "0.020em",
        color: "rgb(255,255,255)",
      }}>{props.text1 ?? t('genre.adventure')}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 64,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 36,
        borderRadius: 15,
        backgroundColor: "rgb(28,22,48)",
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
      <span style={{
        position: "absolute",
        left: 0,
        top: 4,
        fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 11,
        whiteSpace: "nowrap",
        lineHeight: "25px",
        letterSpacing: "0.020em",
        color: "rgb(255,255,255)",
      }}>{props.text1 ?? t('genre.adventure')}</span>
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
export default ADVENTURE;
