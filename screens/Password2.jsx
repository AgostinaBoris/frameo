// figma node: 13:23 Password
export function Password2(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 352,
      height: 52,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 352,
        height: 52,
        borderRadius: 12,
        backgroundColor: "rgba(139,61,255,0.08)",
        boxShadow: "inset 0 0 0 1px rgba(168,85,247,0.6)",
      }} />
    </div>
  );
}
export default Password2;
