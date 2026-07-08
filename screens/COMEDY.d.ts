import * as React from 'react';
export interface COMEDYProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "variant2";
  /** Text content; defaults to "Comedy". */
  text1?: string;
}
export declare const COMEDY: React.FC<COMEDYProps>;
export default COMEDY;
