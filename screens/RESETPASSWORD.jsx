import { useState } from 'react';
import { Login } from './Login.jsx';
import { Password } from './Password.jsx';
import { useLanguage } from '../src/i18n.jsx';

const fontStyle = {
  fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
};

// New screen: set a new password after arriving via a Supabase password-recovery email link
export function RESETPASSWORD(props = {}) {
  const { t } = useLanguage();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const mismatch = confirmPassword.length > 0 && password !== confirmPassword;
  const canSubmit = password.length >= 6 && password === confirmPassword && !props.submitting;

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
        ...fontStyle,
        position: "absolute",
        left: 51,
        top: 202,
        width: 300,
        height: 46,
        fontWeight: 700,
        fontSize: 26,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "40px",
        letterSpacing: "0.100em",
        color: "rgb(255,255,255)",
      }}>{t('resetPassword.title')}</span>
      <span style={{
        ...fontStyle,
        position: "absolute",
        left: 28,
        top: 259,
        width: 349,
        height: 56,
        fontWeight: 600,
        fontSize: 15,
        textAlign: "center",
        whiteSpace: "normal",
        lineHeight: "24px",
        letterSpacing: "0.050em",
        color: "rgb(255,255,255)",
      }}>{t('resetPassword.subtitle')}</span>

      <Password
        style={{
          position: "absolute",
          left: 25,
          top: 365,
          width: 350,
          height: 50,
        }}
        property1={"default"}
        text1={t('resetPassword.newPassword')}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
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
        text1={t('resetPassword.confirmPassword')}
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      {(props.error || mismatch) && (
        <span style={{
          ...fontStyle,
          position: "absolute",
          left: 25,
          top: 495,
          width: 350,
          fontWeight: 600,
          fontSize: 13,
          textAlign: "center",
          color: "rgb(248,113,113)",
        }}>{props.error || t('resetPassword.mismatch')}</span>
      )}

      <Login
        style={{
          position: "absolute",
          left: 63,
          top: 573,
          width: 280,
          cursor: canSubmit ? "pointer" : "not-allowed",
          opacity: canSubmit ? 1 : 0.5,
        }}
        property1={"default"}
        text1={props.submitting ? t('resetPassword.saving') : t('resetPassword.save')}
        onClick={() => canSubmit && props.onSave?.(password)}
      />
    </div>
  );
}
export default RESETPASSWORD;
