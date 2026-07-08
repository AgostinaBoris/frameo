import Property1Default2 from "/05-Design-System-Buttons/components/Property1Default2/Property1Default2.jsx";
import Property1Default13 from "/05-Design-System-Buttons/components/Property1Default13/Property1Default13.jsx";
import Property1Default14 from "/05-Design-System-Buttons/components/Property1Default14/Property1Default14.jsx";
import Property1Default12 from "/05-Design-System-Buttons/components/Property1Default12/Property1Default12.jsx";
import Property1Default8 from "/05-Design-System-Buttons/components/Property1Default8/Property1Default8.jsx";
import Property1Default11 from "/05-Design-System-Buttons/components/Property1Default11/Property1Default11.jsx";
import Property1Default10 from "/05-Design-System-Buttons/components/Property1Default10/Property1Default10.jsx";
import Property1Default15 from "/05-Design-System-Buttons/components/Property1Default15/Property1Default15.jsx";
import Property1Default9 from "/05-Design-System-Buttons/components/Property1Default9/Property1Default9.jsx";
import TABBAR from "/07-Design-System-Components/components/TABBAR/TABBAR.jsx";
import TOPNAV from "/07-Design-System-Components/components/TOPNAV/TOPNAV.jsx";

// figma node: 109:209 (FRAME) "AI MATCH "
export default function AIMATCH() {
  return (
    <div data-name={"AI MATCH "} style={{
      position: "relative",
      width: 402,
      height: 874,
      overflow: "hidden",
      backgroundColor: "rgb(7,3,15)",
    }}>
      <div data-name={"FRAME AI"} style={{
        position: "absolute",
        left: 0,
        top: 29,
        width: 402,
        height: 973,
        overflow: "hidden",
        backgroundColor: "rgb(255,255,255)",
      }}>
        <div data-fig-image={"64a0b831fcf42582d0d0de235d4d02e92a3770bd"} style={{
          position: "absolute",
          left: 204,
          top: 140,
          width: 172,
          height: 168,
          borderRadius: "50%",
          background: "url(./assets/64a0b831fcf42582.png) center / cover no-repeat",
        }} />
        <span data-name={"AI Match"} style={{
          position: "absolute",
          left: 30,
          top: 148,
          width: 170,
          height: 40,
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 32,
          whiteSpace: "nowrap",
          lineHeight: "40px",
          letterSpacing: "0.100em",
          color: "rgb(255,255,255)",
        }}>AI Match</span>
        <span data-name={"Step 1 of 4"} style={{
          position: "absolute",
          left: 30,
          top: 192,
          width: 106,
          height: 17,
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 15,
          whiteSpace: "nowrap",
          lineHeight: "40px",
          letterSpacing: "0.100em",
          color: "rgb(255,255,255)",
        }}>Step 1 of 4</span>
        <div style={{
          position: "absolute",
          left: 24,
          top: 224,
          width: 35,
          height: 4,
          backgroundColor: "rgb(217,217,217)",
        }} />
        <svg width={35} height={4} viewBox="0 0 35 4" fill="rgb(217,217,217)" style={{
          position: "absolute",
          left: 64,
          top: 224,
          width: 35,
          height: 4,
          backgroundColor: "rgb(217,217,217)",
        }}>
          <path d="M 0 0 L 35 0 L 35 4 L 15 4 L 0 4 L 0 0 Z" fillRule="nonzero" />
        </svg>
        <div style={{
          position: "absolute",
          left: 104,
          top: 224,
          width: 35,
          height: 4,
          backgroundColor: "rgb(217,217,217)",
        }} />
        <div style={{
          position: "absolute",
          left: 144,
          top: 224,
          width: 35,
          height: 4,
          backgroundColor: "rgb(217,217,217)",
        }} />
        <Property1Default2 data-name={"Continue"} data-component={"Continue"}
          style={{
            position: "absolute",
            left: 61,
            top: 773,
            width: 280,
            height: 60,
          }}
          /* property1: prototypeInteractions */
        /> {/* → /05-Design-System-Buttons/components/Property1Default2/Property1Default2.jsx */}
        <div data-name={"CARD BOTONES Y TEXTO"} style={{
          position: "absolute",
          left: 25,
          top: 287,
          width: 352,
          height: 453,
          borderRadius: 20,
          display: "flex",
          flexDirection: "column",
          gap: 24,
          padding: "20px 32px 20px 32px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div data-name={"TELL FRAMEO"} style={{
            position: "relative",
            width: 328,
            height: 99,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <span data-name={"Tell FRAMEO your mood"} style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 328,
              height: 48,
              fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 700,
              fontSize: 22,
              whiteSpace: "nowrap",
              lineHeight: "40px",
              letterSpacing: "0.100em",
              color: "rgb(255,255,255)",
            }}>Tell FRAMEO your mood</span>
            <span data-name={"Choose how you feel and FRAMEO will start building your match."} style={{
              position: "absolute",
              left: 3,
              top: 48,
              width: 288,
              height: 51,
              fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 700,
              fontSize: 14,
              whiteSpace: "nowrap",
              lineHeight: "25px",
              letterSpacing: "0.100em",
              color: "rgb(255,255,255)",
            }}>Choose how you feel and FRAMEO will start building your match. </span>
          </div>
          <div data-name={"BOTONES MOOD"} style={{
            position: "relative",
            width: 336,
            height: 290,
            display: "grid",
            gridTemplateRows: "1fr 1fr 1fr 1fr",
            gridTemplateColumns: "1fr 1fr",
            gap: "22px 16px",
            flexShrink: 0,
          }}>
            <Property1Default13 data-name={"RELAXED"} data-component={"RELAXED"} style={{
                position: "relative",
                width: 160,
                height: 56,
                gridRow: "1",
                gridColumn: "1",
              }} /> {/* → /05-Design-System-Buttons/components/Property1Default13/Property1Default13.jsx */}
            <Property1Default14 data-name={"ROMANTIC"} data-component={"ROMANTIC"} style={{
                position: "relative",
                width: 160,
                height: 56,
                gridRow: "1",
                gridColumn: "2",
              }} /> {/* → /05-Design-System-Buttons/components/Property1Default14/Property1Default14.jsx */}
            <Property1Default12 data-name={"CURIOUS"} data-component={"CURIOUS"} style={{
                position: "relative",
                width: 160,
                height: 56,
                gridRow: "2",
                gridColumn: "1",
              }} /> {/* → /05-Design-System-Buttons/components/Property1Default12/Property1Default12.jsx */}
            <Property1Default8 data-name={"FOCUSED"} data-component={"FOCUSED"} style={{
                position: "relative",
                width: 160,
                height: 56,
                gridRow: "2",
                gridColumn: "2",
              }} /> {/* → /05-Design-System-Buttons/components/Property1Default8/Property1Default8.jsx */}
            <Property1Default11 data-name={"SAD"} data-component={"SAD"} style={{
                position: "relative",
                width: 160,
                height: 56,
                gridRow: "3",
                gridColumn: "1",
              }} /> {/* → /05-Design-System-Buttons/components/Property1Default11/Property1Default11.jsx */}
            <Property1Default10 data-name={"EXCITED"} data-component={"EXCITED"} style={{
                position: "relative",
                width: 160,
                height: 56,
                gridRow: "3",
                gridColumn: "2",
              }} /> {/* → /05-Design-System-Buttons/components/Property1Default10/Property1Default10.jsx */}
            <Property1Default15 data-name={"ADVENTUROUS"} data-component={"ADVENTUROUS"}
              style={{
                position: "relative",
                width: 160,
                height: 56,
                gridRow: "4",
                gridColumn: "1",
              }}
              adventurousText={"Adventurous"}
            /> {/* → /05-Design-System-Buttons/components/Property1Default15/Property1Default15.jsx */}
            <Property1Default9 data-name={"STRESSED"} data-component={"STRESSED"} style={{
                position: "relative",
                width: 160,
                height: 56,
                gridRow: "4",
                gridColumn: "2",
              }} /> {/* → /05-Design-System-Buttons/components/Property1Default9/Property1Default9.jsx */}
          </div>
        </div>
      </div>
      <TABBAR data-name={"TAB BAR"} data-component={"TAB BAR"}
        style={{
          position: "absolute",
          left: 0,
          top: 779,
          width: 402,
          height: 98,
        }}
        /* home: prototypeInteractions */
        /* watchlist: prototypeInteractions */
        /* discover: prototypeInteractions */
      /> {/* → /07-Design-System-Components/components/TABBAR/TABBAR.jsx */}
      <TOPNAV data-name={"TOP NAV"} data-component={"TOP NAV"}
        style={{
          position: "absolute",
          left: 0,
          top: 2,
          width: 402,
          height: 106,
        }}
        /* vector: prototypeInteractions */
      /> {/* → /07-Design-System-Components/components/TOPNAV/TOPNAV.jsx */}
    </div>
  );
}
