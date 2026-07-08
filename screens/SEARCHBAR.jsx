// figma node: 350:765 SEARCH BAR
export function SEARCHBAR(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 353,
      height: 42,
      borderRadius: 25,
      boxShadow: "inset 0 0 0 1px rgb(168,85,247), 0 0 0 1px rgb(168,85,247)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "4px 16px 9px 15px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <input
        type="text"
        value={props.value}
        onChange={props.onChange}
        placeholder={props.text1 ?? "Search movies, series, genres..."}
        style={{
          flex: 1,
          minWidth: 0,
          border: "none",
          outline: "none",
          background: "transparent",
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 13,
          letterSpacing: "0.020em",
          color: "rgb(248,247,255)",
        }}
      />
      <svg width={17.490} height={17.490} viewBox="0 0 17.490 17.490" fill="none" style={{
        position: "relative",
        width: 17.49,
        height: 17.49,
        flexShrink: 0,
      }}>
        <path d={"M 12.5 11 L 11.71 11 L 11.43 10.73 C 12.444 9.554 13.001 8.053 13 6.5 C 13 5.214 12.619 3.958 11.905 2.889 C 11.19 1.82 10.175 0.987 8.987 0.495 C 7.8 0.003 6.493 -0.126 5.232 0.125 C 3.971 0.376 2.813 0.995 1.904 1.904 C 0.995 2.813 0.376 3.971 0.125 5.232 C -0.126 6.493 0.003 7.8 0.495 8.987 C 0.987 10.175 1.82 11.19 2.889 11.905 C 3.958 12.619 5.214 13 6.5 13 C 8.11 13 9.59 12.41 10.73 11.43 L 11 11.71 L 11 12.5 L 16 17.49 L 17.49 16 L 12.5 11 Z M 6.5 11 C 4.01 11 2 8.99 2 6.5 C 2 4.01 4.01 2 6.5 2 C 8.99 2 11 4.01 11 6.5 C 11 8.99 8.99 11 6.5 11 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
}
export default SEARCHBAR;
