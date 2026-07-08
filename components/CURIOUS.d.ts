import * as React from 'react';
export interface CURIOUSProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "variant2";
  /** Text content; defaults to "Curious". */
  text1?: string;
}
export declare const CURIOUS: React.FC<CURIOUSProps>;
export default CURIOUS;
