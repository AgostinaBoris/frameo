import * as React from 'react';
export interface SHORTWATCHProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "variant2";
  /** Text content; defaults to "30-60 min.". */
  text1?: string;
  /** Text content; defaults to "Short Watch". */
  text2?: string;
  /** Text content; defaults to "30-60 min.". */
  text3?: string;
}
export declare const SHORTWATCH: React.FC<SHORTWATCHProps>;
export default SHORTWATCH;
