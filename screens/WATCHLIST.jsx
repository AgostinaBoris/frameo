import { useState } from 'react';
import { ALL } from './ALL.jsx';
import { DETAILS } from './DETAILS.jsx';
import { MOVIES } from './MOVIES.jsx';
import { MiArrowUp } from './MiArrowUp.jsx';
import { RECENTLYSAVED } from './RECENTLYSAVED.jsx';
import { SERIES } from './SERIES.jsx';
import { TABBAR } from './TABBAR.jsx';
import { TOPNAV } from './TOPNAV.jsx';

const fontStyle = {
  fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
};

const CARD_SCALE = 1.08;

const WatchlistCard = ({ movie, onDetails }) => (
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
        backgroundColor: "rgb(20,14,32)",
      }}>
        <div className={movie.imgClass} style={{
          position: "absolute",
          left: 1,
          top: 1,
          width: 136,
          height: 214,
          borderRadius: "18px 0px 0px 18px",
          backgroundColor: movie.posterUrl ? "rgb(30,22,46)" : undefined,
          backgroundImage: movie.posterUrl ? `url(${movie.posterUrl})` : undefined,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }} />
        <div style={{
          position: "absolute",
          left: 151,
          top: 9,
          width: 200,
          height: 42,
          overflow: "hidden",
        }}>
          <span style={{
            ...fontStyle,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            fontWeight: 700,
            fontSize: 16,
            lineHeight: "21px",
            letterSpacing: "0.050em",
            color: "rgb(255,255,255)",
          }}>{movie.title}</span>
        </div>
        <div style={{
          position: "absolute",
          left: 152,
          top: 58,
          width: 200,
          height: 100,
          overflow: "hidden",
        }}>
          <span style={{
            ...fontStyle,
            display: "block",
            fontWeight: 700,
            fontSize: 13,
            lineHeight: "25px",
            letterSpacing: "0.020em",
            color: "rgb(248,247,255)",
          }}>{movie.match}</span>
          <span style={{
            ...fontStyle,
            display: "block",
            fontWeight: 700,
            fontSize: 13,
            lineHeight: "18px",
            letterSpacing: "0.020em",
            color: "rgb(248,247,255)",
          }}>{movie.genre}</span>
          <span style={{
            ...fontStyle,
            display: "block",
            marginTop: 4,
            fontWeight: 700,
            fontSize: 13,
            lineHeight: "18px",
            letterSpacing: "0.020em",
            color: "rgb(248,247,255)",
          }}>{movie.platform}</span>
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
          onClick={() => onDetails?.(movie)}
        />
      </div>
    </div>
  </div>
);

// figma node: 326:335 WATCHLIST
export function WATCHLIST(_p = {}) {
  const props = _p;
  const [activeFilter, setActiveFilter] = useState('all');
  const filterStyle = (key) => ({ opacity: activeFilter === key ? 1 : 0.8 });
  const movies = props.movies ?? [];
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
          minHeight: 216,
          display: "flex",
          flexDirection: "column",
          gap: 14,
          justifyContent: "flex-start",
          alignItems: "center",
          flexWrap: "nowrap",
          padding: "0 10px 32px",
          boxSizing: "border-box",
        }}>
          {movies.length === 0 && (
            <span style={{
              ...fontStyle,
              marginTop: 40,
              fontWeight: 600,
              fontSize: 14,
              color: "rgb(138,131,156)",
              textAlign: "center",
            }}>Nothing saved yet — pick something from AI Match or Discover.</span>
          )}
          {movies.map((movie) => (
            <WatchlistCard key={movie.id} movie={movie} onDetails={props.onDetails} />
          ))}
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
