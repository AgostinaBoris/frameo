import { useEffect, useRef, useState } from 'react';
import { AskFrameo } from './AskFrameo.jsx';
import { Ellipse10 } from './Ellipse10.jsx';
import { Ellipse11 } from './Ellipse11.jsx';
import { Ellipse8 } from './Ellipse8.jsx';
import { Ellipse9 } from './Ellipse9.jsx';
import { TABBAR } from './TABBAR.jsx';
import { TOPNAV } from './TOPNAV.jsx';
import { getPopularMovies, getTrendingMovies } from '../screens/tmdb.js';
import { useLanguage } from '../src/i18n.jsx';

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

// figma node: 99:95 HOME - FRAMEO
export function HOMEFRAMEO(_p = {}) {
  const props = _p;
  const { t } = useLanguage();
  const [trendingProgress, setTrendingProgress] = useState(0);
  const [recommendedProgress, setRecommendedProgress] = useState(0);
  const handleCarouselScroll = (setProgress) => (e) => {
    const el = e.currentTarget;
    const max = el.scrollWidth - el.clientWidth;
    setProgress(max > 0 ? el.scrollLeft / max : 0);
  };
  const trendingDrag = useDragScroll();
  const recommendedDrag = useDragScroll();
  const trendingScrollRef = useRef(null);
  const recommendedScrollRef = useRef(null);
  const [trendingMovies, setTrendingMovies] = useState([]);
  useEffect(() => {
    const controller = new AbortController();
    getTrendingMovies({ signal: controller.signal })
      .then(setTrendingMovies)
      .catch((err) => {
        if (err.name === 'AbortError') return;
        console.error('TMDB trending fetch failed:', err);
      });
    return () => controller.abort();
  }, []);
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  useEffect(() => {
    const controller = new AbortController();
    getPopularMovies({ signal: controller.signal })
      .then(setRecommendedMovies)
      .catch((err) => {
        if (err.name === 'AbortError') return;
        console.error('TMDB popular fetch failed:', err);
      });
    return () => controller.abort();
  }, []);
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
          opacity: 0.38,
        }} />
        <span className="home-title-spin" style={{
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
        }}><span style={{ fontSize: 40 }}>{t('home.titlePart1')}</span>{t('home.titlePart2')}<span style={{ fontWeight: 700, fontSize: 29 }}>{t('home.titlePart3')}</span><span style={{ fontWeight: 700, fontSize: 27 }}>{"?"}</span></span>
        <span style={{
          position: "absolute",
          left: 27,
          top: 254,
          width: 343,
          height: 96,
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 15,
          textAlign: "center",
          whiteSpace: "normal",
          lineHeight: "24px",
          letterSpacing: "0.030em",
          color: "rgb(181,174,200)",
        }}>{t('home.subtitle')}</span>
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
          top: 444,
          width: 161,
          height: 24,
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 15,
          whiteSpace: "nowrap",
          lineHeight: "24px",
          letterSpacing: "0.100em",
          color: "rgb(255,255,255)",
        }}>{t('home.quickMatch')}</span>
        <span style={{
          position: "absolute",
          left: 24,
          top: 819,
          width: 243,
          height: 24,
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 15,
          whiteSpace: "nowrap",
          lineHeight: "24px",
          letterSpacing: "0.100em",
          color: "rgb(255,255,255)",
        }}>{t('home.recommendedForYou')}</span>
        <span style={{
          position: "absolute",
          left: 24,
          top: 611,
          width: 151,
          height: 24,
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 15,
          whiteSpace: "nowrap",
          lineHeight: "24px",
          letterSpacing: "0.100em",
          color: "rgb(255,255,255)",
        }}>{t('home.trendingNow')}</span>
        <div style={{
          position: "absolute",
          left: 0,
          top: 488,
          width: 402,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: 28,
        }}>
          {[
            { Icon: Ellipse8, label: t('home.mood'), step: "match" },
            { Icon: Ellipse9, label: t('home.context'), step: "match-context" },
            { Icon: Ellipse10, label: t('home.time'), step: "match-time" },
            { Icon: Ellipse11, label: t('home.platforms'), step: "match-platforms" },
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
          top: 819,
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
          cursor: "pointer",
        }}
        onClick={() => props.onSeeAllRecommended?.()}
        >{t('common.seeAll')}</span>
        <span style={{
          position: "absolute",
          left: 306,
          top: 611,
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
          cursor: "pointer",
        }}
        onClick={() => props.onSeeAllTrending?.()}
        >{t('common.seeAll')}</span>
        <ScrollTrack progress={recommendedProgress} scrollRef={recommendedScrollRef} style={{ left: 27, top: 851, width: 375 }} />
        <div
          ref={recommendedScrollRef}
          className="no-scrollbar"
          onScroll={handleCarouselScroll(setRecommendedProgress)}
          {...recommendedDrag}
          style={{
          position: "absolute",
          left: 27,
          top: 863,
          width: 375,
          height: 125,
          overflowX: "auto",
          overflowY: "hidden",
          cursor: "grab",
          WebkitOverflowScrolling: "touch",
          backgroundColor: "rgb(42,36,56)",
        }}>
          {recommendedMovies.map((movie, i) => (
            <div
              key={movie.id}
              className="selectable-card"
              onClick={() => window.open(movie.tmdbUrl, "_blank", "noopener,noreferrer")}
              style={{
                position: "absolute",
                left: i * 101,
                top: 0,
                width: 88,
                height: 130,
                borderRadius: 8,
                overflow: "hidden",
                cursor: "pointer",
                backgroundColor: "rgba(168,85,247,0.15)",
              }}
            >
              {movie.posterUrl && (
                <img
                  src={movie.posterUrl}
                  alt={movie.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              )}
            </div>
          ))}
        </div>
        <ScrollTrack progress={trendingProgress} scrollRef={trendingScrollRef} style={{ left: 24, top: 643, width: 378 }} />
        <div
          ref={trendingScrollRef}
          className="no-scrollbar"
          onScroll={handleCarouselScroll(setTrendingProgress)}
          {...trendingDrag}
          style={{
          position: "absolute",
          left: 24,
          top: 655,
          width: 378,
          height: 125,
          overflowX: "auto",
          overflowY: "hidden",
          WebkitOverflowScrolling: "touch",
          cursor: "grab",
          backgroundColor: "rgb(7,3,15)",
        }}>
          {trendingMovies.map((movie, i) => (
            <div
              key={movie.id}
              className="selectable-card"
              onClick={() => window.open(movie.tmdbUrl, "_blank", "noopener,noreferrer")}
              style={{
                position: "absolute",
                left: i * 99,
                top: 0,
                width: 88,
                height: 130,
                borderRadius: 8,
                overflow: "hidden",
                cursor: "pointer",
                backgroundColor: "rgba(168,85,247,0.15)",
              }}
            >
              {movie.posterUrl && (
                <img
                  src={movie.posterUrl}
                  alt={movie.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              )}
            </div>
          ))}
        </div>
        <div style={{ position: "absolute", left: 0, top: 988, width: 1, height: 110 }} />
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
