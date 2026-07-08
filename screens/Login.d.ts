import * as React from 'react';
export interface LoginProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "variant2";
  /** Text content; defaults to "Log in". */
  text1?: string;
}
export declare const Login: React.FC<LoginProps>;
export default Login;
