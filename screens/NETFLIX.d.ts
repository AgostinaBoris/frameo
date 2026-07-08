import * as React from 'react';
export interface NETFLIXProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "variant2";
  /** Text content; defaults to "Netflix". */
  text1?: string;
}
export declare const NETFLIX: React.FC<NETFLIXProps>;
export default NETFLIX;
