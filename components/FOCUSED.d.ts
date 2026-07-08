import * as React from 'react';
export interface FOCUSEDProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "variant2";
  /** Text content; defaults to "Focused". */
  text1?: string;
}
export declare const FOCUSED: React.FC<FOCUSEDProps>;
export default FOCUSED;
