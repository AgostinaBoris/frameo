import * as React from 'react';
export interface SOLONIGHTProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "variant2";
  /** Text content; defaults to "Solo Night". */
  text1?: string;
  /** Text content; defaults to "Solo Night". */
  text2?: string;
}
export declare const SOLONIGHT: React.FC<SOLONIGHTProps>;
export default SOLONIGHT;
