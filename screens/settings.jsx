import Frame21 from "./Frame21/Frame21.jsx";
import Frame212 from "./Frame212/Frame212.jsx";
import Frame213 from "./Frame213/Frame213.jsx";
import TOPNAV from "/07-Design-System-Components/components/TOPNAV/TOPNAV.jsx";
import TABBAR from "/07-Design-System-Components/components/TABBAR/TABBAR.jsx";

// figma node: 416:794 (FRAME) "SETTINGS"
export default function SETTINGS() {
  return (
    <div data-name={"SETTINGS"} style={{
      position: "relative",
      width: 402,
      height: 874,
      overflow: "hidden",
      background: "linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2)), linear-gradient(rgb(7,3,15),rgb(7,3,15))",
    }}>
      <div data-name={"frame profile"} style={{
        position: "absolute",
        left: 0,
        top: 42,
        width: 402,
        height: 1194,
        overflow: "hidden",
        background: "linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2)), linear-gradient(rgb(7,3,15),rgb(7,3,15))",
      }}>
        <span data-name={"Settings"} style={{
          position: "absolute",
          left: 26,
          top: 83,
          width: 178,
          height: 40,
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 32,
          whiteSpace: "nowrap",
          lineHeight: "40px",
          letterSpacing: "0.100em",
          color: "rgb(181,174,200)",
        }}>Settings</span>
        <span data-name={"Manage your account preferences."} style={{
          position: "absolute",
          left: 26,
          top: 139,
          width: 287,
          height: 17,
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "18px",
          letterSpacing: "0.100em",
          color: "rgb(181,174,200)",
        }}>Manage your account preferences.</span>
        <div style={{
          position: "absolute",
          left: 16,
          top: 189,
          width: 371,
          height: 883,
          overflow: "hidden",
        }}>
          <span data-name={"Account"} style={{
            position: "absolute",
            left: 14,
            top: 0,
            width: 95,
            height: 17,
            fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 700,
            fontSize: 16,
            whiteSpace: "nowrap",
            lineHeight: "24px",
            letterSpacing: "0.100em",
            color: "rgb(181,174,200)",
          }}>Account</span>
          <div data-name={"Frame 25/Default"} style={{
            position: "absolute",
            left: 0,
            top: 26,
            width: 366,
            height: 210,
            display: "flex",
            flexDirection: "column",
            gap: 10,
            padding: "10px 10px 10px 10px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
          }}>
            <div data-name={"PREFERENCES FRAME"} style={{
              position: "relative",
              height: 190,
              overflow: "hidden",
              borderRadius: 16,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              {[
                {  },
                { accountInformationText: "Change Password" },
                { accountInformationText: "Email Preferences" },
              ].map((item, i) => (
                <Frame21 key={i} {...item} />
              ))} {/* 3× → /01-Wireframes/SETTINGS/Frame21/Frame21.jsx */}
            </div>
          </div>
          <div style={{
            position: "absolute",
            left: 4,
            top: 258,
            width: 366,
            height: 217,
          }}>
            <span data-name={"Preferences"} style={{
              position: "absolute",
              left: 10,
              top: 0,
              width: 358,
              height: 17,
              fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 700,
              fontSize: 16,
              whiteSpace: "nowrap",
              lineHeight: "24px",
              letterSpacing: "0.100em",
              color: "rgb(181,174,200)",
            }}>Preferences</span>
            <div style={{
              position: "absolute",
              left: 4,
              top: 22,
              width: 358,
              height: 195,
            }}>
              <div data-name={"Frame 25/Default"} style={{
                position: "absolute",
                left: -4,
                top: 0,
                width: 366,
                height: 195,
                display: "flex",
                flexDirection: "column",
                gap: 10,
                padding: "10px 10px 10px 10px",
                alignItems: "flex-start",
                flexWrap: "nowrap",
                boxSizing: "border-box",
              }}>
                <div data-name={"PREFERENCES FRAME"} style={{
                  position: "relative",
                  height: 224,
                  overflow: "hidden",
                  borderRadius: 16,
                  display: "flex",
                  flexDirection: "row",
                  padding: "17px 21px 17px 21px",
                  alignItems: "flex-start",
                  flexWrap: "wrap",
                  gap: "22px 0px",
                  boxSizing: "border-box",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  {[
                    {  },
                    { languageText: "Favorite Genres" },
                    { languageText: "Watch Preferences" },
                  ].map((item, i) => (
                    <Frame212 key={i} {...item} />
                  ))} {/* 3× → /01-Wireframes/SETTINGS/Frame212/Frame212.jsx */}
                </div>
              </div>
            </div>
          </div>
          <div data-name={"Frame 25/Default"} style={{
            position: "absolute",
            left: 5,
            top: 536,
            width: 366,
            height: 347,
            display: "flex",
            flexDirection: "column",
            gap: 10,
            padding: "10px 10px 10px 10px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
          }}>
            <span data-name={"App"} style={{
              position: "relative",
              flexShrink: 0,
              fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 700,
              fontSize: 16,
              whiteSpace: "nowrap",
              lineHeight: "24px",
              letterSpacing: "0.100em",
              color: "rgb(181,174,200)",
            }}>App</span>
            <div data-name={"PREFERENCES FRAME"} style={{
              position: "relative",
              height: 294,
              overflow: "hidden",
              borderRadius: 16,
              display: "flex",
              flexDirection: "row",
              padding: "17px 21px 17px 21px",
              alignItems: "flex-start",
              flexWrap: "wrap",
              gap: "22px 0px",
              boxSizing: "border-box",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              {[
                {  },
                { notificationsText: "Appearance" },
                { notificationsText: "Downloads" },
                { notificationsText: "Log out" },
              ].map((item, i) => (
                <Frame213 key={i} {...item} />
              ))} {/* 4× → /01-Wireframes/SETTINGS/Frame213/Frame213.jsx */}
            </div>
          </div>
        </div>
      </div>
      <TOPNAV data-name={"TOP NAV"} data-component={"TOP NAV"}
        style={{
          position: "absolute",
          left: 1,
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
