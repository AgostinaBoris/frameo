import MiArrowUp from "/01-Wireframes/components/MiArrowUp/MiArrowUp.jsx";
import Property1Default40 from "/05-Design-System-Buttons/components/Property1Default40/Property1Default40.jsx";
import Property1Default60 from "/05-Design-System-Buttons/components/Property1Default60/Property1Default60.jsx";
import Property1Default59 from "/05-Design-System-Buttons/components/Property1Default59/Property1Default59.jsx";
import TOPNAV from "/07-Design-System-Components/components/TOPNAV/TOPNAV.jsx";
import TABBAR from "/07-Design-System-Components/components/TABBAR/TABBAR.jsx";

// figma node: 278:307 (FRAME) "AI MATCH RESULTS"
export default function AIMATCHRESULTS() {
  return (
    <div data-name={"AI MATCH RESULTS"} style={{
      position: "relative",
      width: 402,
      height: 874,
      overflow: "hidden",
      backgroundColor: "rgb(7,3,15)",
    }}>
      <div data-name={"FRAME AI"} style={{
        position: "absolute",
        left: 0,
        top: 64,
        width: 402,
        height: 971,
        overflow: "hidden",
        backgroundColor: "rgb(7,3,15)",
      }}>
        <span data-name={"We found the best picks for your night."} style={{
          position: "absolute",
          left: 37,
          top: 110,
          width: 317,
          height: 25,
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "18px",
          letterSpacing: "0.100em",
          color: "rgb(255,255,255)",
        }}>We found the best picks for your night.</span>
        <div data-name={"ai match arrow"} style={{
          position: "absolute",
          left: 23,
          top: 49,
          width: 259,
          height: 40,
          overflow: "hidden",
        }}>
          <MiArrowUp data-name={"mi:arrow-up"} data-component={"mi:arrow-up"}
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 28,
              height: 28,
              transform: "matrix(0.000,-1,1,0.000,0,34)",
              transformOrigin: "0 0",
            }}
            /* miArrow: prototypeInteractions */
          /> {/* → /01-Wireframes/components/MiArrowUp/MiArrowUp.jsx */}
          <span data-name={"AI Match Results"} style={{
            position: "absolute",
            left: 38,
            top: 0,
            width: 221,
            height: 40,
            fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 700,
            fontSize: 22,
            whiteSpace: "nowrap",
            lineHeight: "40px",
            letterSpacing: "0.100em",
            color: "rgb(255,255,255)",
          }}>AI Match Results</span>
        </div>
        <div data-name={"RESULTS LIST"} style={{
          position: "absolute",
          left: 22,
          top: 156,
          width: 357,
          height: 666,
          display: "flex",
          flexDirection: "column",
          gap: 18,
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }}>
          <div data-name={"AVENGERS"} style={{
            position: "relative",
            height: 210,
            overflow: "hidden",
            borderRadius: 18,
            backgroundColor: "rgb(255,255,255)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "absolute",
              left: 167,
              top: 16,
              width: 170.208,
              height: 63.562,
              overflow: "hidden",
            }}>
              <span data-name={"98% Match"} style={{
                position: "absolute",
                left: 45,
                top: 37.332,
                width: 79.167,
                height: 26.23,
                fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 11,
                whiteSpace: "nowrap",
                lineHeight: "25px",
                letterSpacing: "0.100em",
                color: "rgb(138,131,156)",
              }}>98% Match</span>
              <span data-name={"Avengers: Endgame"} style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 170.208,
                height: 41.968,
                fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 15,
                whiteSpace: "nowrap",
                lineHeight: "40px",
                letterSpacing: "0.100em",
                color: "rgb(255,255,255)",
              }}>Avengers: Endgame</span>
            </div>
            <div data-fig-image={"1260199bc4366ee92955b43ff5972998bc1d0f63"} style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 145,
              height: 210,
              borderRadius: "20px 0px 0px 20px",
              background: "url(./assets/1260199bc4366ee9.png) 50.622% 50.000% / 157.671% 100.373% no-repeat",
            }} />
            <Property1Default40 data-name={"DETAILS"} data-component={"DETAILS"}
              style={{
                position: "absolute",
                left: 215,
                top: 141,
                width: 70,
                height: 28,
              }}
              /* details: prototypeInteractions */
            /> {/* → /05-Design-System-Buttons/components/Property1Default40/Property1Default40.jsx */}
            <div style={{
              position: "absolute",
              left: 185,
              top: 94,
              width: 131,
              height: 22,
              display: "flex",
              flexDirection: "row",
              gap: 18,
              alignItems: "center",
              flexWrap: "nowrap",
            }}>
              <Property1Default60 data-name={"AI advent"} data-component={"AI advent"} style={{
                  position: "relative",
                  width: 56,
                  flexShrink: 0,
                  alignSelf: "stretch",
                }} /> {/* → /05-Design-System-Buttons/components/Property1Default60/Property1Default60.jsx */}
              <Property1Default59 data-name={"AI movie night"} data-component={"AI movie night"} style={{
                  position: "relative",
                  width: 56,
                  flexShrink: 0,
                  alignSelf: "stretch",
                }} /> {/* → /05-Design-System-Buttons/components/Property1Default59/Property1Default59.jsx */}
            </div>
          </div>
          <div data-name={"SKYSCRAPER"} style={{
            position: "relative",
            height: 210,
            overflow: "hidden",
            borderRadius: 18,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div data-fig-image={"45cc3d44daf46f8f508cb162e89f2b3fd7c906ef"} style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 145,
              height: 210,
              borderRadius: "18px 0px 0px 18px",
              background: "url(./assets/45cc3d44daf46f8f.jpg) center / cover no-repeat",
            }} />
            <div style={{
              position: "absolute",
              left: 175,
              top: 16,
              width: 143,
              height: 62.407,
              overflow: "hidden",
            }}>
              <span data-name={"93% Match"} style={{
                position: "absolute",
                left: 32,
                top: 35,
                width: 82.864,
                height: 27.407,
                fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 11,
                whiteSpace: "nowrap",
                lineHeight: "25px",
                letterSpacing: "0.100em",
                color: "rgb(138,131,156)",
              }}>93% Match</span>
              <span data-name={"Skyscraper: LIVE"} style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 143,
                height: 44,
                fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 15,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "40px",
                letterSpacing: "0.100em",
                color: "rgb(255,255,255)",
              }}>Skyscraper: LIVE</span>
            </div>
            <Property1Default40 data-name={"DETAILS"} data-component={"DETAILS"}
              style={{
                position: "absolute",
                left: 211,
                top: 141,
                width: 70,
                height: 28,
              }}
              /* details: prototypeInteractions */
            /> {/* → /05-Design-System-Buttons/components/Property1Default40/Property1Default40.jsx */}
            <div style={{
              position: "absolute",
              left: 178,
              top: 94,
              width: 131,
              height: 22,
              display: "flex",
              flexDirection: "row",
              gap: 18,
              alignItems: "center",
              flexWrap: "nowrap",
            }}>
              <Property1Default60 data-name={"AI advent"} data-component={"AI advent"} style={{
                  position: "relative",
                  width: 56,
                  flexShrink: 0,
                  alignSelf: "stretch",
                }} /> {/* → /05-Design-System-Buttons/components/Property1Default60/Property1Default60.jsx */}
              <Property1Default59 data-name={"AI movie night"} data-component={"AI movie night"} style={{
                  position: "relative",
                  width: 56,
                  flexShrink: 0,
                  alignSelf: "stretch",
                }} /> {/* → /05-Design-System-Buttons/components/Property1Default59/Property1Default59.jsx */}
            </div>
          </div>
          <div data-name={"IRON MAN 2"} style={{
            position: "relative",
            height: 210,
            overflow: "hidden",
            borderRadius: 18,
            boxShadow: "inset 0 0 0 0.500px rgb(0,0,0), 0 0 0 0.500px rgb(0,0,0)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div data-name={"IRON MAN"} style={{
              position: "absolute",
              left: 205,
              top: 16,
              width: 89,
              height: 61,
              overflow: "hidden",
            }}>
              <span data-name={"93% Match"} style={{
                position: "absolute",
                left: 7,
                top: 36,
                width: 73,
                height: 25,
                fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 11,
                whiteSpace: "nowrap",
                lineHeight: "25px",
                letterSpacing: "0.100em",
                color: "rgb(138,131,156)",
              }}>93% Match</span>
              <span data-name={"Iron Man 2"} style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 89,
                height: 40,
                fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 15,
                whiteSpace: "nowrap",
                lineHeight: "40px",
                letterSpacing: "0.100em",
                color: "rgb(255,255,255)",
              }}>Iron Man 2</span>
            </div>
            <div data-fig-image={"d9a58d848d1c6df9d394cfbff77b423fc6b225bf"} style={{
              position: "absolute",
              left: 1,
              top: 1,
              width: 145,
              height: 210,
              borderRadius: "18px 0px 0px 18px",
              background: "url(./assets/d9a58d848d1c6df9.jpg) center / cover no-repeat",
            }} />
            <div style={{
              position: "absolute",
              left: 149,
              top: 147,
              width: 199,
              height: 31,
            }}>
              <div style={{
                position: "absolute",
                left: 31,
                top: -55,
                width: 136,
                height: 29,
                display: "flex",
                flexDirection: "row",
                gap: 18,
                alignItems: "center",
                flexWrap: "nowrap",
              }}>
                <Property1Default60 data-name={"AI advent"} data-component={"AI advent"} style={{
                    position: "relative",
                    width: 56,
                    height: 22,
                    flexShrink: 0,
                  }} /> {/* → /05-Design-System-Buttons/components/Property1Default60/Property1Default60.jsx */}
                <Property1Default59 data-name={"AI movie night"} data-component={"AI movie night"} style={{
                    position: "relative",
                    width: 56,
                    height: 22,
                    flexShrink: 0,
                  }} /> {/* → /05-Design-System-Buttons/components/Property1Default59/Property1Default59.jsx */}
              </div>
              <Property1Default40 data-name={"DETAILS"} data-component={"DETAILS"}
                style={{
                  position: "absolute",
                  left: 64,
                  top: -3,
                  width: 70,
                  height: 28,
                }}
                /* details: prototypeInteractions */
              /> {/* → /05-Design-System-Buttons/components/Property1Default40/Property1Default40.jsx */}
            </div>
          </div>
        </div>
      </div>
      <TOPNAV data-name={"TOP NAV"} data-component={"TOP NAV"}
        style={{
          position: "absolute",
          left: 1,
          top: -4,
          width: 402,
          height: 106,
        }}
        /* pROFILE: prototypeInteractions */
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
      /> {/* → /07-Design-System-Components/components/TABBAR/TABBAR.jsx */}
    </div>
  );
}
