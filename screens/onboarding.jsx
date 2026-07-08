import Ellipse2 from "./Ellipse2/Ellipse2.jsx";

// figma node: 1:2 (FRAME) "ONBOARDING - FRAMEO"
export default function ONBOARDINGFRAMEO() {
  return (
    <div data-name={"ONBOARDING - FRAMEO"} style={{
      position: "relative",
      width: 402,
      height: 874,
      overflow: "hidden",
      backgroundColor: "rgb(0,0,0)",
      boxShadow: "0px 4px 4px 0px rgba(0,0,0,0.25)",
    }}>
      <span data-name={"FRAMEO"} style={{
        position: "absolute",
        left: 77,
        top: 120,
        width: 248,
        height: 44,
        fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 35,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        letterSpacing: "0.280em",
        color: "rgb(255,255,255)",
      }}>FRAMEO</span>
      <div style={{
        position: "absolute",
        left: 0,
        top: 304,
        width: 410,
        height: 410,
        overflow: "hidden",
      }}>
        {[
          {  },
          {  },
          { ellipse2Image: "./assets/5596bc84483bed9d.png" },
        ].map((item, i) => (
          <Ellipse2 key={i} {...item} />
        ))} {/* 3× → /01-Wireframes/ONBOARDING---FRAMEO/Ellipse2/Ellipse2.jsx */}
      </div>
      <div data-name={"boton play"} style={{
        position: "absolute",
        left: 162,
        top: 427,
        width: 84,
        height: 84,
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 84,
          height: 84,
          overflow: "hidden",
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
        <svg width={52} height={52} viewBox="0 0 52 52" fill="rgb(217,217,217)" style={{
          position: "absolute",
          left: 0,
          top: 0,
          transform: "matrix(0,1,-1,0,68,18)",
          transformOrigin: "0 0",
          width: 52,
          height: 52,
          borderRadius: 2,
          backgroundColor: "rgb(217,217,217)",
        }}>
          <path d="M 24.268 3 C 25.038 1.667 26.962 1.667 27.732 3 L 46.785 36 C 47.554 37.333 46.592 39 45.053 39 L 6.947 39 C 5.408 39 4.446 37.333 5.215 36 L 24.268 3 Z" fillRule="nonzero" />
        </svg>
      </div>
      <div style={{
        position: "absolute",
        left: 116,
        top: 763,
        width: 184,
        height: 56,
        overflow: "hidden",
      }}>
        <span data-name={"Press play to begin"} style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 169,
          height: 56,
          boxShadow: "0px 0px 0px 4px rgba(255,255,255,0)",
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 17,
          whiteSpace: "nowrap",
          lineHeight: "30px",
          letterSpacing: "0.040em",
          color: "rgb(181,174,200)",
        }}>Press play to begin</span>
        <div data-name={"weui:arrow-outlined"} style={{
          position: "absolute",
          left: 172,
          top: 5,
          width: 12,
          height: 24,
        }}>
          <svg width={7.134} height={12.970} viewBox="0 0 7.134 12.970" fill="rgb(248,247,255)" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(-1,0,0,-1,9.586,18.490)",
            transformOrigin: "0 0",
            width: 7.134,
            height: 12.97,
            backgroundColor: "rgb(248,247,255)",
          }}>
            <path d="M 7.134 11.91 L 6.073 12.97 L 0.294 7.193 C 0.201 7.1 0.127 6.99 0.076 6.869 C 0.026 6.748 0 6.618 0 6.486 C 0 6.355 0.026 6.225 0.076 6.104 C 0.127 5.983 0.201 5.873 0.294 5.78 L 6.073 0 L 7.133 1.06 L 1.709 6.485 L 7.134 11.91 Z" fillRule="nonzero" />
          </svg>
        </div>
      </div>
    </div>
  );
}
