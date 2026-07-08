import * as React from 'react';
export interface QUICKBREAKProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "variant2";
  /** Text content; defaults to "Under 30 min,". */
  text1?: string;
  /** Text content; defaults to "Quick Break". */
  text2?: string;
  /** Text content; defaults to "Under 30 min,". */
  text3?: string;
}
export declare const QUICKBREAK: React.FC<QUICKBREAKProps>;
export default QUICKBREAK;
