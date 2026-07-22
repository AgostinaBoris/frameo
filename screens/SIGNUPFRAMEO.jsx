import { useState } from 'react';
import { Email } from './Email.jsx';
import { Password } from './Password.jsx';
import { Login } from './Login.jsx';

// figma node: 1:4 SIGN UP - FRAMEO
export function SIGNUPFRAMEO(_p = {}) {
  const props = _p;
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreed, setAgreed] = useState(false);

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
        top: 80,
        width: 402,
        height: 30,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 20,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        letterSpacing: "0.500em",
      }}>
        <span style={{ color: "rgb(255,255,255)" }}>FRAME</span>
        <span style={{ color: "rgb(192,132,252)" }}>O</span>
      </div>
      <span style={{
        position: "absolute",
        left: 95,
        top: 170,
        width: 212,
        height: 46,
        fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 26,
        whiteSpace: "nowrap",
        lineHeight: "40px",
        letterSpacing: "0.100em",
        color: "rgb(255,255,255)",
      }}>Create account</span>
      <span style={{
        position: "absolute",
        left: 28,
        top: 222,
        width: 349,
        height: 56,
        fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 15,
        textAlign: "center",
        whiteSpace: "normal",
        lineHeight: "24px",
        letterSpacing: "0.050em",
        color: "rgb(255,255,255)",
      }}>Sign up to personalize your recommendations and start discovering what to watch.</span>

      <Email
        style={{
          position: "absolute",
          left: 25,
          top: 315,
          width: 350,
          height: 48,
        }}
        property1={"default"}
        text1={"Full name"}
        type={"text"}
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />
      <Email
        style={{
          position: "absolute",
          left: 25,
          top: 382,
          width: 350,
          height: 48,
        }}
        property1={"default"}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Password
        style={{
          position: "absolute",
          left: 25,
          top: 447,
          width: 350,
          height: 50,
        }}
        property1={"default"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <label style={{
        position: "absolute",
        left: 25,
        top: 507,
        width: 352,
        display: "flex",
        alignItems: "center",
        gap: 10,
        cursor: "pointer",
      }}>
        <input
          type="checkbox"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          style={{ width: 16, height: 16, flexShrink: 0, accentColor: "rgb(168,85,247)" }}
        />
        <span style={{
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 15,
          lineHeight: "16px",
          letterSpacing: "0.100em",
          color: "rgb(181,174,200)",
        }}>I agree to the Terms &amp; Privacy Policy</span>
      </label>

      {props.error && (
        <span style={{
          position: "absolute",
          left: 25,
          top: 540,
          width: 350,
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 13,
          textAlign: "center",
          color: "rgb(248,113,113)",
        }}>{props.error}</span>
      )}
      <Login
        style={{
          position: "absolute",
          left: 61,
          top: 567,
          width: 280,
          cursor: agreed && !props.submitting ? "pointer" : "not-allowed",
          opacity: agreed && !props.submitting ? 1 : 0.5,
        }}
        property1={"default"}
        text1={props.submitting ? "Signing up…" : "Sign up"}
        onClick={() => agreed && !props.submitting && props.onSignUp?.({ fullName, email, password })}
      />

      <span style={{
        position: "absolute",
        left: 60,
        top: 678,
        width: 300,
        height: 21,
        fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 15,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        letterSpacing: "0.050em",
        color: "rgb(248,247,255)",
      }}>Already have an account?</span>
      <span style={{
        position: "absolute",
        left: 150,
        top: 704,
        width: 100,
        height: 21,
        fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 15,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "24px",
        letterSpacing: "0.050em",
        color: "rgb(168,85,247)",
        textDecoration: "underline",
        cursor: "pointer",
      }}
      onClick={() => props.onLogin?.()}
      >Log in</span>
    </div>
  );
}
export default SIGNUPFRAMEO;
