// figma node: 416:739 weui:arrow-filled
export function WeuiArrowFilled(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 12,
      height: 24,
      position: "relative",
      color: "rgb(248,247,255)",
      ...props.style,
    }}>
      <svg width={7.364} height={12.728} viewBox="0 0 7.364 12.728" fill="none" style={{
        position: "absolute",
        left: 3.086,
        top: 5.64,
        width: 7.364,
        height: 12.728,
      }}>
        <path d={"M 7.071 7.071 L 1.414 12.728 L 0 11.314 L 4.95 6.364 L 0 1.414 L 1.414 0 L 7.071 5.657 C 7.258 5.845 7.364 6.099 7.364 6.364 C 7.364 6.629 7.258 6.883 7.071 7.071 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
    </div>
  );
}
export default WeuiArrowFilled;
