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
        backgroundColor: "rgb(217,217,217)",
      }} />
    </div>
  );
}
export default Password2;
