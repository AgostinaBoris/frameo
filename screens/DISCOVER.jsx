import { useRef, useState } from 'react';
import { FORYOU } from './FORYOU.jsx';
import { ROMANCE } from './ROMANCE.jsx';
import { SCIFI } from './SCIFI.jsx';
import { SEARCHBAR } from './SEARCHBAR.jsx';
import { TABBAR } from './TABBAR.jsx';
import { THRILLER } from './THRILLER.jsx';
import { TOPNAV } from './TOPNAV.jsx';
import { TRENDING } from './TRENDING.jsx';

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

// figma node: 348:562 DISCOVER
export function DISCOVER(_p = {}) {
  const props = _p;
  const [query, setQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('trending');
  const [trendingProgress, setTrendingProgress] = useState(0);
  const [scifiProgress, setScifiProgress] = useState(0);
  const [romanceProgress, setRomanceProgress] = useState(0);
  const handleCarouselScroll = (setProgress) => (e) => {
    const el = e.currentTarget;
    const max = el.scrollWidth - el.clientWidth;
    setProgress(max > 0 ? el.scrollLeft / max : 0);
  };
  const trendingDrag = useDragScroll();
  const scifiDrag = useDragScroll();
  const romanceDrag = useDragScroll();
  const dimStyle = (key) => ({
    position: "relative",
    width: 64,
    flexShrink: 0,
    opacity: activeFilter === key ? 1 : 0.45,
  });
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
        top: 91,
        width: 402,
        height: 667,
        overflowY: "auto",
        overflowX: "hidden",
        WebkitOverflowScrolling: "touch",
        backgroundColor: "rgb(7,3,15)",
      }}>
        <span style={{
          position: "absolute",
          left: 28,
          top: 99,
          width: 328,
          height: 25,
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "18px",
          letterSpacing: "0.100em",
          color: "rgb(138,131,156)",
        }}>Explore movies across your platforms.</span>
        <div style={{
          position: "absolute",
          left: 28,
          top: 57,
          width: 110,
          height: 40,
          overflow: "hidden",
        }}>
          <span style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 110,
            height: 40,
            fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 700,
            fontSize: 22,
            whiteSpace: "nowrap",
            lineHeight: "40px",
            letterSpacing: "0.100em",
            color: "rgb(255,255,255)",
          }}>Discover</span>
        </div>
        <div style={{
          position: "absolute",
          left: 17,
          top: 200,
          display: "flex",
          flexDirection: "row",
          gap: 12,
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
        }}>
          <TRENDING
            style={{ ...dimStyle('trending'), height: 36 }}
            property1={"default"}
            onClick={() => setActiveFilter('trending')}
          />
          <THRILLER
            style={dimStyle('thriller')}
            property1={"default"}
            onClick={() => setActiveFilter('thriller')}
          />
          <SCIFI
            style={dimStyle('scifi')}
            property1={"default"}
            onClick={() => setActiveFilter('scifi')}
          />
          <ROMANCE
            style={{ ...dimStyle('romance'), height: 36 }}
            property1={"default"}
            onClick={() => setActiveFilter('romance')}
          />
          <FORYOU
            style={dimStyle('foryou')}
            text1={"For You"}
            property1={"default"}
            onClick={() => setActiveFilter('foryou')}
          />
        </div>
        <SEARCHBAR
          style={{
            position: "absolute",
            left: 23,
            top: 135,
            width: 353,
            height: 42,
          }}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <span style={{
          position: "absolute",
          left: 24,
          top: 266,
          width: 102,
          height: 25,
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 15,
          whiteSpace: "nowrap",
          lineHeight: "24px",
          letterSpacing: "0.020em",
          color: "rgb(248,247,255)",
        }}>Trending Now</span>
        <span style={{
          position: "absolute",
          left: 23,
          top: 473,
          width: 188,
          height: 25,
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 15,
          whiteSpace: "nowrap",
          lineHeight: "24px",
          letterSpacing: "0.020em",
          color: "rgb(248,247,255)",
        }}>Because You Liked Sci-Fi</span>
        <span style={{
          position: "absolute",
          left: 23,
          top: 683,
          width: 220,
          height: 25,
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 15,
          whiteSpace: "nowrap",
          lineHeight: "24px",
          letterSpacing: "0.020em",
          color: "rgb(248,247,255)",
        }}>Because You Liked Romance</span>
        <ScrollTrack progress={trendingProgress} style={{ left: 24, top: 293, width: 352 }} />
        <div
          className="no-scrollbar"
          onScroll={handleCarouselScroll(setTrendingProgress)}
          {...trendingDrag}
          style={{
          position: "absolute",
          left: 24,
          top: 297,
          width: 352,
          height: 151,
          overflowX: "auto",
          overflowY: "hidden",
          WebkitOverflowScrolling: "touch",
          cursor: "grab",
          backgroundColor: "rgb(7,3,15)",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 8,
            display: "flex",
            flexDirection: "row",
            gap: 14,
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
          }}>
            <div className="fig-asset-fe8e3ff3a7e328a9-d2451234" style={{
              position: "relative",
              width: 92,
              height: 138,
              borderRadius: 12,
              flexShrink: 0,
            }} />
            <div className="fig-asset-754b5a5b696dd43f-485e6025" style={{
              position: "relative",
              width: 92,
              height: 138,
              borderRadius: 12,
              flexShrink: 0,
            }} />
            <div className="fig-asset-e2301214ffe38250-d7f76f45" style={{
              position: "relative",
              width: 92,
              height: 138,
              borderRadius: 12,
              flexShrink: 0,
            }} />
            <div className="fig-asset-16a6c192d408dcaa-af6ff228" style={{
              position: "relative",
              width: 92,
              height: 138,
              borderRadius: 12,
              flexShrink: 0,
            }} />
            <div className="fig-asset-bd384dcc53e483e1-fb37d8b1" style={{
              position: "relative",
              width: 92,
              height: 138,
              borderRadius: 12,
              flexShrink: 0,
            }} />
            <div className="fig-asset-78a0584f805dd4e9-ad4adc0a" style={{
              position: "relative",
              width: 92,
              height: 138,
              borderRadius: 12,
              flexShrink: 0,
            }} />
            <div className="fig-asset-16cca228fe83b99c-d08764a1" style={{
              position: "relative",
              width: 92,
              height: 138,
              borderRadius: 12,
              flexShrink: 0,
            }} />
            <div className="fig-asset-ca56b448bbb4aa85-0c260b56" style={{
              position: "relative",
              width: 92,
              height: 138,
              borderRadius: 12,
              flexShrink: 0,
            }} />
            <div className="fig-asset-dd47d71321de0b71-456ced60" style={{
              position: "relative",
              width: 92,
              height: 138,
              borderRadius: 12,
              flexShrink: 0,
            }} />
            <div className="fig-asset-d6b1537051c19838-d05ea2bc" style={{
              position: "relative",
              width: 92,
              height: 138,
              borderRadius: 12,
              flexShrink: 0,
            }} />
          </div>
        </div>
        <ScrollTrack progress={scifiProgress} style={{ left: 24, top: 500, width: 352 }} />
        <div
          className="no-scrollbar"
          onScroll={handleCarouselScroll(setScifiProgress)}
          {...scifiDrag}
          style={{
          position: "absolute",
          left: 24,
          top: 504,
          width: 352,
          height: 154,
          overflowX: "auto",
          overflowY: "hidden",
          WebkitOverflowScrolling: "touch",
          cursor: "grab",
          backgroundColor: "rgb(7,3,15)",
        }}>
          <div style={{
            position: "absolute",
            left: 2,
            top: 16,
            display: "flex",
            flexDirection: "row",
            gap: 14,
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
          }}>
            <div className="fig-asset-7902f039ec999184" style={{
              position: "relative",
              width: 92,
              height: 138,
              borderRadius: 12,
              flexShrink: 0,
            }} />
            <div className="fig-asset-5e70b4ac683e4b89" style={{
              position: "relative",
              width: 92,
              height: 138,
              borderRadius: 12,
              flexShrink: 0,
            }} />
            <div className="fig-asset-0ff7da68992424f1" style={{
              position: "relative",
              width: 92,
              height: 138,
              borderRadius: 12,
              flexShrink: 0,
            }} />
            <div className="fig-asset-35d7609ff5a735ab" style={{
              position: "relative",
              width: 92,
              height: 138,
              borderRadius: 12,
              flexShrink: 0,
            }} />
            <div className="fig-asset-91fa26e9efd95ed3" style={{
              position: "relative",
              width: 92,
              height: 138,
              borderRadius: 12,
              flexShrink: 0,
            }} />
            <div className="fig-asset-f5e1ed4d0e45b5e6" style={{
              position: "relative",
              width: 92,
              height: 138,
              borderRadius: 12,
              flexShrink: 0,
            }} />
            <div className="fig-asset-dfab7020f46c7b1b" style={{
              position: "relative",
              width: 92,
              height: 138,
              borderRadius: 12,
              flexShrink: 0,
            }} />
            <div className="fig-asset-ff5b3b64d4d23751" style={{
              position: "relative",
              width: 92,
              height: 138,
              borderRadius: 12,
              flexShrink: 0,
            }} />
            <div className="fig-asset-114124f630c4fc60" style={{
              position: "relative",
              width: 92,
              height: 138,
              borderRadius: 12,
              flexShrink: 0,
            }} />
            <div className="fig-asset-9568bc66df398674" style={{
              position: "relative",
              width: 92,
              height: 138,
              borderRadius: 12,
              flexShrink: 0,
            }} />
          </div>
        </div>
        <ScrollTrack progress={romanceProgress} style={{ left: 24, top: 710, width: 352 }} />
        <div
          className="no-scrollbar"
          onScroll={handleCarouselScroll(setRomanceProgress)}
          {...romanceDrag}
          style={{
          position: "absolute",
          left: 24,
          top: 714,
          width: 352,
          height: 150,
          overflowX: "auto",
          overflowY: "hidden",
          WebkitOverflowScrolling: "touch",
          cursor: "grab",
          backgroundColor: "rgb(7,3,15)",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 9,
            display: "flex",
            flexDirection: "row",
            gap: 14,
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
          }}>
            <div className="fig-asset-cc40e38969aedf98" style={{
              position: "relative",
              width: 92,
              height: 138,
              borderRadius: 12,
              flexShrink: 0,
            }} />
            <div className="fig-asset-1c451fc3796d6d8c" style={{
              position: "relative",
              width: 92,
              height: 138,
              borderRadius: 12,
              flexShrink: 0,
            }} />
            <div className="fig-asset-f23faa2d64dd5de9" style={{
              position: "relative",
              width: 92,
              height: 138,
              borderRadius: 12,
              flexShrink: 0,
            }} />
            <div className="fig-asset-35d3178b0c21622a" style={{
              position: "relative",
              width: 92,
              height: 138,
              borderRadius: 12,
              flexShrink: 0,
            }} />
            <div className="fig-asset-50e75c23ae5db6be" style={{
              position: "relative",
              width: 92,
              height: 138,
              borderRadius: 12,
              flexShrink: 0,
            }} />
            <div className="fig-asset-bbdd440b7c809bdb" style={{
              position: "relative",
              width: 92,
              height: 138,
              borderRadius: 12,
              flexShrink: 0,
            }} />
            <div className="fig-asset-ce08786a7bc1799e" style={{
              position: "relative",
              width: 92,
              height: 138,
              borderRadius: 12,
              flexShrink: 0,
            }} />
            <div className="fig-asset-df55042a6c8885d5" style={{
              position: "relative",
              width: 92,
              height: 138,
              borderRadius: 12,
              flexShrink: 0,
            }} />
            <div className="fig-asset-c35cde88b53bc3c9" style={{
              position: "relative",
              width: 92,
              height: 138,
              borderRadius: 12,
              flexShrink: 0,
            }} />
            <div className="fig-asset-59dc4fd585115a02" style={{
              position: "relative",
              width: 92,
              height: 138,
              borderRadius: 12,
              flexShrink: 0,
            }} />
          </div>
        </div>
      </div>
      <TOPNAV
        style={{ position: "absolute", left: 0, top: 0, width: 402, height: 91 }}
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
      />
    </div>
  );
}
export default DISCOVER;
