import Profile from "./Profile/Profile.jsx";
import Property1Default29 from "/05-Design-System-Buttons/components/Property1Default29/Property1Default29.jsx";
import Property1Default28 from "/05-Design-System-Buttons/components/Property1Default28/Property1Default28.jsx";
import Property1Default31 from "/05-Design-System-Buttons/components/Property1Default31/Property1Default31.jsx";
import Property1Default26 from "/05-Design-System-Buttons/components/Property1Default26/Property1Default26.jsx";
import Property1Default30 from "/05-Design-System-Buttons/components/Property1Default30/Property1Default30.jsx";
import Property1Default27 from "/05-Design-System-Buttons/components/Property1Default27/Property1Default27.jsx";
import Property1Default50 from "/05-Design-System-Buttons/components/Property1Default50/Property1Default50.jsx";
import Property1Default47 from "/05-Design-System-Buttons/components/Property1Default47/Property1Default47.jsx";
import Property1Default46 from "/05-Design-System-Buttons/components/Property1Default46/Property1Default46.jsx";
import Property1Default51 from "/05-Design-System-Buttons/components/Property1Default51/Property1Default51.jsx";
import Property1Default48 from "/05-Design-System-Buttons/components/Property1Default48/Property1Default48.jsx";
import Frame21 from "./Frame21/Frame21.jsx";
import TOPNAV from "/07-Design-System-Components/components/TOPNAV/TOPNAV.jsx";
import TABBAR from "/07-Design-System-Components/components/TABBAR/TABBAR.jsx";

