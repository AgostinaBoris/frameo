import { useRef, useState } from 'react';
import { AskFrameo } from './AskFrameo.jsx';
import { Ellipse10 } from './Ellipse10.jsx';
import { Ellipse11 } from './Ellipse11.jsx';
import { Ellipse8 } from './Ellipse8.jsx';
import { Ellipse9 } from './Ellipse9.jsx';
import { TABBAR } from './TABBAR.jsx';
import { TOPNAV } from './TOPNAV.jsx';

const ScrollTrack = ({ progress, style }) => (
  <div style={{
    position: "absolute",
    height: 3,
    borderRadius: 2,
    backgroundColor: "rgba(255,255,255,0.1)",
    overflow: "hidden",
    ...style,
  }}>
    <div style={{
      position: "absolute",
      top: 0,
      left: 0,
      height: "100%",
      width: "28%",
      borderRadius: 2,
      background: "linear-gradient(90deg, rgba(168,85,247,0.9), rgba(139,61,255,0.9))",
      transform: `translateX(${progress * (100 / 0.28 - 100)}%)`,
    }} />
  </div>
);

const useDragScroll = () => {
  const state = useRef({ dragging: false, startX: 0, startScrollLeft: 0 });
  return {
    onMouseDown: (e) => {
      state.current.dragging = true;
      state.current.startX = e.pageX;
      state.current.startScrollLeft = e.currentTarget.scrollLeft;
    },
    onMouseMove: (e) => {
      if (!state.current.dragging) return;
      e.preventDefault();
      e.currentTarget.scrollLeft = state.current.startScrollLeft - (e.pageX - state.current.startX);
    },
    onMouseUp: () => { state.current.dragging = false; },
    onMouseLeave: () => { state.current.dragging = false; },
  };
};

// figma node: 99:95 HOME - FRAMEO
export function HOMEFRAMEO(_p = {}) {
  const props = _p;
  const [trendingProgress, setTrendingProgress] = useState(0);
  const [recommendedProgress, setRecommendedProgress] = useState(0);
  const handleCarouselScroll = (setProgress) => (e) => {
    const el = e.currentTarget;
    const max = el.scrollWidth - el.clientWidth;
    setProgress(max > 0 ? el.scrollLeft / max : 0);
  };
  const trendingDrag = useDragScroll();
  const recommendedDrag = useDragScroll();
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
        top: 42,
        width: 402,
        height: 716,
        overflowY: "auto",
        overflowX: "hidden",
        WebkitOverflowScrolling: "touch",
        backgroundColor: "rgb(7,3,15)",
      }}>
        <div className="fig-asset-d7ba9b5d264391c2" style={{
          position: "absolute",
          left: 29,
          top: 127,
          width: 342,
          height: 267,
          opacity: 0.22,
        }} />
        <span style={{
          position: "absolute",
          left: 31,
          top: 153,
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
          top: 271,
          width: 343,
          height: 96,
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 16,
          textAlign: "center",
          whiteSpace: "normal",
          lineHeight: "24px",
          letterSpacing: "0.030em",
          color: "rgb(181,174,200)",
        }}>AI-powered picks for your mood, time, and platforms.</span>
        <AskFrameo
          style={{
            position: "absolute",
            left: 61,
            top: 345,
            width: 280,
            height: 60,
          }}
          property1={"default"}
          onClick={props.onAskFrameo}
        />
        <span style={{
          position: "absolute",
          left: 27,
          top: 485,
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
          top: 867,
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
          top: 659,
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
          left: 0,
          top: 524,
          width: 402,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: 28,
        }}>
          {[
            { Icon: Ellipse8, label: "Mood", step: "match" },
            { Icon: Ellipse9, label: "Context", step: "match-context" },
            { Icon: Ellipse10, label: "Time", step: "match-time" },
            { Icon: Ellipse11, label: "Platforms", step: "match-platforms" },
          ].map(({ Icon, label, step }) => (
            <div
              key={label}
              className="selectable-card"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 10,
                cursor: "pointer",
              }}
              onClick={() => props.onQuickMatch?.(step)}
            >
              <Icon style={{ position: "relative" }} property1={"default"} />
              <span style={{
                fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 13,
                textAlign: "center",
                whiteSpace: "nowrap",
                letterSpacing: "0.080em",
                color: "rgb(255,255,255)",
              }}>{label}</span>
            </div>
          ))}
        </div>
        <span style={{
          position: "absolute",
          left: 305,
          top: 867,
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
          top: 659,
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
        <ScrollTrack progress={recommendedProgress} style={{ left: 27, top: 899, width: 375 }} />
        <div
          className="no-scrollbar"
          onScroll={handleCarouselScroll(setRecommendedProgress)}
          {...recommendedDrag}
          style={{
          position: "absolute",
          left: 27,
          top: 911,
          width: 375,
          height: 125,
          overflowX: "auto",
          overflowY: "hidden",
          cursor: "grab",
          WebkitOverflowScrolling: "touch",
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
        <ScrollTrack progress={trendingProgress} style={{ left: 24, top: 691, width: 378 }} />
        <div
          className="no-scrollbar"
          onScroll={handleCarouselScroll(setTrendingProgress)}
          {...trendingDrag}
          style={{
          position: "absolute",
          left: 24,
          top: 703,
          width: 378,
          height: 125,
          overflowX: "auto",
          overflowY: "hidden",
          WebkitOverflowScrolling: "touch",
          cursor: "grab",
          backgroundColor: "rgb(7,3,15)",
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
        <div style={{ position: "absolute", left: 0, top: 1036, width: 1, height: 110 }} />
      </div>
      <TABBAR style={{
          position: "absolute",
          left: 0,
          top: 758,
          width: 402,
          height: 98,
        }}
        onHome={props.onHome}
        onMatch={props.onAskFrameo}
        onDiscover={props.onDiscover}
        onWatchlist={props.onWatchlist}
        active={props.active}
      />
      <TOPNAV style={{
          position: "absolute",
          left: 1,
          top: 0,
          width: 402,
          height: 106,
        }}
        onProfileClick={props.onProfile}
      />
    </div>
  );
}
export default HOMEFRAMEO;
