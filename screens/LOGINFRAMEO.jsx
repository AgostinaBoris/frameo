import { useState } from 'react';
import { Email } from './Email.jsx';
import { Login } from './Login.jsx';
import { Password } from './Password.jsx';
import { useLanguage } from '../src/i18n.jsx';

// figma node: 1:3 LOG IN - FRAMEO
export function LOGINFRAMEO(_p = {}) {
  const props = _p;
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
        top: 202,
        width: 212,
        height: 46,
        fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 26,
        whiteSpace: "nowrap",
        lineHeight: "40px",
        letterSpacing: "0.100em",
        color: "rgb(255,255,255)",
      }}>{t('login.welcomeBack')}</span>
      <span style={{
        position: "absolute",
        left: 28,
        top: 259,
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
      }}>{t('login.subtitle')}</span>
      {(props.error || props.message) && (
        <span style={{
          position: "absolute",
          left: 25,
          top: 545,
          width: 350,
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 13,
          textAlign: "center",
          color: props.error ? "rgb(248,113,113)" : "rgb(192,132,252)",
        }}>{props.error || props.message}</span>
      )}
      <Login
        style={{
          position: "absolute",
          left: 63,
          top: 573,
          width: 280,
          cursor: props.submitting ? "default" : "pointer",
          opacity: props.submitting ? 0.6 : 1,
        }}
        property1={"default"}
        text1={props.submitting ? t('login.loggingIn') : undefined}
        onClick={() => !props.submitting && props.onLogin?.({ email, password })}
      />
      <Email
        style={{
          position: "absolute",
          left: 25,
          top: 365,
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
          top: 430,
          width: 350,
          height: 50,
        }}
        property1={"default"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <span style={{
        position: "absolute",
        left: 242,
        top: 502,
        width: 132,
        height: 21,
        fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "16px",
        letterSpacing: "0.050em",
        color: "rgb(255,255,255)",
        textDecoration: "underline",
        cursor: "pointer",
      }}
      onClick={() => props.onForgotPassword?.(email)}
      >{t('login.forgotPassword')}</span>
      <span style={{
        position: "absolute",
        left: 75,
        top: 678,
        width: 251,
        height: 21,
        fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 15,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        letterSpacing: "0.050em",
        color: "rgb(248,247,255)",
      }}>{t('login.noAccount')}</span>
      <span style={{
        position: "absolute",
        left: 165,
        top: 704,
        width: 72,
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
      onClick={() => props.onSignUp?.()}
      >{t('login.signUp')}</span>
    </div>
  );
}
export default LOGINFRAMEO;
