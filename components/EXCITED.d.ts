import * as React from 'react';
export interface EXCITEDProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "variant2";
  /** Text content; defaults to "Excited". */
  text1?: string;
}
export declare const EXCITED: React.FC<EXCITEDProps>;
export default EXCITED;
