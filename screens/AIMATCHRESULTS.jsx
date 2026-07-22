import { useEffect, useState } from 'react';
import { AIAdvent } from './AIAdvent.jsx';
import { AIMovieNight2 } from './AIMovieNight2.jsx';
import { DETAILS } from './DETAILS.jsx';
import { MiArrowUp } from './MiArrowUp.jsx';
import { TABBAR } from './TABBAR.jsx';
import { TOPNAV } from './TOPNAV.jsx';

const MOOD_LABEL = {
  relaxed: 'Relaxed', romantic: 'Romantic', curious: 'Curious', focused: 'Focused',
  sad: 'Sad', excited: 'Excited', adventurous: 'Adventurous', stressed: 'Stressed',
};
const CONTEXT_LABEL = {
  solo: 'Solo night', date: 'Date night', family: 'Family time',
  friends: 'With friends', background: 'Background watch', marathon: 'Movie marathon',
};

const ResultCard = ({ posterUrl, title, match, type, tag1, tag2, onDetails }) => (
  <div className="selectable-card" style={{
    position: "relative",
    height: 210,
    borderRadius: 18,
    overflow: "hidden",
    backgroundColor: "rgb(20,14,32)",
    boxShadow: "inset 0 0 0 1px rgba(168,85,247,0.35)",
    display: "flex",
    flexDirection: "row",
    alignSelf: "stretch",
    flexShrink: 0,
  }}>
    <div style={{
      width: 145,
      height: 210,
      flexShrink: 0,
      backgroundColor: "rgb(30,22,46)",
      backgroundImage: posterUrl ? `url(${posterUrl})` : undefined,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }} />
    <div style={{
      flex: 1,
      minWidth: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 12,
      padding: "0 16px",
      boxSizing: "border-box",
      textAlign: "center",
    }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={{
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 18,
          lineHeight: "22px",
          letterSpacing: "0.020em",
          color: "rgb(255,255,255)",
        }}>{title}</div>
        <div style={{
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 13,
          marginTop: 4,
          color: "rgb(181,174,200)",
        }}>{match}{type ? ` • ${type === 'series' ? 'Series' : 'Movie'}` : ''}</div>
      </div>
      <div style={{ display: "flex", flexDirection: "row", gap: 10, flexWrap: "wrap", justifyContent: "center" }}>
        {tag1 && <AIAdvent style={{ position: "relative" }} property1={"default"} text1={tag1} />}
        {tag2 && <AIMovieNight2 style={{ position: "relative" }} property1={"default"} text1={tag2} />}
      </div>
      <DETAILS style={{ position: "relative", marginTop: 8, width: 124, flexShrink: 0 }} property1={"default"} onClick={onDetails} />
    </div>
  </div>
);

// figma node: 278:307 AI MATCH RESULTS
export function AIMATCHRESULTS(_p = {}) {
  const props = _p;
  const answers = props.answers ?? {};
  const [status, setStatus] = useState('loading');
  const [picks, setPicks] = useState([]);

  useEffect(() => {
    let cancelled = false;
    setStatus('loading');
    fetch('/api/ai-match', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(answers),
    })
      .then((res) => {
        if (!res.ok) throw new Error(`ai-match request failed: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (cancelled) return;
        setPicks(data.picks ?? []);
        setStatus((data.picks ?? []).length ? 'ready' : 'empty');
      })
      .catch((err) => {
        if (cancelled) return;
        console.error('AI match failed:', err);
        setStatus('error');
      });
    return () => { cancelled = true; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [answers.mood, answers.context, answers.time, JSON.stringify(answers.platforms)]);

  const moodTag = MOOD_LABEL[answers.mood];
  const contextTag = CONTEXT_LABEL[answers.context];

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
        height: 694,
        overflowY: "auto",
        overflowX: "hidden",
        WebkitOverflowScrolling: "touch",
        backgroundColor: "rgb(7,3,15)",
      }}>
        <span style={{
          position: "absolute",
          left: 29,
          top: 110,
          width: 344,
          height: 25,
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 14,
          textAlign: "center",
          whiteSpace: "normal",
          lineHeight: "18px",
          letterSpacing: "0.050em",
          color: "rgb(255,255,255)",
        }}>
          {status === 'loading' && "Frameo is thinking..."}
          {status === 'ready' && "We found the best picks for your night."}
          {status === 'empty' && "No matches found — try different answers."}
          {status === 'error' && "Something went wrong. Please try again."}
        </span>
        <div style={{
          position: "absolute",
          left: 23,
          top: 49,
          width: 259,
          height: 40,
          overflow: "hidden",
        }}>
          <div
            className="tab-icon-wrap"
            style={{ position: "absolute", left: 0, top: 0, width: 28, height: 28, cursor: "pointer" }}
            onClick={props.onHome}
          >
            <MiArrowUp style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 28,
                height: 28,
                transform: "matrix(0.000,-1,1,0.000,0,34)",
                transformOrigin: "0 0",
              }}
            />
          </div>
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
          gap: 20,
          alignItems: "stretch",
          flexWrap: "nowrap",
        }}>
          {status === 'loading' && (
            <div className="crystal-ball-ring" style={{
              width: 64,
              height: 64,
              borderRadius: "50%",
              border: "3px solid rgba(168,85,247,0.35)",
              borderTopColor: "rgb(192,132,252)",
              margin: "40px auto",
            }} />
          )}
          {picks.map((movie) => (
            <ResultCard
              key={`${movie.type}-${movie.id}`}
              posterUrl={movie.posterUrl}
              title={movie.title}
              match={`${movie.matchPercent}% Match`}
              type={movie.type}
              tag1={moodTag}
              tag2={contextTag}
              onDetails={() => props.onDetails?.({
                id: movie.id,
                type: movie.type,
                title: movie.title,
                posterUrl: movie.posterUrl,
                match: `${movie.matchPercent}% Match`,
                genre: `${movie.type === 'series' ? 'Series' : 'Movie'} • ${movie.year}`,
                platform: "Check availability on TMDB",
                watchUrl: movie.tmdbUrl,
                description: movie.overview,
                whyMatch: movie.whyMatch,
              })}
            />
          ))}
        </div>
        <div style={{ position: "absolute", left: 0, top: 826, width: 1, height: 60 }} />
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
export default AIMATCHRESULTS;
