import { ACTION } from './ACTION.jsx';
import { ADVENTURE } from './ADVENTURE.jsx';
import { APPLETV } from './APPLETV.jsx';
import { COMEDY } from './COMEDY.jsx';
import { DISNEY } from './DISNEY.jsx';
import { DRAMA } from './DRAMA.jsx';
import { HULU } from './HULU.jsx';
import { MAX2 } from './MAX2.jsx';
import { MYSTERY } from './MYSTERY.jsx';
import { NETFLIX } from './NETFLIX.jsx';
import { PRIMEVIDEO } from './PRIMEVIDEO.jsx';
import { TABBAR } from './TABBAR.jsx';
import { TOPNAV } from './TOPNAV.jsx';
import { WeuiArrowFilled } from './WeuiArrowFilled.jsx';

// figma node: 411:451 PROFILE
export function PROFILE2(_p = {}) {
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
        top: -27,
        width: 402,
        height: 1232,
        overflow: "hidden",
        backgroundColor: "rgb(7,3,15)",
      }}>
        <span style={{
          position: "absolute",
          left: 30,
          top: 148,
          width: 131,
          height: 40,
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 32,
          whiteSpace: "nowrap",
          lineHeight: "40px",
          letterSpacing: "0.100em",
          color: "rgb(255,255,255)",
        }}>Profile</span>
        <span style={{
          position: "absolute",
          left: 30,
          top: 198,
          width: 311,
          height: 17,
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "18px",
          letterSpacing: "0.100em",
          color: "rgb(255,255,255)",
        }}>Manage your movie preferences.</span>
        <span style={{
          position: "absolute",
          left: 32,
          top: 419,
          width: 154,
          height: 26,
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 15,
          whiteSpace: "nowrap",
          lineHeight: "24px",
          letterSpacing: "0.020em",
          color: "rgb(181,174,200)",
        }}>Streaming Platforms </span>
        <span style={{
          position: "absolute",
          left: 31,
          top: 597,
          width: 130,
          height: 26,
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 15,
          whiteSpace: "nowrap",
          lineHeight: "24px",
          letterSpacing: "0.020em",
          color: "rgb(181,174,200)",
        }}>Favorite Genres</span>
        <span style={{
          position: "absolute",
          left: 31,
          top: 710,
          width: 130,
          height: 26,
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 15,
          whiteSpace: "nowrap",
          lineHeight: "24px",
          letterSpacing: "0.020em",
          color: "rgb(181,174,200)",
        }}>Preferences</span>
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
          <div className="fig-asset-c3d70d6602d14253" style={{
            position: "absolute",
            left: 46,
            top: 36,
            width: 120,
            height: 116,
            borderRadius: "50%",
          }} />
          <span style={{
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
          <span style={{
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
            display: "flex",
            flexDirection: "row",
            gap: 20,
            alignItems: "center",
            flexWrap: "nowrap",
          }}>
            <DISNEY
              style={{
                position: "relative",
                width: 150,
                height: 100,
                flexShrink: 0,
              }}
              property1={"default"}
            />
            <HULU
              style={{
                position: "relative",
                width: 150,
                height: 100,
                flexShrink: 0,
              }}
              property1={"default"}
            />
            <MAX2
              style={{
                position: "relative",
                width: 150,
                height: 100,
                flexShrink: 0,
              }}
              property1={"default"}
            />
            <NETFLIX
              style={{
                position: "relative",
                width: 150,
                height: 100,
                flexShrink: 0,
              }}
              property1={"default"}
            />
            <PRIMEVIDEO
              style={{
                position: "relative",
                width: 150,
                height: 100,
                flexShrink: 0,
              }}
              property1={"default"}
            />
            <APPLETV
              style={{
                position: "relative",
                width: 150,
                height: 100,
                flexShrink: 0,
              }}
              property1={"default"}
            />
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
            <MYSTERY
              style={{
                position: "absolute",
                left: 0,
                top: 0.5,
                width: 64,
              }}
              property1={"default"}
            />
            <COMEDY
              style={{
                position: "absolute",
                left: 76,
                top: 0.5,
                width: 64,
              }}
              property1={"default"}
            />
            <ACTION
              style={{
                position: "absolute",
                left: 152,
                top: 0.5,
                width: 64,
              }}
              property1={"default"}
            />
            <ADVENTURE
              style={{
                position: "absolute",
                left: 228,
                top: 0.5,
                width: 64,
              }}
              property1={"default"}
            />
            <DRAMA
              style={{
                position: "absolute",
                left: 304,
                top: 0.5,
                width: 64,
              }}
              property1={"default"}
            />
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 41,
          top: 750,
          width: 320,
          height: 354,
          overflow: "hidden",
          borderRadius: 16,
        }}>
          <div className="selectable-card" style={{
            position: "absolute",
            left: 4,
            top: 4,
            width: 302,
            height: 48,
            borderRadius: 8,
            cursor: "pointer",
            boxShadow: "0 0 0 1px rgb(0,0,0), 5px 5px 8px 0px rgba(168,85,247,0.89)",
          }}>
            <span style={{
              position: "absolute",
              left: 20,
              top: 12,
              width: 63,
              height: 24,
              fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 600,
              fontSize: 14,
              textAlign: "center",
              lineHeight: "24px",
              letterSpacing: "0.020em",
              color: "rgb(255,255,255)",
            }}>Settings</span>
            <WeuiArrowFilled style={{
                position: "absolute",
                left: 279,
                top: 12,
                width: 12,
                height: 24,
              }} />
          </div>
          <div style={{
            position: "absolute",
            left: 3,
            top: 77,
            width: 302,
            height: 48,
            borderRadius: 8,
            boxShadow: "inset 0 0 0 1px rgb(0,0,0), 5px 5px 8px 0px rgba(168,85,247,0.89)",
          }}>
            <span style={{
              position: "absolute",
              left: 20,
              top: 12,
              width: 74,
              height: 24,
              fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 600,
              fontSize: 14,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "24px",
              letterSpacing: "0.020em",
              color: "rgb(255,255,255)",
            }}>Language</span>
            <WeuiArrowFilled style={{
                position: "absolute",
                left: 280,
                top: 12,
                width: 12,
                height: 24,
              }} />
          </div>
          <div style={{
            position: "absolute",
            left: 3,
            top: 149,
            width: 302,
            height: 48,
            borderRadius: 8,
            boxShadow: "inset 0 0 0 1px rgb(0,0,0), 5px 5px 8px 0px rgba(168,85,247,0.89)",
          }}>
            <span style={{
              position: "absolute",
              left: 20,
              top: 12,
              width: 97,
              height: 24,
              fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 600,
              fontSize: 14,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "24px",
              letterSpacing: "0.020em",
              color: "rgb(255,255,255)",
            }}>Notifications</span>
            <WeuiArrowFilled style={{
                position: "absolute",
                left: 281,
                top: 12,
                width: 12,
                height: 24,
              }} />
          </div>
          <div style={{
            position: "absolute",
            left: 3,
            top: 221,
            width: 302,
            height: 48,
            borderRadius: 8,
            boxShadow: "inset 0 0 0 1px rgb(0,0,0), 5px 5px 8px 0px rgba(168,85,247,0.89)",
          }}>
            <span style={{
              position: "absolute",
              left: 20,
              top: 12,
              width: 52,
              height: 24,
              fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 600,
              fontSize: 14,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "24px",
              letterSpacing: "0.020em",
              color: "rgb(255,255,255)",
            }}>Privacy</span>
            <WeuiArrowFilled style={{
                position: "absolute",
                left: 282,
                top: 12,
                width: 12,
                height: 24,
              }} />
          </div>
          <div style={{
            position: "absolute",
            left: 3,
            top: 293,
            width: 302,
            height: 48,
            borderRadius: 8,
            boxShadow: "inset 0 0 0 1px rgb(0,0,0), 5px 5px 8px 0px rgba(168,85,247,0.89)",
          }}>
            <span style={{
              position: "absolute",
              left: 20,
              top: 12,
              width: 52,
              height: 24,
              fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 600,
              fontSize: 14,
              textAlign: "center",
              lineHeight: "24px",
              letterSpacing: "0.020em",
              color: "rgb(210,24,24)",
              whiteSpace: "pre-wrap",
            }}>{"Log out\n"}</span>
            <WeuiArrowFilled style={{
                position: "absolute",
                left: 283,
                top: 12,
                width: 12,
                height: 24,
                color: "rgb(210,24,24)",
              }} />
          </div>
        </div>
      </div>
      <TOPNAV style={{
          position: "absolute",
          left: 0,
          top: 0,
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
        onMatch={props.onMatch}
        onDiscover={props.onDiscover}
        onWatchlist={props.onWatchlist}
      />
    </div>
  );
}
export default PROFILE2;
