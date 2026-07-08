import { ALL } from './ALL.jsx';
import { DETAILS } from './DETAILS.jsx';
import { MOVIES } from './MOVIES.jsx';
import { MiArrowUp } from './MiArrowUp.jsx';
import { RECENTLYSAVED } from './RECENTLYSAVED.jsx';
import { SERIES } from './SERIES.jsx';
import { TABBAR } from './TABBAR.jsx';
import { TOPNAV } from './TOPNAV.jsx';

// figma node: 326:335 WATCHLIST
export function WATCHLIST(_p = {}) {
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
        top: 78,
        width: 402,
        height: 698,
        overflowY: "auto",
        overflowX: "hidden",
        WebkitOverflowScrolling: "touch",
        backgroundColor: "rgb(7,3,15)",
      }}>
        <span style={{
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
        <div style={{
          position: "absolute",
          left: 23,
          top: 64,
          width: 183,
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
        <div style={{
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
          <div style={{
            position: "relative",
            height: 190,
            overflow: "hidden",
            borderRadius: 18,
            boxShadow: "inset 0 0 0 1px rgb(248,247,255)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "absolute",
              left: 1,
              top: 1,
              width: 262,
              height: 189,
              overflow: "hidden",
            }}>
              <div className="fig-asset-d9a58d848d1c6df9" style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 136,
                height: 189,
                borderRadius: "18px 0px 0px 18px",
              }} />
              <div style={{
                position: "absolute",
                left: 151,
                top: 9,
                width: 111,
                height: 40,
                overflow: "hidden",
              }}>
                <span style={{
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
              <span style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 76.836,
                height: 25,
                fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 12,
                whiteSpace: "nowrap",
                lineHeight: "25px",
                letterSpacing: "0.020em",
                color: "rgb(248,247,255)",
              }}>93% Match</span>
              <span style={{
                position: "absolute",
                left: 0.123,
                top: 28,
                width: 184.407,
                height: 44,
                fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 12,
                whiteSpace: "nowrap",
                lineHeight: "25px",
                letterSpacing: "0.020em",
                color: "rgb(248,247,255)",
              }}>Action Adventure•Sci-Fi• 2h </span>
              <span style={{
                position: "absolute",
                left: 0,
                top: 55,
                width: 150.791,
                height: 23,
                fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 12,
                whiteSpace: "nowrap",
                lineHeight: "25px",
                letterSpacing: "0.020em",
                color: "rgb(248,247,255)",
              }}>Available on Disney+</span>
            </div>
            <DETAILS
              style={{
                position: "absolute",
                left: 190,
                top: 147,
                width: 70,
                height: 28,
              }}
              property1={"default"}
            />
          </div>
          <div style={{
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
            <div style={{
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
                  <span style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: 76,
                    height: 20,
                    fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 700,
                    fontSize: 12,
                    whiteSpace: "nowrap",
                    lineHeight: "25px",
                    letterSpacing: "0.020em",
                    color: "rgb(248,247,255)",
                  }}>98% Match</span>
                  <span style={{
                    position: "absolute",
                    left: 0,
                    top: 23,
                    width: 199,
                    height: 24,
                    fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 700,
                    fontSize: 12,
                    whiteSpace: "nowrap",
                    lineHeight: "25px",
                    letterSpacing: "0.020em",
                    color: "rgb(248,247,255)",
                  }}>Action Adventure•Sci-Fi• 3h 1m</span>
                  <span style={{
                    position: "absolute",
                    left: 0,
                    top: 47,
                    width: 149.641,
                    height: 25.21,
                    fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 700,
                    fontSize: 12,
                    whiteSpace: "nowrap",
                    lineHeight: "25px",
                    letterSpacing: "0.020em",
                    color: "rgb(248,247,255)",
                  }}>Available on Disney+</span>
                </div>
                <span style={{
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
              <div className="fig-asset-1260199bc4366ee9" style={{
                position: "absolute",
                left: 0,
                top: 1,
                width: 131,
                height: 188,
                borderRadius: "18px 0px 0px 18px",
              }} />
              <DETAILS
                style={{
                  position: "absolute",
                  left: 191,
                  top: 148,
                  width: 70,
                  height: 28,
                }}
                property1={"default"}
              />
            </div>
          </div>
          <div style={{
            position: "relative",
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
            <div style={{
              position: "relative",
              width: 357,
              height: 190,
              borderRadius: 18,
              boxShadow: "inset 0 0 0 1px rgb(248,247,255)",
              flexShrink: 0,
            }}>
              <div className="fig-asset-45cc3d44daf46f8f" style={{
                position: "absolute",
                left: 1,
                top: 2,
                width: 131,
                height: 187,
                borderRadius: "18px 0px 0px 18px",
              }} />
              <div style={{
                position: "absolute",
                left: 156,
                top: 14,
                width: 174,
                height: 126.214,
                overflow: "hidden",
              }}>
                <span style={{
                  position: "absolute",
                  left: 0,
                  top: 33,
                  width: 77.028,
                  height: 27.407,
                  fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 700,
                  fontSize: 12,
                  whiteSpace: "nowrap",
                  lineHeight: "25px",
                  letterSpacing: "0.020em",
                  color: "rgb(248,247,255)",
                }}>93% Match</span>
                <span style={{
                  position: "absolute",
                  left: 0,
                  top: 54,
                  width: 174,
                  height: 56,
                  fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 700,
                  fontSize: 12,
                  whiteSpace: "nowrap",
                  lineHeight: "25px",
                  letterSpacing: "0.020em",
                  color: "rgb(248,247,255)",
                }}>Action Thriller•Adventure• 1h 42m</span>
                <span style={{
                  position: "absolute",
                  left: 0,
                  top: 101,
                  width: 134.799,
                  height: 25.214,
                  fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 700,
                  fontSize: 12,
                  whiteSpace: "nowrap",
                  lineHeight: "25px",
                  letterSpacing: "0.020em",
                  color: "rgb(248,247,255)",
                }}>Available on Netflix</span>
                <span style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 165.61,
                  height: 43.851,
                  fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 700,
                  fontSize: 15,
                  whiteSpace: "nowrap",
                  lineHeight: "40px",
                  letterSpacing: "0.100em",
                  color: "rgb(255,255,255)",
                }}>Skyscraper: LIVE</span>
              </div>
              <DETAILS
                style={{
                  position: "absolute",
                  left: 196,
                  top: 152,
                  width: 70,
                  height: 28,
                }}
                property1={"default"}
              />
            </div>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 24,
          top: 162,
          display: "flex",
          flexDirection: "row",
          gap: 14,
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
        }}>
          <ALL
            style={{
              position: "relative",
              width: 77,
              height: 40,
              flexShrink: 0,
            }}
            property1={"default"}
          />
          <MOVIES
            style={{
              position: "relative",
              width: 77,
              height: 40,
              flexShrink: 0,
            }}
            property1={"default"}
          />
          <SERIES
            style={{
              position: "relative",
              width: 77,
              height: 40,
              flexShrink: 0,
            }}
            property1={"default"}
          />
          <RECENTLYSAVED
            style={{
              position: "relative",
              width: 88,
              height: 40,
              flexShrink: 0,
            }}
            text1={"Saved\n"}
            property1={"default"}
          />
        </div>
      </div>
      <TOPNAV style={{
          position: "absolute",
          left: 3,
          top: -1,
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
export default WATCHLIST;
