// figma node: 1:2 ONBOARDING - FRAMEO
import { useRef, useState } from 'react';
import { useLanguage } from '../src/i18n.jsx';

export function ONBOARDINGFRAMEO(_p = {}) {
  const props = _p;
  const { t } = useLanguage();
  const reelRef = useRef(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const [active, setActive] = useState(false);

  const updateTiltFromPoint = (clientX, clientY) => {
    const el = reelRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (clientX - rect.left) / rect.width;
    const py = (clientY - rect.top) / rect.height;
    setTilt({ rx: (0.5 - py) * 46, ry: (px - 0.5) * 46 });
  };

  const handlePointerMove = (e) => updateTiltFromPoint(e.clientX, e.clientY);
  const handlePointerEnter = () => setActive(true);
  const handlePointerLeave = () => {
    setActive(false);
    setTilt({ rx: 0, ry: 0 });
  };

  const handleTouchStart = (e) => {
    setActive(true);
    const touch = e.touches[0];
    if (touch) updateTiltFromPoint(touch.clientX, touch.clientY);
  };
  const handleTouchMove = (e) => {
    const touch = e.touches[0];
    if (touch) updateTiltFromPoint(touch.clientX, touch.clientY);
  };
  const handleTouchEnd = () => {
    setActive(false);
    setTilt({ rx: 0, ry: 0 });
  };

  return (
    <div className={props.className} style={{
      width: 402,
      height: 874,
      overflow: "hidden",
      backgroundColor: "rgb(0,0,0)",
      boxShadow: "0px 4px 4px 0px rgba(0,0,0,0.25)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 120,
        width: 402,
        height: 44,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 35,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        letterSpacing: "0.280em",
      }}>
        <span style={{ color: "rgb(255,255,255)" }}>FRAME</span>
        <span style={{ color: "rgb(192,132,252)" }}>O</span>
      </div>
      <div
        ref={reelRef}
        onPointerMove={handlePointerMove}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchEnd}
        style={{
          position: "absolute",
          left: 0,
          top: 264,
          width: 402,
          height: 410,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          perspective: "340px",
          touchAction: "none",
        }}>
        <div className="onboarding-reel-shadow" />
        <div style={{
          position: "relative",
          width: 236,
          height: 350,
          transform: `translateZ(${active ? 80 : 0}px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) scale(${active ? 1.12 : 1})`,
          transition: active ? "transform 90ms linear" : "transform 550ms cubic-bezier(0.22,1,0.36,1)",
          transformStyle: "preserve-3d",
        }}>
          <div className="onboarding-reel-glow" style={{
            opacity: active ? 1 : 0.75,
            transform: active ? "scale(1.25)" : "scale(1)",
          }} />
          <div className={`onboarding-reel-float${active ? ' is-active' : ''}`} style={{
            position: "absolute",
            inset: 0,
            transformOrigin: "64px 102px",
          }}>
            <div className={`fig-asset-strip-only onboarding-reel-roll${active ? ' is-active' : ''}`} style={{
              position: "absolute",
              inset: 0,
            }} />
          </div>
          <div className={`fig-asset-reel-only onboarding-reel-spin${active ? ' is-active' : ''}`} style={{
            position: "absolute",
            inset: 0,
          }} />
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 162,
        top: 387,
        width: 84,
        height: 84,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 84,
          height: 84,
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 84,
            height: 84,
            borderRadius: "50%",
            background: "linear-gradient(180deg, rgba(192,132,252,0.2) 0.00%, rgba(168,85,247,0.2) 50.00%, rgba(139,61,255,0.2) 100.00%)",
            boxShadow: "inset 0 0 0 1px rgba(192,132,252,0.6), 0px 10px 50px 25px rgba(139,61,255,0.5), inset 5px 15px 35px 0px rgba(255,255,255,0.18), 0px 20px 40px 45px rgba(192,132,252,0.25), 0px 10px 24px 0px rgba(139,61,255,0.35)",
          }} />
        </div>
        <svg width={52} height={52} viewBox="0 0 52 52" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 0,
          transform: "matrix(0,1,-1,0,68,18)",
          transformOrigin: "0 0",
          width: 52,
          height: 52,
          borderRadius: 2,
          color: "rgb(217,217,217)",
        }}>
          <path d={"M 24.268 3 C 25.038 1.667 26.962 1.667 27.732 3 L 46.785 36 C 47.554 37.333 46.592 39 45.053 39 L 6.947 39 C 5.408 39 4.446 37.333 5.215 36 L 24.268 3 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 748,
        width: 402,
        height: 56,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 15,
          whiteSpace: "nowrap",
          lineHeight: "30px",
          letterSpacing: "0.040em",
          color: "rgb(181,174,200)",
          filter: "drop-shadow(0px 0px 4px rgba(255,255,255,0))",
        }}>{t('onboarding.pressPlay')}</span>
        <div style={{
          position: "relative",
          width: 12,
          height: 24,
          flexShrink: 0,
        }}>
          <svg width={7.134} height={12.970} viewBox="0 0 7.134 12.970" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(-1,0,0,-1,9.586,18.490)",
            transformOrigin: "0 0",
            width: 7.134,
            height: 12.97,
            color: "rgb(248,247,255)",
          }}>
            <path d={"M 7.134 11.91 L 6.073 12.97 L 0.294 7.193 C 0.201 7.1 0.127 6.99 0.076 6.869 C 0.026 6.748 0 6.618 0 6.486 C 0 6.355 0.026 6.225 0.076 6.104 C 0.127 5.983 0.201 5.873 0.294 5.78 L 6.073 0 L 7.133 1.06 L 1.709 6.485 L 7.134 11.91 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
    </div>
  );
}
export default ONBOARDINGFRAMEO;
