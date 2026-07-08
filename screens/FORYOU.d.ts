import * as React from 'react';
export interface FORYOUProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "variant2";
  /** Text content; defaults to "For you". */
  text1?: string;
}
export declare const FORYOU: React.FC<FORYOUProps>;
export default FORYOU;
