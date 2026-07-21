import { useEffect, useRef, useState } from 'react';
import { FORYOU } from './FORYOU.jsx';
import { ROMANCE } from './ROMANCE.jsx';
import { SCIFI } from './SCIFI.jsx';
import { SEARCHBAR } from './SEARCHBAR.jsx';
import { TABBAR } from './TABBAR.jsx';
import { THRILLER } from './THRILLER.jsx';
import { TOPNAV } from './TOPNAV.jsx';
import { TRENDING } from './TRENDING.jsx';
import { searchMovies } from './tmdb.js';

const ScrollTrack = ({ progress, style, scrollRef }) => {
  const trackRef = useRef(null);
  const seek = (clientX) => {
    const el = scrollRef?.current;
    const track = trackRef.current;
    if (!el || !track) return;
    const rect = track.getBoundingClientRect();
    const fraction = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
    el.scrollLeft = fraction * (el.scrollWidth - el.clientWidth);
  };
  return (
    <div
      ref={trackRef}
      onMouseDown={(e) => {
        seek(e.clientX);
        const onMove = (ev) => seek(ev.clientX);
        const onUp = () => {
          window.removeEventListener("mousemove", onMove);
          window.removeEventListener("mouseup", onUp);
        };
        window.addEventListener("mousemove", onMove);
        window.addEventListener("mouseup", onUp);
      }}
      style={{
        position: "absolute",
        height: 16,
        display: "flex",
        alignItems: "flex-start",
        cursor: "pointer",
        ...style,
      }}
    >
      <div style={{
        position: "relative",
        width: "100%",
        height: 3,
        borderRadius: 2,
        backgroundColor: "rgba(255,255,255,0.1)",
        overflow: "hidden",
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
    </div>
  );
};

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
  const [searchResults, setSearchResults] = useState([]);
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchError, setSearchError] = useState(null);
  const [activeFilter, setActiveFilter] = useState('trending');

  useEffect(() => {
    const trimmed = query.trim();
    if (!trimmed) {
      setSearchResults([]);
      setSearchError(null);
      setSearchLoading(false);
      return;
    }
    const controller = new AbortController();
    setSearchLoading(true);
    setSearchError(null);
    const timer = setTimeout(() => {
      searchMovies(trimmed, { signal: controller.signal })
        .then((results) => {
          setSearchResults(results);
          setSearchLoading(false);
        })
        .catch((err) => {
          if (err.name === 'AbortError') return;
          setSearchError('No pudimos buscar peliculas. Intenta de nuevo.');
          setSearchLoading(false);
        });
    }, 400);
    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [query]);

  const isSearching = query.trim().length > 0;
  const [trendingProgress, setTrendingProgress] = useState(0);
  const [scifiProgress, setScifiProgress] = useState(0);
  const [romanceProgress, setRomanceProgress] = useState(0);
  const [filtersProgress, setFiltersProgress] = useState(0);
  const handleCarouselScroll = (setProgress) => (e) => {
    const el = e.currentTarget;
    const max = el.scrollWidth - el.clientWidth;
    setProgress(max > 0 ? el.scrollLeft / max : 0);
  };
  const trendingDrag = useDragScroll();
  const scifiDrag = useDragScroll();
  const romanceDrag = useDragScroll();
  const filtersDrag = useDragScroll();
  const filtersScrollRef = useRef(null);
  const trendingScrollRef = useRef(null);
  const scifiScrollRef = useRef(null);
  const romanceScrollRef = useRef(null);
  const dimStyle = (key) => ({
    position: "relative",
    flexShrink: 0,
    opacity: activeFilter === key ? 1 : 0.8,
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
          top: 62,
          width: 328,
          height: 25,
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 15,
          whiteSpace: "nowrap",
          lineHeight: "18px",
          letterSpacing: "0.100em",
          color: "rgb(138,131,156)",
        }}>Explore movies across your platforms.</span>
        <div style={{
          position: "absolute",
          left: 28,
          top: 20,
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
        {!isSearching && (
        <>
        <div
          ref={filtersScrollRef}
          className="no-scrollbar"
          onScroll={handleCarouselScroll(setFiltersProgress)}
          {...filtersDrag}
          style={{
            position: "absolute",
            left: 0,
            top: 163,
            width: 402,
            overflowX: "auto",
            overflowY: "hidden",
            WebkitOverflowScrolling: "touch",
            cursor: "grab",
          }}
        >
          <div style={{
            display: "flex",
            flexDirection: "row",
            gap: 16,
            alignItems: "center",
            flexWrap: "nowrap",
            padding: "0 17px",
            width: "max-content",
          }}>
            <TRENDING
              style={dimStyle('trending')}
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
              style={dimStyle('romance')}
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
        </div>
        <ScrollTrack progress={filtersProgress} scrollRef={filtersScrollRef} style={{ left: 17, top: 209, width: 368 }} />
        </>
        )}
        <SEARCHBAR
          style={{
            position: "absolute",
            left: 23,
            top: 98,
            width: 353,
            height: 42,
          }}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {isSearching && (
          <div style={{
            position: "absolute",
            left: 23,
            top: 150,
            width: 353,
            display: "flex",
            flexDirection: "column",
            gap: 10,
            paddingBottom: 24,
          }}>
            {searchLoading && (
              <span style={{
                fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, sans-serif",
                fontWeight: 600,
                fontSize: 14,
                color: "rgb(181,174,200)",
              }}>Buscando...</span>
            )}
            {searchError && (
              <span style={{
                fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, sans-serif",
                fontWeight: 600,
                fontSize: 14,
                color: "rgb(248,113,113)",
              }}>{searchError}</span>
            )}
            {!searchLoading && !searchError && searchResults.length === 0 && (
              <span style={{
                fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, sans-serif",
                fontWeight: 600,
                fontSize: 14,
                color: "rgb(181,174,200)",
              }}>No encontramos peliculas para "{query.trim()}".</span>
            )}
            {!searchLoading && searchResults.map((movie) => (
              <div
                key={movie.id}
                onClick={() => window.open(movie.tmdbUrl, "_blank", "noopener,noreferrer")}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 12,
                  alignItems: "center",
                  cursor: "pointer",
                  padding: 8,
                  borderRadius: 12,
                  boxShadow: "inset 0 0 0 1px rgba(168,85,247,0.25)",
                }}
              >
                <div style={{
                  width: 46,
                  height: 69,
                  borderRadius: 8,
                  flexShrink: 0,
                  overflow: "hidden",
                  backgroundColor: "rgba(168,85,247,0.15)",
                }}>
                  {movie.posterUrl && (
                    <img
                      src={movie.posterUrl}
                      alt={movie.title}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  )}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 4, minWidth: 0 }}>
                  <span style={{
                    fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, sans-serif",
                    fontWeight: 700,
                    fontSize: 14,
                    color: "rgb(248,247,255)",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}>{movie.title}</span>
                  <span style={{
                    fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, sans-serif",
                    fontWeight: 500,
                    fontSize: 12,
                    color: "rgb(181,174,200)",
                  }}>{movie.year}{movie.rating ? ` • ★ ${movie.rating}` : ''}</span>
                </div>
              </div>
            ))}
          </div>
        )}
        {!isSearching && (
        <>
        <span style={{
          position: "absolute",
          left: 24,
          top: 229,
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
          top: 436,
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
          top: 646,
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
        <ScrollTrack progress={trendingProgress} scrollRef={trendingScrollRef} style={{ left: 24, top: 256, width: 352 }} />
        <div
          ref={trendingScrollRef}
          className="no-scrollbar"
          onScroll={handleCarouselScroll(setTrendingProgress)}
          {...trendingDrag}
          style={{
          position: "absolute",
          left: 24,
          top: 260,
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
        <ScrollTrack progress={scifiProgress} scrollRef={scifiScrollRef} style={{ left: 24, top: 463, width: 352 }} />
        <div
          ref={scifiScrollRef}
          className="no-scrollbar"
          onScroll={handleCarouselScroll(setScifiProgress)}
          {...scifiDrag}
          style={{
          position: "absolute",
          left: 24,
          top: 467,
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
        <ScrollTrack progress={romanceProgress} scrollRef={romanceScrollRef} style={{ left: 24, top: 673, width: 352 }} />
        <div
          ref={romanceScrollRef}
          className="no-scrollbar"
          onScroll={handleCarouselScroll(setRomanceProgress)}
          {...romanceDrag}
          style={{
          position: "absolute",
          left: 24,
          top: 677,
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
        </>
        )}
        <div style={{ position: "absolute", left: 0, top: 827, width: 1, height: 60 }} />
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
        active={props.active}
      />
    </div>
  );
}
export default DISCOVER;