// figma node: 411:451 (FRAME) "PROFILE"
export default function PROFILE() {
  return (
    <div data-name={"PROFILE"} style={{
      position: "relative",
      width: 402,
      height: 874,
      overflow: "hidden",
      backgroundColor: "rgb(7,3,15)",
    }}>
      <div data-name={"frame profile"} style={{
        position: "absolute",
        left: 0,
        top: -27,
        width: 402,
        height: 1232,
        overflow: "hidden",
        backgroundColor: "rgb(7,3,15)",
      }}>
        {[
          {  },
          { profileText: "Manage your movie preferences." },
          { profileText: "Streaming Platforms " },
          { profileText: "Favorite Genres" },
          { profileText: "Preferences" },
        ].map((item, i) => (
          <Profile key={i} {...item} />
        ))} {/* 5× → /01-Wireframes/PROFILE/Profile/Profile.jsx */}
        <div style={{
          position: "absolute",
          left: 6,
          top: 224,
          width: 372,
          height: 190,
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 372,
            height: 190,
            display: "flex",
            flexDirection: "column",
            gap: 10,
            padding: "20px 20px 20px 20px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
          }}>
            <div style={{
              position: "relative",
              width: 342,
              height: 150,
              display: "flex",
              flexDirection: "row",
              gap: 10,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <div style={{
                position: "relative",
                width: 342,
                height: 150,
                borderRadius: 22,
                backgroundColor: "rgb(217,217,217)",
                boxShadow: "inset 0 0 0 1px rgb(0,0,0)",
                flexShrink: 0,
              }} />
            </div>
          </div>
          <div data-fig-image={"c3d70d6602d14253df221e3f39e366951343369d"} style={{
            position: "absolute",
            left: 46,
            top: 36,
            width: 120,
            height: 116,
            borderRadius: "50%",
            background: "url(./assets/c3d70d6602d14253.png) center / cover no-repeat",
          }} />
          <span data-name={"Aldana"} style={{
            position: "absolute",
            left: 191,
            top: 61,
            width: 131,
            height: 40,
            fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 700,
            fontSize: 32,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "40px",
            letterSpacing: "0.100em",
            color: "rgb(255,255,255)",
          }}>Aldana</span>
          <span data-name={"Movie mood explorer"} style={{
            position: "absolute",
            left: 190,
            top: 109,
            width: 146,
            height: 30,
            fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "18px",
            letterSpacing: "0.100em",
            color: "rgb(255,255,255)",
          }}>Movie mood explorer</span>
        </div>
        <div style={{
          position: "absolute",
          left: 26,
          top: 441,
          width: 352,
          height: 149,
          overflow: "hidden",
          background: "linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2)), linear-gradient(rgb(7,3,15),rgb(7,3,15))",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 26,
            width: 1032,
            height: 100,
            display: "flex",
            flexDirection: "row",
            gap: 20,
            alignItems: "center",
            flexWrap: "nowrap",
          }}>
            <Property1Default29 data-name={"DISNEY+"} data-component={"DISNEY+"} style={{
                position: "relative",
                width: 150,
                height: 100,
                flexShrink: 0,
              }} /> {/* → /05-Design-System-Buttons/components/Property1Default29/Property1Default29.jsx */}
            <Property1Default28 data-name={"HULU"} data-component={"HULU"} style={{
                position: "relative",
                width: 150,
                height: 100,
                flexShrink: 0,
              }} /> {/* → /05-Design-System-Buttons/components/Property1Default28/Property1Default28.jsx */}
            <Property1Default31 data-name={"MAX2"} data-component={"MAX2"} style={{
                position: "relative",
                width: 150,
                height: 100,
                flexShrink: 0,
              }} /> {/* → /05-Design-System-Buttons/components/Property1Default31/Property1Default31.jsx */}
            <Property1Default26 data-name={"NETFLIX"} data-component={"NETFLIX"} style={{
                position: "relative",
                width: 150,
                height: 100,
                flexShrink: 0,
              }} /> {/* → /05-Design-System-Buttons/components/Property1Default26/Property1Default26.jsx */}
            <Property1Default30 data-name={"PRIME VIDEO"} data-component={"PRIME VIDEO"} style={{
                position: "relative",
                width: 150,
                height: 100,
                flexShrink: 0,
              }} /> {/* → /05-Design-System-Buttons/components/Property1Default30/Property1Default30.jsx */}
            <Property1Default27 data-name={"APPLE TV"} data-component={"APPLE TV"} style={{
                position: "relative",
                width: 150,
                height: 100,
                flexShrink: 0,
              }} /> {/* → /05-Design-System-Buttons/components/Property1Default27/Property1Default27.jsx */}
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 31,
          top: 643,
          width: 368,
          height: 37,
          backgroundColor: "rgb(161,33,33)",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 368,
            height: 37,
          }}>
            <Property1Default50 data-name={"MYSTERY"} data-component={"MYSTERY"} style={{
                position: "absolute",
                left: 0,
                top: 0.5,
                width: 64,
                height: 36,
              }} /> {/* → /05-Design-System-Buttons/components/Property1Default50/Property1Default50.jsx */}
            <Property1Default47 data-name={"COMEDY"} data-component={"COMEDY"} style={{
                position: "absolute",
                left: 76,
                top: 0.5,
                width: 64,
                height: 36,
              }} /> {/* → /05-Design-System-Buttons/components/Property1Default47/Property1Default47.jsx */}
            <Property1Default46 data-name={"ACTION"} data-component={"ACTION"} style={{
                position: "absolute",
                left: 152,
                top: 0.5,
                width: 64,
                height: 36,
              }} /> {/* → /05-Design-System-Buttons/components/Property1Default46/Property1Default46.jsx */}
            <Property1Default51 data-name={"ADVENTURE"} data-component={"ADVENTURE"} style={{
                position: "absolute",
                left: 228,
                top: 0.5,
                width: 64,
                height: 36,
              }} /> {/* → /05-Design-System-Buttons/components/Property1Default51/Property1Default51.jsx */}
            <Property1Default48 data-name={"DRAMA"} data-component={"DRAMA"} style={{
                position: "absolute",
                left: 304,
                top: 0.5,
                width: 64,
                height: 36,
              }} /> {/* → /05-Design-System-Buttons/components/Property1Default48/Property1Default48.jsx */}
          </div>
        </div>
        <div data-name={"PREFERENCES FRAME"} style={{
          position: "absolute",
          left: 41,
          top: 750,
          width: 320,
          height: 354,
          overflow: "hidden",
          borderRadius: 16,
        }}>
          {[
            {  },
            { settingsText: "Language" },
            { settingsText: "Notifications" },
            { settingsText: "Privacy" },
            { settingsText: "Log out\n" },
          ].map((item, i) => (
            <Frame21 key={i} {...item} />
          ))} {/* 5× → /01-Wireframes/PROFILE/Frame21/Frame21.jsx */}
        </div>
      </div>
      <TOPNAV data-name={"TOP NAV"} data-component={"TOP NAV"}
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 402,
          height: 106,
        }}
        /* vector: prototypeInteractions */
      /> {/* → /07-Design-System-Components/components/TOPNAV/TOPNAV.jsx */}
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
        /* iconoirBright: prototypeInteractions */
      /> {/* → /07-Design-System-Components/components/TABBAR/TABBAR.jsx */}
    </div>
  );
}
