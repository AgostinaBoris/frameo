import * as React from 'react';
export interface THRILLERProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "variant2";
  /** Text content; defaults to "Thriller". */
  text1?: string;
}
export declare const THRILLER: React.FC<THRILLERProps>;
export default THRILLER;
