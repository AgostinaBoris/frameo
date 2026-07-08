import Property1Default42 from "/05-Design-System-Buttons/components/Property1Default42/Property1Default42.jsx";
import Property1Default45 from "/05-Design-System-Buttons/components/Property1Default45/Property1Default45.jsx";
import Property1Default43 from "/05-Design-System-Buttons/components/Property1Default43/Property1Default43.jsx";
import Property1Default44 from "/05-Design-System-Buttons/components/Property1Default44/Property1Default44.jsx";
import Property1Default53 from "/05-Design-System-Buttons/components/Property1Default53/Property1Default53.jsx";
import SEARCHBAR from "/07-Design-System-Components/components/SEARCHBAR/SEARCHBAR.jsx";
import TrendingNow from "./TrendingNow/TrendingNow.jsx";
import Frame11 from "./Frame11/Frame11.jsx";
import TOPNAV from "/07-Design-System-Components/components/TOPNAV/TOPNAV.jsx";
import TABBAR from "/07-Design-System-Components/components/TABBAR/TABBAR.jsx";

// figma node: 348:562 (FRAME) "DISCOVER"
export default function DISCOVER() {
  return (
    <div data-name={"DISCOVER"} style={{
      position: "relative",
      width: 402,
      height: 874,
      overflow: "hidden",
      backgroundColor: "rgb(7,3,15)",
    }}>
      <div data-name={"DISCOVER"} style={{
        position: "absolute",
        left: 0,
        top: 91,
        width: 402,
        height: 1026,
        overflow: "hidden",
        backgroundColor: "rgb(7,3,15)",
      }}>
        <span data-name={"Explore movies across your platforms."} style={{
          position: "absolute",
          left: 28,
          top: 99,
          width: 328,
          height: 25,
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "18px",
          letterSpacing: "0.100em",
          color: "rgb(138,131,156)",
        }}>Explore movies across your platforms.</span>
        <div data-name={"ai match arrow"} style={{
          position: "absolute",
          left: 28,
          top: 57,
          width: 110,
          height: 40,
          overflow: "hidden",
        }}>
          <span data-name={"Discover"} style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 110,
            height: 40,
            fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 700,
            fontSize: 22,
            whiteSpace: "nowrap",
            lineHeight: "40px",
            letterSpacing: "0.100em",
            color: "rgb(255,255,255)",
          }}>Discover</span>
        </div>
        <div style={{
          position: "absolute",
          left: 17,
          top: 200,
          width: 368,
          height: 36,
          display: "flex",
          flexDirection: "row",
          gap: 12,
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
        }}>
          <Property1Default42 data-name={"TRENDING"} data-component={"TRENDING"} style={{
              position: "relative",
              width: 64,
              height: 36,
              flexShrink: 0,
            }} /> {/* → /05-Design-System-Buttons/components/Property1Default42/Property1Default42.jsx */}
          <Property1Default45 data-name={"THRILLER"} data-component={"THRILLER"} style={{
              position: "relative",
              width: 64,
              height: 36,
              flexShrink: 0,
            }} /> {/* → /05-Design-System-Buttons/components/Property1Default45/Property1Default45.jsx */}
          <Property1Default43 data-name={"SCI-FI"} data-component={"SCI-FI"} style={{
              position: "relative",
              width: 64,
              height: 36,
              flexShrink: 0,
            }} /> {/* → /05-Design-System-Buttons/components/Property1Default43/Property1Default43.jsx */}
          <Property1Default44 data-name={"ROMANCE"} data-component={"ROMANCE"} style={{
              position: "relative",
              width: 64,
              height: 36,
              flexShrink: 0,
            }} /> {/* → /05-Design-System-Buttons/components/Property1Default44/Property1Default44.jsx */}
          <Property1Default53 data-name={"FOR YOU"} data-component={"FOR YOU"}
            style={{
              position: "relative",
              width: 64,
              height: 36,
              flexShrink: 0,
            }}
            forYouText={"For You"}
          /> {/* → /05-Design-System-Buttons/components/Property1Default53/Property1Default53.jsx */}
        </div>
        <SEARCHBAR data-name={"SEARCH BAR"} data-component={"SEARCH BAR"}
          style={{
            position: "absolute",
            left: 23,
            top: 135,
            width: 353,
            height: 42,
          }}
          /* searchMovies: fontSize */
        /> {/* → /07-Design-System-Components/components/SEARCHBAR/SEARCHBAR.jsx */}
        {[
          {  },
          { trendingNowText: "Because You Liked Sci-Fi" },
          { trendingNowText: "Because You Liked Romance" },
        ].map((item, i) => (
          <TrendingNow key={i} {...item} />
        ))} {/* 3× → /01-Wireframes/DISCOVER/TrendingNow/TrendingNow.jsx */}
        {[
          {  },
          { frame10_rectangle32Image: "./assets/7902f039ec999184.jpg", frame10_rectangle34Image: "./assets/5e70b4ac683e4b89.jpg", frame10_rectangle35Image: "./assets/0ff7da68992424f1.jpg", frame10_rectangle36Image: "./assets/35d7609ff5a735ab.jpg", frame10_rectangle37Image: "./assets/91fa26e9efd95ed3.jpg", frame10_rectangle38Image: "./assets/f5e1ed4d0e45b5e6.jpg", frame10_rectangle39Image: "./assets/dfab7020f46c7b1b.jpg", frame10_rectangle40Image: "./assets/ff5b3b64d4d23751.jpg", frame10_rectangle41Image: "./assets/114124f630c4fc60.jpg", frame10_rectangle42Image: "./assets/9568bc66df398674.jpg" },
          { frame10_rectangle32Image: "./assets/cc40e38969aedf98.jpg", frame10_rectangle34Image: "./assets/1c451fc3796d6d8c.jpg", frame10_rectangle35Image: "./assets/f23faa2d64dd5de9.jpg", frame10_rectangle36Image: "./assets/35d3178b0c21622a.jpg", frame10_rectangle37Image: "./assets/50e75c23ae5db6be.jpg", frame10_rectangle38Image: "./assets/bbdd440b7c809bdb.jpg", frame10_rectangle39Image: "./assets/ce08786a7bc1799e.jpg", frame10_rectangle40Image: "./assets/df55042a6c8885d5.jpg", frame10_rectangle41Image: "./assets/c35cde88b53bc3c9.jpg", frame10_rectangle42Image: "./assets/59dc4fd585115a02.jpg" },
        ].map((item, i) => (
          <Frame11 key={i} {...item} />
        ))} {/* 3× → /01-Wireframes/DISCOVER/Frame11/Frame11.jsx */}
      </div>
      <TOPNAV data-name={"TOP NAV"} data-component={"TOP NAV"}
        style={{
          position: "absolute",
          left: 2,
          top: -1,
          width: 399,
          height: 96,
        }}
        /* pROFILE: prototypeInteractions */
        /* vector: prototypeInteractions */
        /* tOPNAV: size */
      /> {/* → /07-Design-System-Components/components/TOPNAV/TOPNAV.jsx */}
      <TABBAR data-name={"TAB BAR"} data-component={"TAB BAR"}
        style={{
          position: "absolute",
          left: 0,
          top: 776,
          width: 402,
          height: 98,
        }}
        /* home: prototypeInteractions */
        /* aIMatch: prototypeInteractions */
        /* watchlist: prototypeInteractions */
        /* discover: prototypeInteractions */
        /* materialSymbols: prototypeInteractions */
      /> {/* → /07-Design-System-Components/components/TABBAR/TABBAR.jsx */}
    </div>
  );
}
