import FRAMEO from "./FRAMEO/FRAMEO.jsx";
import Property1Default2 from "/07-Design-System-Components/components/Property1Default2/Property1Default2.jsx";
import Property1Default3 from "/07-Design-System-Components/components/Property1Default3/Property1Default3.jsx";
import Login from "./Login/Login.jsx";
import ForgotPassword from "./ForgotPassword/ForgotPassword.jsx";

// figma node: 1:3 (FRAME) "LOG IN - FRAMEO"
export default function LOGINFRAMEO() {
  return (
    <div data-name={"LOG IN - FRAMEO"} style={{
      position: "relative",
      width: 402,
      height: 874,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
    }}>
      {[
        {  },
        { fRAMEOText: "Welcome back" },
        { fRAMEOText: "Log in to continue and get personalized recommendations just for you." },
      ].map((item, i) => (
        <FRAMEO key={i} {...item} />
      ))} {/* 3× → /01-Wireframes/LOG-IN---FRAMEO/FRAMEO/FRAMEO.jsx */}
      {[
        {  },
        { loginSlot: Property1Default2 },
        { loginSlot: Property1Default3 },
      ].map((item, i) => (
        <Login key={i} {...item} />
      ))} {/* 3× → /01-Wireframes/LOG-IN---FRAMEO/Login/Login.jsx */}
      {[
        {  },
        { forgotPasswordText: "Don’t have an account?" },
        { forgotPasswordText: "Sign up" },
      ].map((item, i) => (
        <ForgotPassword key={i} {...item} />
      ))} {/* 3× → /01-Wireframes/LOG-IN---FRAMEO/ForgotPassword/ForgotPassword.jsx */}
    </div>
  );
}
