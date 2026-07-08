import * as React from 'react';
export interface ACTIONProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "variant2";
  /** Text content; defaults to "Action". */
  text1?: string;
}
export declare const ACTION: React.FC<ACTIONProps>;
export default ACTION;
