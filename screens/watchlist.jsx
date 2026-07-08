import MiArrowUp from "/01-Wireframes/components/MiArrowUp/MiArrowUp.jsx";
import Match93 from "./Match93/Match93.jsx";
import Property1Default40 from "/05-Design-System-Buttons/components/Property1Default40/Property1Default40.jsx";
import Match98 from "./Match98/Match98.jsx";
import Match932 from "./Match932/Match932.jsx";
import Property1Default33 from "/05-Design-System-Buttons/components/Property1Default33/Property1Default33.jsx";
import Property1Default34 from "/05-Design-System-Buttons/components/Property1Default34/Property1Default34.jsx";
import Property1Default35 from "/05-Design-System-Buttons/components/Property1Default35/Property1Default35.jsx";
import Property1Default41 from "/05-Design-System-Buttons/components/Property1Default41/Property1Default41.jsx";
import TOPNAV from "/07-Design-System-Components/components/TOPNAV/TOPNAV.jsx";
import TABBAR from "/07-Design-System-Components/components/TABBAR/TABBAR.jsx";

// figma node: 326:335 (FRAME) "WATCHLIST"
export default function WATCHLIST() {
  return (
    <div data-name={"WATCHLIST"} style={{
      position: "relative",
      width: 402,
      height: 874,
      overflow: "hidden",
      backgroundColor: "rgb(7,3,15)",
    }}>
      <div data-name={"WATCHLIST"} style={{
        position: "absolute",
        left: 0,
        top: 78,
        width: 402,
        height: 963,
        overflow: "hidden",
        backgroundColor: "rgb(7,3,15)",
      }}>
        <span data-name={"Your saved picks in one place."} style={{
          position: "absolute",
          left: 61,
          top: 112,
          width: 266,
          height: 25,
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "25px",
          letterSpacing: "0.100em",
          color: "rgb(138,131,156)",
        }}>Your saved picks in one place.</span>
        <div data-name={"ai match arrow"} style={{
          position: "absolute",
          left: 23,
          top: 64,
          width: 183,
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
          <span data-name={"Watchlist"} style={{
            position: "absolute",
            left: 38,
            top: 0,
            width: 145,
            height: 40,
            fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 700,
            fontSize: 22,
            whiteSpace: "nowrap",
            lineHeight: "40px",
            letterSpacing: "0.100em",
            color: "rgb(255,255,255)",
          }}>Watchlist</span>
        </div>
        <div data-name={"RESULTS LIST"} style={{
          position: "absolute",
          left: 19,
          top: 226,
          width: 357,
          height: 598,
          display: "flex",
          flexDirection: "column",
          gap: 14,
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
        }}>
          <div data-name={"FRAME IRON MAN"} style={{
            position: "relative",
            height: 190,
            overflow: "hidden",
            borderRadius: 18,
            boxShadow: "inset 0 0 0 1px rgb(248,247,255)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div data-name={"IRON MAN"} style={{
              position: "absolute",
              left: 1,
              top: 1,
              width: 262,
              height: 189,
              overflow: "hidden",
            }}>
              <div data-fig-image={"d9a58d848d1c6df9d394cfbff77b423fc6b225bf"} style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 136,
                height: 189,
                borderRadius: "18px 0px 0px 18px",
                background: "url(./assets/d9a58d848d1c6df9.jpg) center / cover no-repeat",
              }} />
              <div style={{
                position: "absolute",
                left: 151,
                top: 9,
                width: 111,
                height: 40,
                overflow: "hidden",
              }}>
                <span data-name={"Iron Man 2"} style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 111,
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
            </div>
            <div style={{
              position: "absolute",
              left: 152,
              top: 50,
              width: 184.53,
              height: 78,
              overflow: "hidden",
            }}>
              {[
                {  },
                { match93Text: "Action Adventure•Sci-Fi• 2h " },
                { match93Text: "Available on Disney+" },
              ].map((item, i) => (
                <Match93 key={i} {...item} />
              ))} {/* 3× → /01-Wireframes/WATCHLIST/Match93/Match93.jsx */}
            </div>
            <Property1Default40 data-name={"DETAILS"} data-component={"DETAILS"}
              style={{
                position: "absolute",
                left: 190,
                top: 147,
                width: 70,
                height: 28,
              }}
              /* details: prototypeInteractions */
              /* property1: stackPositioning,prototypeInteractions */
            /> {/* → /05-Design-System-Buttons/components/Property1Default40/Property1Default40.jsx */}
          </div>
          <div data-name={"AVENGERS"} style={{
            position: "relative",
            height: 190,
            overflow: "hidden",
            display: "flex",
            flexDirection: "row",
            gap: 12,
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div data-name={"AVENGERS"} style={{
              position: "relative",
              width: 357,
              overflow: "hidden",
              borderRadius: 18,
              boxShadow: "inset 0 0 0 1px rgb(181,174,200)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <div style={{
                position: "absolute",
                left: 147,
                top: 21,
                width: 199,
                height: 108.21,
                overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute",
                  left: 0,
                  top: 36,
                  width: 199,
                  height: 72.21,
                  overflow: "hidden",
                }}>
                  {[
                    {  },
                    { match98Text: "Action Adventure•Sci-Fi• 3h 1m" },
                    { match98Text: "Available on Disney+" },
                  ].map((item, i) => (
                    <Match98 key={i} {...item} />
                  ))} {/* 3× → /01-Wireframes/WATCHLIST/Match98/Match98.jsx */}
                </div>
                <span data-name={"Avengers: Endgame"} style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 172,
                  height: 36,
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
                top: 1,
                width: 131,
                height: 188,
                borderRadius: "18px 0px 0px 18px",
                background: "url(./assets/1260199bc4366ee9.png) center / cover no-repeat",
              }} />
              <Property1Default40 data-name={"DETAILS"} data-component={"DETAILS"}
                style={{
                  position: "absolute",
                  left: 191,
                  top: 148,
                  width: 70,
                  height: 28,
                }}
                /* details: prototypeInteractions */
                /* property1: prototypeInteractions */
              /> {/* → /05-Design-System-Buttons/components/Property1Default40/Property1Default40.jsx */}
            </div>
          </div>
          <div data-name={"FRAME SKYSCRAPER"} style={{
            position: "relative",
            height: 190,
            backgroundColor: "rgb(181,174,200)",
            display: "flex",
            flexDirection: "row",
            gap: 12,
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div data-name={"SKYSCRAPER"} style={{
              position: "relative",
              width: 357,
              height: 190,
              borderRadius: 18,
              boxShadow: "inset 0 0 0 1px rgb(248,247,255)",
              flexShrink: 0,
            }}>
              <div data-fig-image={"45cc3d44daf46f8f508cb162e89f2b3fd7c906ef"} style={{
                position: "absolute",
                left: 1,
                top: 2,
                width: 131,
                height: 187,
                borderRadius: "18px 0px 0px 18px",
                background: "url(./assets/45cc3d44daf46f8f.jpg) center / cover no-repeat",
              }} />
              <div style={{
                position: "absolute",
                left: 156,
                top: 14,
                width: 174,
                height: 126.214,
                overflow: "hidden",
              }}>
                {[
                  {  },
                  { match93Text: "Action Thriller•Adventure• 1h 42m" },
                  { match93Text: "Available on Netflix" },
                  { match93Text: "Skyscraper: LIVE" },
                ].map((item, i) => (
                  <Match932 key={i} {...item} />
                ))} {/* 4× → /01-Wireframes/WATCHLIST/Match932/Match932.jsx */}
              </div>
              <Property1Default40 data-name={"DETAILS"} data-component={"DETAILS"}
                style={{
                  position: "absolute",
                  left: 196,
                  top: 152,
                  width: 70,
                  height: 28,
                }}
                /* details: prototypeInteractions */
                /* property1: prototypeInteractions */
              /> {/* → /05-Design-System-Buttons/components/Property1Default40/Property1Default40.jsx */}
            </div>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 24,
          top: 162,
          width: 361,
          height: 40,
          display: "flex",
          flexDirection: "row",
          gap: 14,
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
        }}>
          <Property1Default33 data-name={"ALL"} data-component={"ALL"} style={{
              position: "relative",
              width: 77,
              height: 40,
              flexShrink: 0,
            }} /> {/* → /05-Design-System-Buttons/components/Property1Default33/Property1Default33.jsx */}
          <Property1Default34 data-name={"MOVIES"} data-component={"MOVIES"} style={{
              position: "relative",
              width: 77,
              height: 40,
              flexShrink: 0,
            }} /> {/* → /05-Design-System-Buttons/components/Property1Default34/Property1Default34.jsx */}
          <Property1Default35 data-name={"SERIES"} data-component={"SERIES"} style={{
              position: "relative",
              width: 77,
              height: 40,
              flexShrink: 0,
            }} /> {/* → /05-Design-System-Buttons/components/Property1Default35/Property1Default35.jsx */}
          <Property1Default41 data-name={"RECENTLY SAVED"} data-component={"RECENTLY SAVED"}
            style={{
              position: "relative",
              width: 88,
              height: 40,
              flexShrink: 0,
            }}
            savedText={"Saved\n"}
          /> {/* → /05-Design-System-Buttons/components/Property1Default41/Property1Default41.jsx */}
        </div>
      </div>
      <TOPNAV data-name={"TOP NAV"} data-component={"TOP NAV"}
        style={{
          position: "absolute",
          left: 3,
          top: -1,
          width: 402,
          height: 106,
        }}
        /* pROFILE: prototypeInteractions */
        /* vector: prototypeInteractions */
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
