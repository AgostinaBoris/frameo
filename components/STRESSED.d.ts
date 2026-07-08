import * as React from 'react';
export interface STRESSEDProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "variant2";
  /** Text content; defaults to "Stressed". */
  text1?: string;
}
export declare const STRESSED: React.FC<STRESSEDProps>;
export default STRESSED;
