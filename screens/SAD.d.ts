import * as React from 'react';
export interface SADProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "variant2";
  /** Text content; defaults to "Sad". */
  text1?: string;
}
export declare const SAD: React.FC<SADProps>;
export default SAD;
