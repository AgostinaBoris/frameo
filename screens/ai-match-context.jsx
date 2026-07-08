import Property1Default2 from "/05-Design-System-Buttons/components/Property1Default2/Property1Default2.jsx";
import Property1Default17 from "/05-Design-System-Buttons/components/Property1Default17/Property1Default17.jsx";
import Property1Default18 from "/05-Design-System-Buttons/components/Property1Default18/Property1Default18.jsx";
import Property1Default20 from "/05-Design-System-Buttons/components/Property1Default20/Property1Default20.jsx";
import Property1Default21 from "/05-Design-System-Buttons/components/Property1Default21/Property1Default21.jsx";
import Property1Default19 from "/05-Design-System-Buttons/components/Property1Default19/Property1Default19.jsx";
import SOLONIGHT from "./SOLONIGHT/SOLONIGHT.jsx";
import MiArrowUp from "/01-Wireframes/components/MiArrowUp/MiArrowUp.jsx";
import TABBAR from "/07-Design-System-Components/components/TABBAR/TABBAR.jsx";
import TOPNAV from "/07-Design-System-Components/components/TOPNAV/TOPNAV.jsx";

// figma node: 109:211 (FRAME) "AI MATCH CONTEXT"
export default function AIMATCHCONTEXT() {
  return (
    <div data-name={"AI MATCH CONTEXT"} style={{
      position: "relative",
      width: 402,
      height: 874,
      overflow: "hidden",
      backgroundColor: "rgb(7,3,15)",
    }}>
      <div data-name={"FRAME AI"} style={{
        position: "absolute",
        left: -3,
        top: 85,
        width: 402,
        height: 1124,
        overflow: "hidden",
        backgroundColor: "rgb(7,3,15)",
      }}>
        <div data-fig-image={"6e42081eae4ff783e5766fa3ab3ba912ab330c59"} style={{
          position: "absolute",
          left: 210,
          top: 119,
          width: 168,
          height: 169,
          borderRadius: "50%",
          background: "url(./assets/6e42081eae4ff783.png) center / cover no-repeat",
        }} />
        <span data-name={"Choose your context!"} style={{
          position: "absolute",
          left: 29,
          top: 176,
          width: 165,
          height: 122,
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 32,
          lineHeight: "40px",
          letterSpacing: "0.100em",
          color: "rgb(255,255,255)",
        }}>
          {"Choose \nyour context!"}
        </span>
        <div style={{
          position: "absolute",
          left: 29,
          top: 123,
          width: 155,
          height: 29,
          overflow: "hidden",
        }}>
          <div data-name={"AI STEP 2"} style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 155,
            height: 29,
            overflow: "hidden",
          }}>
            <div data-name={"AI MATCH GRUOP STEP 2"} style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 155,
              height: 29,
              overflow: "hidden",
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 25,
                width: 35,
                height: 4,
                backgroundColor: "rgb(168,85,247)",
              }} />
              <span data-name={"Step 2 of 4"} style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 106,
                height: 17,
                fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 13,
                whiteSpace: "nowrap",
                lineHeight: "18px",
                letterSpacing: "0.280em",
                color: "rgb(255,255,255)",
              }}>Step 2 of 4</span>
              <svg width={35} height={4} viewBox="0 0 35 4" fill="rgb(168,85,247)" style={{
                position: "absolute",
                left: 40,
                top: 25,
                width: 35,
                height: 4,
                backgroundColor: "rgb(168,85,247)",
              }}>
                <path d="M 0 0 L 35 0 L 35 4 L 15 4 L 0 4 L 0 0 Z" fillRule="nonzero" />
              </svg>
              <div style={{
                position: "absolute",
                left: 80,
                top: 25,
                width: 35,
                height: 4,
                backgroundColor: "rgb(217,217,217)",
              }} />
              <div style={{
                position: "absolute",
                left: 120,
                top: 25,
                width: 35,
                height: 4,
                backgroundColor: "rgb(217,217,217)",
              }} />
            </div>
          </div>
        </div>
        <Property1Default2 data-name={"Continue"} data-component={"Continue"}
          style={{
            position: "absolute",
            left: 61,
            top: 914,
            width: 280,
            height: 60,
          }}
          /* property1: prototypeInteractions */
        /> {/* → /05-Design-System-Buttons/components/Property1Default2/Property1Default2.jsx */}
        <div style={{
          position: "absolute",
          left: 18,
          top: 384,
          width: 372,
          height: 500.167,
          borderRadius: 20,
          display: "grid",
          gridTemplateRows: "1px 1px 1px",
          gridTemplateColumns: "1px 1px",
          gap: "18px 18px",
          padding: "14px 14px 14px 14px",
          boxSizing: "border-box",
        }}>
          {[
            {  },
            { sOLONIGHTSlot: Property1Default17 },
            { sOLONIGHTSlot: Property1Default18 },
            { sOLONIGHTSlot: Property1Default20 },
            { sOLONIGHTSlot: Property1Default21 },
            { sOLONIGHTSlot: Property1Default19 },
          ].map((item, i) => (
            <SOLONIGHT key={i} {...item} />
          ))} {/* 6× → /01-Wireframes/AI-MATCH-CONTEXT/SOLONIGHT/SOLONIGHT.jsx */}
        </div>
        <MiArrowUp data-name={"mi:arrow-up"} data-component={"mi:arrow-up"}
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 28,
            height: 28,
            transform: "matrix(0.000,-1,1,0.000,19,101)",
            transformOrigin: "0 0",
          }}
          vectorVisible={false}
        /> {/* → /01-Wireframes/components/MiArrowUp/MiArrowUp.jsx */}
        <div data-name={"ai match arrow"} style={{
          position: "absolute",
          left: 24,
          top: 73,
          width: 152,
          height: 40,
          overflow: "hidden",
        }}>
          <span data-name={"AI Match"} style={{
            position: "absolute",
            left: 38,
            top: 0,
            width: 114,
            height: 40,
            fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 700,
            fontSize: 22,
            whiteSpace: "nowrap",
            lineHeight: "40px",
            letterSpacing: "0.100em",
            color: "rgb(255,255,255)",
          }}>AI Match</span>
          <MiArrowUp data-name={"mi:arrow-up"} data-component={"mi:arrow-up"} style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 28,
              height: 28,
              transform: "matrix(0.000,-1,1,0.000,0,34)",
              transformOrigin: "0 0",
            }} /> {/* → /01-Wireframes/components/MiArrowUp/MiArrowUp.jsx */}
        </div>
        <span data-name={"Tell us how you’re watching so we can recommend the perfect movie."} style={{
          position: "absolute",
          left: 29,
          top: 308,
          width: 315,
          height: 51,
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "25px",
          letterSpacing: "0.100em",
          color: "rgb(255,255,255)",
        }}>Tell us how you’re watching so we can recommend the perfect movie.</span>
      </div>
      <TABBAR data-name={"TAB BAR"} data-component={"TAB BAR"}
        style={{
          position: "absolute",
          left: 0,
          top: 782,
          width: 402,
          height: 98,
        }}
        /* home: prototypeInteractions */
        /* aIMatch: prototypeInteractions */
        /* watchlist: prototypeInteractions */
        /* discover: prototypeInteractions */
      /> {/* → /07-Design-System-Components/components/TABBAR/TABBAR.jsx */}
      <TOPNAV data-name={"TOP NAV"} data-component={"TOP NAV"}
        style={{
          position: "absolute",
          left: 1,
          top: 1,
          width: 402,
          height: 106,
        }}
        /* pROFILE: prototypeInteractions */
        /* vector: prototypeInteractions */
      /> {/* → /07-Design-System-Components/components/TOPNAV/TOPNAV.jsx */}
    </div>
  );
}
