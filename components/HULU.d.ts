import * as React from 'react';
export interface HULUProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "variant2";
  /** Text content; defaults to "Hulu". */
  text1?: string;
}
export declare const HULU: React.FC<HULUProps>;
export default HULU;
