import * as React from 'react';
export interface EmailProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "variant2";
  /** Text content; defaults to "Email". */
  text1?: string;
}
export declare const Email: React.FC<EmailProps>;
export default Email;
