import { AskFrameo } from './AskFrameo.jsx';
import { Ellipse10 } from './Ellipse10.jsx';
import { Ellipse11 } from './Ellipse11.jsx';
import { Ellipse8 } from './Ellipse8.jsx';
import { Ellipse9 } from './Ellipse9.jsx';
import { LOGONAV } from './LOGONAV.jsx';
import { TABBAR } from './TABBAR.jsx';
import { TOPNAV } from './TOPNAV.jsx';

// figma node: 99:95 HOME - FRAMEO
export function HOMEFRAMEO(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 402,
      height: 874,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 42,
        width: 402,
        height: 1101,
        overflow: "hidden",
        backgroundColor: "rgb(255,255,255)",
      }}>
        <div className="fig-asset-d7ba9b5d264391c2" style={{
          position: "absolute",
          left: 29,
          top: 117,
          width: 342,
          height: 267,
          opacity: 0.22,
        }} />
        <LOGONAV style={{
            position: "absolute",
            left: 33,
            top: 59,
            width: 176,
            height: 30,
          }} />
        <span style={{
          position: "absolute",
          left: 31,
          top: 143,
          width: 340,
          height: 141,
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 27,
          textAlign: "center",
          whiteSpace: "pre-wrap",
          lineHeight: "40px",
          letterSpacing: "0.050em",
          color: "rgb(255,255,255)",
          display: "inline-block",
        }}><span style={{ fontSize: 40 }}>{"What"}</span>{" should we watch "}<span style={{ fontWeight: 700, fontSize: 29 }}>{"tonight"}</span><span style={{ fontWeight: 700, fontSize: 27 }}>{"?"}</span></span>
        <span style={{
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
        <AskFrameo
          style={{
            position: "absolute",
            left: 61,
            top: 354,
            width: 280,
            height: 60,
          }}
          property1={"default"}
        />
        <span style={{
          position: "absolute",
          left: 27,
          top: 445,
          width: 161,
          height: 24,
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 15,
          whiteSpace: "nowrap",
          lineHeight: "24px",
          letterSpacing: "0.100em",
          color: "rgb(255,255,255)",
        }}>Quick Match</span>
        <span style={{
          position: "absolute",
          left: 24,
          top: 792,
          width: 243,
          height: 24,
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 15,
          whiteSpace: "nowrap",
          lineHeight: "24px",
          letterSpacing: "0.100em",
          color: "rgb(255,255,255)",
        }}>Recommended for you</span>
        <span style={{
          position: "absolute",
          left: 24,
          top: 604,
          width: 151,
          height: 24,
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 15,
          whiteSpace: "nowrap",
          lineHeight: "24px",
          letterSpacing: "0.100em",
          color: "rgb(255,255,255)",
        }}>Trending now</span>
        <div style={{
          position: "absolute",
          left: 37,
          top: 561,
          width: 333,
          height: 24,
        }}>
          <span style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 47,
            height: 24,
            fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 13,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "24px",
            letterSpacing: "0.080em",
            color: "rgb(255,255,255)",
          }}>Mood</span>
          <span style={{
            position: "absolute",
            left: 78,
            top: 0,
            width: 78,
            height: 24,
            fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 13,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "24px",
            letterSpacing: "0.080em",
            color: "rgb(255,255,255)",
          }}>Context</span>
          <span style={{
            position: "absolute",
            left: 185,
            top: 0,
            width: 52,
            height: 24,
            fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 13,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "24px",
            letterSpacing: "0.080em",
            color: "rgb(255,255,255)",
          }}>Time</span>
          <span style={{
            position: "absolute",
            left: 262,
            top: 0,
            width: 81,
            height: 24,
            fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 13,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "24px",
            letterSpacing: "0.080em",
            color: "rgb(255,255,255)",
          }}>Platforms</span>
        </div>
        <span style={{
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
        <span style={{
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
        <div style={{
          position: "absolute",
          left: 27,
          top: 836,
          width: 400,
          height: 125,
          overflow: "hidden",
          backgroundColor: "rgb(42,36,56)",
        }}>
          <div className="fig-asset-e53d47c0c4f85041" style={{
            position: "absolute",
            left: 101,
            top: 0,
            width: 88,
            height: 130,
          }} />
          <div className="fig-asset-e625a1c455b8166b" style={{
            position: "absolute",
            left: 0,
            top: -5,
            width: 88,
            height: 130,
          }} />
          <div className="fig-asset-efcaca9d3bb699e8" style={{
            position: "absolute",
            left: 202,
            top: 0,
            width: 88,
            height: 130,
          }} />
          <div className="fig-asset-dad827e2556ef886" style={{
            position: "absolute",
            left: 303,
            top: 0,
            width: 88,
            height: 130,
          }} />
          <div className="fig-asset-d771b164fe5721e6" style={{
            position: "absolute",
            left: 808,
            top: 0,
            width: 88,
            height: 130,
          }} />
          <div className="fig-asset-9e8952d1ae35b842" style={{
            position: "absolute",
            left: 404,
            top: 0,
            width: 88,
            height: 130,
          }} />
          <div className="fig-asset-23f6e6cf786c3d41" style={{
            position: "absolute",
            left: 505,
            top: 0,
            width: 88,
            height: 130,
          }} />
          <div className="fig-asset-4b47891a73893a18" style={{
            position: "absolute",
            left: 606,
            top: 0,
            width: 88,
            height: 130,
          }} />
          <div className="fig-asset-4a78ae4c5c2a4b13" style={{
            position: "absolute",
            left: 909,
            top: 0,
            width: 88,
            height: 130,
          }} />
          <div className="fig-asset-2663e0e526ac3651" style={{
            position: "absolute",
            left: 707,
            top: 0,
            width: 88,
            height: 130,
          }} />
        </div>
        <div style={{
          position: "absolute",
          left: 24,
          top: 648,
          width: 800,
          height: 125,
          overflow: "hidden",
          backgroundColor: "rgb(255,255,255)",
        }}>
          <div className="fig-asset-fcb0ef5ff53e601e" style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 88,
            height: 130,
          }} />
          <div className="fig-asset-237203808fd8fd1f" style={{
            position: "absolute",
            left: 99,
            top: 0,
            width: 88,
            height: 130,
          }} />
          <div className="fig-asset-ff36a2c3a2c4b94f" style={{
            position: "absolute",
            left: 198,
            top: 0,
            width: 88,
            height: 130,
          }} />
          <div className="fig-asset-25943ea217d4f72e" style={{
            position: "absolute",
            left: 297,
            top: 0,
            width: 88,
            height: 130,
          }} />
          <div className="fig-asset-f2fe566f855ae3fe" style={{
            position: "absolute",
            left: 792,
            top: 0,
            width: 88,
            height: 130,
          }} />
          <div className="fig-asset-9c6a2c84f86cb417" style={{
            position: "absolute",
            left: 396,
            top: 0,
            width: 88,
            height: 130,
          }} />
          <div className="fig-asset-ae92377963041c32" style={{
            position: "absolute",
            left: 495,
            top: 0,
            width: 88,
            height: 130,
          }} />
          <div className="fig-asset-e03f4135636ca39c" style={{
            position: "absolute",
            left: 594,
            top: 0,
            width: 88,
            height: 130,
          }} />
          <div className="fig-asset-5ea01b727a89d512" style={{
            position: "absolute",
            left: 891,
            top: 0,
            width: 88,
            height: 130,
          }} />
          <div className="fig-asset-60b65f613ac2cc62" style={{
            position: "absolute",
            left: 990,
            top: -5,
            width: 88,
            height: 130,
          }} />
          <div className="fig-asset-541ef6b35ea6b1f0" style={{
            position: "absolute",
            left: 1089,
            top: 0,
            width: 88,
            height: 130,
          }} />
          <div className="fig-asset-d2d7c0a777956e63" style={{
            position: "absolute",
            left: 693,
            top: 0,
            width: 88,
            height: 130,
          }} />
        </div>
        <div style={{
          position: "absolute",
          left: 14,
          top: 484,
          display: "flex",
          flexDirection: "row",
          gap: 6,
          alignItems: "center",
          flexWrap: "nowrap",
        }}>
          <Ellipse8
            style={{
              position: "relative",
              width: 88,
              height: 82,
              flexShrink: 0,
            }}
            property1={"default"}
          />
          <Ellipse9
            style={{
              position: "relative",
              width: 88,
              height: 82,
              flexShrink: 0,
            }}
            property1={"default"}
          />
          <Ellipse10
            style={{
              position: "relative",
              width: 88,
              height: 82,
              flexShrink: 0,
            }}
            property1={"default"}
          />
          <Ellipse11
            style={{
              position: "relative",
              width: 88,
              height: 82,
              flexShrink: 0,
            }}
            property1={"default"}
          />
        </div>
      </div>
      <TABBAR style={{
          position: "absolute",
          left: 0,
          top: 779,
          width: 402,
          height: 98,
        }} />
      <TOPNAV style={{
          position: "absolute",
          left: 1,
          top: 0,
          width: 402,
          height: 106,
        }} />
    </div>
  );
}
export default HOMEFRAMEO;
