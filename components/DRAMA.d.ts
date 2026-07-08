import * as React from 'react';
export interface DRAMAProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "variant2";
  /** Text content; defaults to "Drama". */
  text1?: string;
}
export declare const DRAMA: React.FC<DRAMAProps>;
export default DRAMA;
