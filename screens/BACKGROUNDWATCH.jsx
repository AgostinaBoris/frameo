// figma node: 165:255 BACKGROUND WATCH (2 variants)
import { useLanguage } from '../src/i18n.jsx';
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "property1=" + __venc(p.property1);

const BackgroundWatchIcon = ({ style }) => (
  <svg width={38} height={38} viewBox="0 0 38 38" fill="none" style={style}>
    <rect x="4" y="7" width="30" height="21" rx="3" stroke="white" strokeWidth="1.6" />
    <path d="M16 14.5l8 3.5-8 3.5v-7z" fill="white" />
    <path d="M17 32h4M14 32.5h.01M24 32.5h.01" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

export function BACKGROUNDWATCH(_p = {}) {
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
        left: 0,
        top: 88,
        width: 168,
        height: 47,
        fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "normal",
        lineHeight: "20px",
        letterSpacing: "0.020em",
        color: "rgb(255,255,255)",
      }}>{props.text1 ?? t('context.background')}</span>
      <BackgroundWatchIcon style={{
        position: "absolute",
        left: 49,
        top: 38,
        width: 70,
        height: 50,
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
        left: 0,
        top: 90,
        width: 168,
        height: 47,
        fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "normal",
        lineHeight: "20px",
        letterSpacing: "0.020em",
        color: "rgb(255,255,255)",
      }}>{props.text1 ?? t('context.background')}</span>
      <BackgroundWatchIcon style={{
        position: "absolute",
        left: 49,
        top: 38,
        width: 70,
        height: 51,
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
export default BACKGROUNDWATCH;
