import * as React from 'react';
export interface DETAILSProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "variant2";
  /** Text content; defaults to "Details". */
  text1?: string;
}
export declare const DETAILS: React.FC<DETAILSProps>;
export default DETAILS;
