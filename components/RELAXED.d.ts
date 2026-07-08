import * as React from 'react';
export interface RELAXEDProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "variant2";
  /** Text content; defaults to "Relaxed". */
  text1?: string;
}
export declare const RELAXED: React.FC<RELAXEDProps>;
export default RELAXED;
