import { AIAdvent } from './AIAdvent.jsx';
import { AIMovieNight2 } from './AIMovieNight2.jsx';
import { DETAILS } from './DETAILS.jsx';
import { MiArrowUp } from './MiArrowUp.jsx';
import { TABBAR } from './TABBAR.jsx';
import { TOPNAV } from './TOPNAV.jsx';

// figma node: 278:307 AI MATCH RESULTS
export function AIMATCHRESULTS(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 402,
      height: 874,
      overflow: "hidden",
      backgroundColor: "rgb(7,3,15)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 64,
        width: 402,
        height: 712,
        overflowY: "auto",
        overflowX: "hidden",
        WebkitOverflowScrolling: "touch",
        backgroundColor: "rgb(7,3,15)",
      }}>
        <span style={{
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
        <div style={{
          position: "absolute",
          left: 23,
          top: 49,
          width: 259,
          height: 40,
          overflow: "hidden",
        }}>
          <MiArrowUp style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 28,
              height: 28,
              transform: "matrix(0.000,-1,1,0.000,0,34)",
              transformOrigin: "0 0",
            }} />
          <span style={{
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
        <div style={{
          position: "absolute",
          left: 22,
          top: 156,
          width: 357,
          display: "flex",
          flexDirection: "column",
          gap: 18,
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }}>
          <div style={{
            position: "relative",
            height: 210,
            overflow: "hidden",
            borderRadius: 18,
            backgroundColor: "rgb(42,36,56)",
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
              <span style={{
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
              <span style={{
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
            <div className="fig-asset-1260199bc4366ee9-23daf735" style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 145,
              height: 210,
              borderRadius: "20px 0px 0px 20px",
            }} />
            <DETAILS
              style={{
                position: "absolute",
                left: 215,
                top: 141,
                width: 70,
                height: 28,
              }}
              property1={"default"}
            />
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
              <AIAdvent
                style={{
                  position: "relative",
                  width: 56,
                  flexShrink: 0,
                  alignSelf: "stretch",
                  height: "auto",
                }}
                property1={"default"}
              />
              <AIMovieNight2
                style={{
                  position: "relative",
                  width: 56,
                  flexShrink: 0,
                  alignSelf: "stretch",
                  height: "auto",
                }}
                property1={"default"}
              />
            </div>
          </div>
          <div style={{
            position: "relative",
            height: 210,
            overflow: "hidden",
            borderRadius: 18,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div className="fig-asset-45cc3d44daf46f8f" style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 145,
              height: 210,
              borderRadius: "18px 0px 0px 18px",
            }} />
            <div style={{
              position: "absolute",
              left: 175,
              top: 16,
              width: 143,
              height: 62.407,
              overflow: "hidden",
            }}>
              <span style={{
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
              <span style={{
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
            <DETAILS
              style={{
                position: "absolute",
                left: 211,
                top: 141,
                width: 70,
                height: 28,
              }}
              property1={"default"}
            />
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
              <AIAdvent
                style={{
                  position: "relative",
                  width: 56,
                  flexShrink: 0,
                  alignSelf: "stretch",
                  height: "auto",
                }}
                property1={"default"}
              />
              <AIMovieNight2
                style={{
                  position: "relative",
                  width: 56,
                  flexShrink: 0,
                  alignSelf: "stretch",
                  height: "auto",
                }}
                property1={"default"}
              />
            </div>
          </div>
          <div style={{
            position: "relative",
            height: 210,
            overflow: "hidden",
            borderRadius: 18,
            boxShadow: "inset 0 0 0 0.500px rgb(0,0,0), 0 0 0 0.500px rgb(0,0,0)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "absolute",
              left: 205,
              top: 16,
              width: 89,
              height: 61,
              overflow: "hidden",
            }}>
              <span style={{
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
              <span style={{
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
            <div className="fig-asset-d9a58d848d1c6df9" style={{
              position: "absolute",
              left: 1,
              top: 1,
              width: 145,
              height: 210,
              borderRadius: "18px 0px 0px 18px",
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
                <AIAdvent
                  style={{
                    position: "relative",
                    width: 56,
                    height: 22,
                    flexShrink: 0,
                  }}
                  property1={"default"}
                />
                <AIMovieNight2
                  style={{
                    position: "relative",
                    width: 56,
                    height: 22,
                    flexShrink: 0,
                  }}
                  property1={"default"}
                />
              </div>
              <DETAILS
                style={{
                  position: "absolute",
                  left: 64,
                  top: -3,
                  width: 70,
                  height: 28,
                }}
                property1={"default"}
              />
            </div>
          </div>
        </div>
      </div>
      <TOPNAV style={{
          position: "absolute",
          left: 1,
          top: -4,
          width: 402,
          height: 106,
        }}
        onProfileClick={props.onProfile}
      />
      <TABBAR style={{
          position: "absolute",
          left: 0,
          top: 776,
          width: 402,
          height: 98,
        }}
        onHome={props.onHome}
        onDiscover={props.onDiscover}
        onMatch={props.onMatch}
        onWatchlist={props.onWatchlist}
      />
    </div>
  );
}
export default AIMATCHRESULTS;
