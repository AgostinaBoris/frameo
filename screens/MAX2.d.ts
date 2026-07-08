import * as React from 'react';
export interface MAX2Props {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "variant2";
  /** Text content; defaults to "Max\n". */
  text1?: string;
}
export declare const MAX2: React.FC<MAX2Props>;
export default MAX2;
