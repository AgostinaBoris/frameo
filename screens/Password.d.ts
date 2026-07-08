import * as React from 'react';
export interface PasswordProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "variant2";
  /** Text content; defaults to "Password". */
  text1?: string;
}
export declare const Password: React.FC<PasswordProps>;
export default Password;
