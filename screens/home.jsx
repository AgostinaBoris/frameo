import LOGONAV from "/07-Design-System-Components/components/LOGONAV/LOGONAV.jsx";
import Property1Default4 from "/05-Design-System-Buttons/components/Property1Default4/Property1Default4.jsx";
import QuickMatch from "./QuickMatch/QuickMatch.jsx";
import Mood from "./Mood/Mood.jsx";
import Rectangle11 from "./Rectangle11/Rectangle11.jsx";
import Rectangle10 from "./Rectangle10/Rectangle10.jsx";
import Property1Default54 from "/05-Design-System-Buttons/components/Property1Default54/Property1Default54.jsx";
import Property1Default55 from "/05-Design-System-Buttons/components/Property1Default55/Property1Default55.jsx";
import Property1Default56 from "/05-Design-System-Buttons/components/Property1Default56/Property1Default56.jsx";
import Property1Default57 from "/05-Design-System-Buttons/components/Property1Default57/Property1Default57.jsx";
import TABBAR from "/07-Design-System-Components/components/TABBAR/TABBAR.jsx";
import TOPNAV from "/07-Design-System-Components/components/TOPNAV/TOPNAV.jsx";

// figma node: 99:95 (FRAME) "HOME - FRAMEO"
export default function HOMEFRAMEO() {
  return (
    <div data-name={"HOME - FRAMEO"} style={{
      position: "relative",
      width: 402,
      height: 874,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
    }}>
      <div data-name={"HOME"} style={{
        position: "absolute",
        left: 0,
        top: 42,
        width: 402,
        height: 1101,
        overflow: "hidden",
        backgroundColor: "rgb(255,255,255)",
      }}>
        <div data-fig-image={"d7ba9b5d264391c24263c51c0c566d52a7436308"} style={{
          position: "absolute",
          left: 29,
          top: 117,
          width: 342,
          height: 267,
          opacity: 0.22,
          background: "url(./assets/d7ba9b5d264391c2.png) center / cover no-repeat",
        }} />
        <LOGONAV data-name={"LOGO NAV"} data-component={"LOGO NAV"}
          style={{
            position: "absolute",
            left: 33,
            top: 59,
            width: 176,
            height: 30,
          }}
          fRAMEOVisible={false}
        /> {/* → /07-Design-System-Components/components/LOGONAV/LOGONAV.jsx */}
        <span data-name={"What should we watch tonight?"} style={{
          position: "absolute",
          left: 31,
          top: 143,
          width: 340,
          height: 141,
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 27,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "40px",
          letterSpacing: "0.050em",
          color: "rgb(255,255,255)",
        }}>What should we watch tonight?</span>
        <span data-name={"Get AI-powered recommendations based on your mood, time, and streaming platforms."} style={{
          position: "absolute",
          left: 27,
          top: 251,
          width: 343,
          height: 96,
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 18,
          whiteSpace: "nowrap",
          lineHeight: "24px",
          letterSpacing: "0.100em",
          color: "rgb(181,174,200)",
        }}>Get AI-powered recommendations based on your mood, time, and streaming platforms.</span>
        <Property1Default4 data-name={"Ask Frameo"} data-component={"Ask Frameo"}
          style={{
            position: "absolute",
            left: 61,
            top: 354,
            width: 280,
            height: 60,
          }}
          /* rectangle3: prototypeInteractions */
        /> {/* → /05-Design-System-Buttons/components/Property1Default4/Property1Default4.jsx */}
        {[
          {  },
          { quickMatchText: "Recommended for you" },
          { quickMatchText: "Trending now" },
        ].map((item, i) => (
          <QuickMatch key={i} {...item} />
        ))} {/* 3× → /01-Wireframes/HOME---FRAMEO/QuickMatch/QuickMatch.jsx */}
        <div style={{
          position: "absolute",
          left: 37,
          top: 561,
          width: 333,
          height: 24,
        }}>
          {[
            {  },
            { moodText: "Context" },
            { moodText: "Time" },
            { moodText: "Platforms" },
          ].map((item, i) => (
            <Mood key={i} {...item} />
          ))} {/* 4× → /01-Wireframes/HOME---FRAMEO/Mood/Mood.jsx */}
        </div>
        <span data-name={"See all"} style={{
          position: "absolute",
          left: 305,
          top: 792,
          width: 79,
          height: 24,
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 15,
          whiteSpace: "nowrap",
          lineHeight: "24px",
          letterSpacing: "0.100em",
          color: "rgb(168,85,247)",
          textDecoration: "underline",
        }}>See all</span>
        <span data-name={"See all"} style={{
          position: "absolute",
          left: 306,
          top: 604,
          width: 76,
          height: 24,
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 15,
          whiteSpace: "nowrap",
          lineHeight: "24px",
          letterSpacing: "0.100em",
          color: "rgb(168,85,247)",
          textDecoration: "underline",
        }}>See all</span>
        <div data-name={"Horizontal scrolling"} style={{
          position: "absolute",
          left: 27,
          top: 836,
          width: 400,
          height: 125,
          overflow: "hidden",
          backgroundColor: "rgb(42,36,56)",
        }}>
          {[
            {  },
            { rectangle11Image: "./assets/e625a1c455b8166b.jpg" },
            { rectangle11Image: "./assets/efcaca9d3bb699e8.jpg" },
            { rectangle11Image: "./assets/dad827e2556ef886.jpg" },
            { rectangle11Image: "./assets/d771b164fe5721e6.jpg" },
            { rectangle11Image: "./assets/9e8952d1ae35b842.png" },
            { rectangle11Image: "./assets/23f6e6cf786c3d41.jpg" },
            { rectangle11Image: "./assets/4b47891a73893a18.jpg" },
            { rectangle11Image: "./assets/4a78ae4c5c2a4b13.jpg" },
            { rectangle11Image: "./assets/2663e0e526ac3651.jpg" },
          ].map((item, i) => (
            <Rectangle11 key={i} {...item} />
          ))} {/* 10× → /01-Wireframes/HOME---FRAMEO/Rectangle11/Rectangle11.jsx */}
        </div>
        <div data-name={"Horizontal scrolling"} style={{
          position: "absolute",
          left: 24,
          top: 648,
          width: 800,
          height: 125,
          overflow: "hidden",
          backgroundColor: "rgb(255,255,255)",
        }}>
          {[
            {  },
            { rectangle10Image: "./assets/237203808fd8fd1f.jpg" },
            { rectangle10Image: "./assets/ff36a2c3a2c4b94f.jpg" },
            { rectangle10Image: "./assets/25943ea217d4f72e.jpg" },
            { rectangle10Image: "./assets/f2fe566f855ae3fe.jpg" },
            { rectangle10Image: "./assets/9c6a2c84f86cb417.jpg" },
            { rectangle10Image: "./assets/ae92377963041c32.jpg" },
            { rectangle10Image: "./assets/e03f4135636ca39c.jpg" },
            { rectangle10Image: "./assets/5ea01b727a89d512.jpg" },
            { rectangle10Image: "./assets/60b65f613ac2cc62.jpg" },
            { rectangle10Image: "./assets/541ef6b35ea6b1f0.jpg" },
            { rectangle10Image: "./assets/d2d7c0a777956e63.jpg" },
          ].map((item, i) => (
            <Rectangle10 key={i} {...item} />
          ))} {/* 12× → /01-Wireframes/HOME---FRAMEO/Rectangle10/Rectangle10.jsx */}
        </div>
        <div style={{
          position: "absolute",
          left: 14,
          top: 484,
          width: 370,
          height: 82,
          display: "flex",
          flexDirection: "row",
          gap: 6,
          alignItems: "center",
          flexWrap: "nowrap",
        }}>
          <Property1Default54 data-component={"Ellipse 8"}
            style={{
              position: "relative",
              width: 88,
              height: 82,
              flexShrink: 0,
            }}
            /* ellipse8: prototypeInteractions */
          /> {/* → /05-Design-System-Buttons/components/Property1Default54/Property1Default54.jsx */}
          <Property1Default55 data-component={"Ellipse 9"}
            style={{
              position: "relative",
              width: 88,
              height: 82,
              flexShrink: 0,
            }}
            /* property1: prototypeInteractions */
          /> {/* → /05-Design-System-Buttons/components/Property1Default55/Property1Default55.jsx */}
          <Property1Default56 data-component={"Ellipse 10"}
            style={{
              position: "relative",
              width: 88,
              height: 82,
              flexShrink: 0,
            }}
            /* property1: prototypeInteractions */
          /> {/* → /05-Design-System-Buttons/components/Property1Default56/Property1Default56.jsx */}
          <Property1Default57 data-component={"Ellipse 11"}
            style={{
              position: "relative",
              width: 88,
              height: 82,
              flexShrink: 0,
            }}
            /* property1: prototypeInteractions */
          /> {/* → /05-Design-System-Buttons/components/Property1Default57/Property1Default57.jsx */}
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
        /* aIMatch: prototypeInteractions */
        /* watchlist: prototypeInteractions */
        /* discover: prototypeInteractions */
      /> {/* → /07-Design-System-Components/components/TABBAR/TABBAR.jsx */}
      <TOPNAV data-name={"TOP NAV"} data-component={"TOP NAV"}
        style={{
          position: "absolute",
          left: 1,
          top: 0,
          width: 402,
          height: 106,
        }}
        /* vector: prototypeInteractions */
        /* tOPNAV: strokePaints,borderTopWeight,borderBottomWeight,borderLeftWeight,borderRightWeight,borderStrokeWeightsIndependent */
      /> {/* → /07-Design-System-Components/components/TOPNAV/TOPNAV.jsx */}
    </div>
  );
}
