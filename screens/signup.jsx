import FRAMEO from "./FRAMEO/FRAMEO.jsx";
import Property1Default from "/01-Wireframes/components/Property1Default/Property1Default.jsx";
import Property1Default2 from "/07-Design-System-Components/components/Property1Default2/Property1Default2.jsx";
import Property1Default3 from "/07-Design-System-Components/components/Property1Default3/Property1Default3.jsx";
import Property1Default7 from "/05-Design-System-Buttons/components/Property1Default7/Property1Default7.jsx";

// figma node: 1:4 (FRAME) "SIGN UP"
export default function SIGNUP() {
  return (
    <div data-name={"SIGN UP"} style={{
      position: "relative",
      width: 402,
      height: 874,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
    }}>
      {[
        {  },
        { fRAMEOText: "Create account" },
        { fRAMEOText: "Sign up to personalize your recommendations and start discovering what to watch." },
        { fRAMEOText: "Already have an account?" },
        { fRAMEOText: "Log in" },
      ].map((item, i) => (
        <FRAMEO key={i} {...item} />
      ))} {/* 5× → /01-Wireframes/SIGN-UP/FRAMEO/FRAMEO.jsx */}
      <Property1Default data-name={"Full name"} data-component={"Full name"} style={{
          position: "absolute",
          left: 24,
          top: 384,
          width: 350,
          height: 50,
        }} /> {/* → /07-Design-System-Components/components/Property1Default/Property1Default.jsx */}
      <Property1Default2 data-name={"Email"} data-component={"Email"} style={{
          position: "absolute",
          left: 24,
          top: 451,
          width: 350,
          height: 48,
        }} /> {/* → /07-Design-System-Components/components/Property1Default2/Property1Default2.jsx */}
      <Property1Default3 data-name={"Password"} data-component={"Password"} style={{
          position: "absolute",
          left: 24,
          top: 516,
          width: 350,
          height: 50,
        }} /> {/* → /07-Design-System-Components/components/Property1Default3/Property1Default3.jsx */}
      <div style={{
        position: "absolute",
        left: 37,
        top: 576,
        width: 276,
        height: 41,
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "10px 10px 10px 10px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <div style={{
          position: "relative",
          height: 21,
          overflow: "hidden",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span data-name={"I agree to the Terms & Privacy Policy"} style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 256,
            height: 21,
            fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "16px",
            letterSpacing: "0.100em",
            color: "rgb(181,174,200)",
          }}>I agree to the Terms & Privacy Policy</span>
        </div>
      </div>
      <Property1Default7 data-name={"Sign up"} data-component={"Sign up"}
        style={{
          position: "absolute",
          left: 61,
          top: 657,
          width: 280,
          height: 60,
        }}
        /* property1: prototypeInteractions */
      /> {/* → /05-Design-System-Buttons/components/Property1Default7/Property1Default7.jsx */}
      <Property1Default data-name={"Input"} data-component={"Input"} style={{
          position: "absolute",
          left: 32,
          top: 587,
          width: 16,
          height: 16,
        }} /> {/* → /01-Wireframes/components/Property1Default/Property1Default.jsx */}
    </div>
  );
}
