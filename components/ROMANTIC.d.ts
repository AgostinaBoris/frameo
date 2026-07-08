import * as React from 'react';
export interface ROMANTICProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "variant2";
  /** Text content; defaults to "Romantic". */
  text1?: string;
}
export declare const ROMANTIC: React.FC<ROMANTICProps>;
export default ROMANTIC;
