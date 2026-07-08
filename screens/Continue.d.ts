import * as React from 'react';
export interface ContinueProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "variant2";
  /** Text content; defaults to "Continue". */
  text1?: string;
}
export declare const Continue: React.FC<ContinueProps>;
export default Continue;
