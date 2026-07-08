import * as React from 'react';
export interface ROMANCEProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "variant2";
  /** Text content; defaults to "Romance". */
  text1?: string;
}
export declare const ROMANCE: React.FC<ROMANCEProps>;
export default ROMANCE;
