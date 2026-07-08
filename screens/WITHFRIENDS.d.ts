import * as React from 'react';
export interface WITHFRIENDSProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "variant2";
  /** Text content; defaults to "With Friends". */
  text1?: string;
  /** Text content; defaults to "With Friends". */
  text2?: string;
}
export declare const WITHFRIENDS: React.FC<WITHFRIENDSProps>;
export default WITHFRIENDS;
