import { useState } from 'react';
import { ALL } from './ALL.jsx';
import { DETAILS } from './DETAILS.jsx';
import { MOVIES } from './MOVIES.jsx';
import { MiArrowUp } from './MiArrowUp.jsx';
import { RECENTLYSAVED } from './RECENTLYSAVED.jsx';
import { SERIES } from './SERIES.jsx';
import { TABBAR } from './TABBAR.jsx';
import { TOPNAV } from './TOPNAV.jsx';
import { MOVIES as MOVIE_DATA } from './movieData.js';

// figma node: 326:335 WATCHLIST
export function WATCHLIST(_p = {}) {
  const props = _p;
  const [activeFilter, setActiveFilter] = useState('all');
  const filterStyle = (key) => ({ opacity: activeFilter === key ? 1 : 0.8 });
  const CARD_SCALE = 1.08;
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
        height: 680,
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
          fontSize: 15,
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
          left: 0,
          top: 226,
          width: 402,
          height: 752,
          display: "flex",
          flexDirection: "column",
          gap: 14,
          justifyContent: "flex-start",
          alignItems: "center",
          flexWrap: "nowrap",
          padding: "0 10px",
          boxSizing: "border-box",
        }}>
          <div style={{ width: 357 * CARD_SCALE, height: 216 * CARD_SCALE, flexShrink: 0 }}>
          <div style={{ width: 357, height: 216, transform: `scale(${CARD_SCALE})`, transformOrigin: "top left" }}>
          <div className="selectable-card" style={{
            position: "relative",
            height: 216,
            overflow: "hidden",
            borderRadius: 18,
            boxShadow: "inset 0 0 0 1.5px rgba(168,85,247,0.7)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "absolute",
              left: 1,
              top: 1,
              width: 262,
              height: 215,
              overflow: "hidden",
            }}>
              <div className="fig-asset-d9a58d848d1c6df9" style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 136,
                height: 215,
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
                  fontSize: 16,
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
              width: 200,
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
                fontSize: 13,
                whiteSpace: "nowrap",
                lineHeight: "25px",
                letterSpacing: "0.020em",
                color: "rgb(248,247,255)",
              }}>93% Match</span>
              <span style={{
                position: "absolute",
                left: 0.123,
                top: 28,
                width: 200,
                height: 25,
                overflow: "hidden",
                textOverflow: "ellipsis",
                fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 13,
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
                fontSize: 13,
                whiteSpace: "nowrap",
                lineHeight: "25px",
                letterSpacing: "0.020em",
                color: "rgb(248,247,255)",
              }}>Available on Disney+</span>
            </div>
            <DETAILS
              style={{
                position: "absolute",
                left: 184,
                top: 169,
                width: 86,
                height: 36,
              }}
              strong
              property1={"default"}
              onClick={() => props.onDetails?.(MOVIE_DATA.ironman2)}
            />
          </div>
          </div>
          </div>
          <div style={{ width: 357 * CARD_SCALE, height: 216 * CARD_SCALE, flexShrink: 0 }}>
          <div style={{ width: 357, height: 216, transform: `scale(${CARD_SCALE})`, transformOrigin: "top left" }}>
          <div style={{
            position: "relative",
            height: 216,
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
            <div className="selectable-card" style={{
              position: "relative",
              width: 357,
              overflow: "hidden",
              borderRadius: 18,
              boxShadow: "inset 0 0 0 1.5px rgba(168,85,247,0.7)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <div style={{
                position: "absolute",
                left: 147,
                top: 21,
                width: 210,
                height: 134,
                overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute",
                  left: 0,
                  top: 36,
                  width: 210,
                  height: 98.21,
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
                    fontSize: 13,
                    whiteSpace: "nowrap",
                    lineHeight: "25px",
                    letterSpacing: "0.020em",
                    color: "rgb(248,247,255)",
                  }}>98% Match</span>
                  <span style={{
                    position: "absolute",
                    left: 0,
                    top: 23,
                    width: 210,
                    height: 50,
                    fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 700,
                    fontSize: 13,
                    whiteSpace: "normal",
                    lineHeight: "25px",
                    letterSpacing: "0.020em",
                    color: "rgb(248,247,255)",
                  }}>Action Adventure•Sci-Fi• 3h 1m</span>
                  <span style={{
                    position: "absolute",
                    left: 0,
                    top: 73,
                    width: 149.641,
                    height: 25.21,
                    fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 700,
                    fontSize: 13,
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
                  fontSize: 16,
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
                height: 214,
                borderRadius: "18px 0px 0px 18px",
              }} />
              <DETAILS
                style={{
                  position: "absolute",
                  left: 185,
                  top: 170,
                  width: 86,
                  height: 36,
                }}
                strong
                property1={"default"}
                onClick={() => props.onDetails?.(MOVIE_DATA.endgame)}
              />
            </div>
          </div>
          </div>
          </div>
          <div style={{ width: 357 * CARD_SCALE, height: 216 * CARD_SCALE, flexShrink: 0 }}>
          <div style={{ width: 357, height: 216, transform: `scale(${CARD_SCALE})`, transformOrigin: "top left" }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 12,
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div className="selectable-card" style={{
              position: "relative",
              width: 357,
              height: 216,
              borderRadius: 18,
              boxShadow: "inset 0 0 0 1.5px rgba(168,85,247,0.7)",
              flexShrink: 0,
            }}>
              <div className="fig-asset-45cc3d44daf46f8f" style={{
                position: "absolute",
                left: 1,
                top: 2,
                width: 131,
                height: 213,
                borderRadius: "18px 0px 0px 18px",
              }} />
              <div style={{
                position: "absolute",
                left: 156,
                top: 14,
                width: 197,
                height: 152,
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
                  fontSize: 13,
                  whiteSpace: "nowrap",
                  lineHeight: "25px",
                  letterSpacing: "0.020em",
                  color: "rgb(248,247,255)",
                }}>93% Match</span>
                <span style={{
                  position: "absolute",
                  left: 0,
                  top: 54,
                  width: 197,
                  height: 50,
                  fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 700,
                  fontSize: 13,
                  whiteSpace: "normal",
                  lineHeight: "25px",
                  letterSpacing: "0.020em",
                  color: "rgb(248,247,255)",
                }}>Action Thriller•Adventure• 1h 42m</span>
                <span style={{
                  position: "absolute",
                  left: 0,
                  top: 127,
                  width: 134.799,
                  height: 25.214,
                  fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 700,
                  fontSize: 13,
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
                  fontSize: 16,
                  whiteSpace: "nowrap",
                  lineHeight: "40px",
                  letterSpacing: "0.100em",
                  color: "rgb(255,255,255)",
                }}>Skyscraper: LIVE</span>
              </div>
              <DETAILS
                style={{
                  position: "absolute",
                  left: 190,
                  top: 174,
                  width: 86,
                  height: 36,
                }}
                strong
                property1={"default"}
                onClick={() => props.onDetails?.(MOVIE_DATA.skyscraper)}
              />
            </div>
          </div>
          </div>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 0,
          top: 162,
          width: 402,
          display: "flex",
          flexDirection: "row",
          gap: 14,
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          padding: "6px 4px",
          boxSizing: "border-box",
        }}>
          <ALL
            style={{
              position: "relative",
              width: 77,
              height: 40,
              flexShrink: 0,
              ...filterStyle('all'),
            }}
            property1={"default"}
            onClick={() => setActiveFilter('all')}
          />
          <MOVIES
            style={{
              position: "relative",
              width: 77,
              height: 40,
              flexShrink: 0,
              ...filterStyle('movies'),
            }}
            property1={"default"}
            onClick={() => setActiveFilter('movies')}
          />
          <SERIES
            style={{
              position: "relative",
              width: 77,
              height: 40,
              flexShrink: 0,
              ...filterStyle('series'),
            }}
            property1={"default"}
            onClick={() => setActiveFilter('series')}
          />
          <RECENTLYSAVED
            style={{
              position: "relative",
              width: 88,
              height: 40,
              flexShrink: 0,
              ...filterStyle('saved'),
            }}
            text1={"Saved\n"}
            property1={"default"}
            onClick={() => setActiveFilter('saved')}
          />
        </div>
        <div style={{ position: "absolute", left: 0, top: 824, width: 1, height: 60 }} />
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
          top: 758,
          width: 402,
          height: 98,
        }}
        onHome={props.onHome}
        onDiscover={props.onDiscover}
        onMatch={props.onMatch}
        onWatchlist={props.onWatchlist}
        active={props.active}
      />
    </div>
  );
}
export default WATCHLIST;
