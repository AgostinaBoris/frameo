import * as React from 'react';
export interface SERIESProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "variant2";
  /** Text content; defaults to "Series". */
  text1?: string;
}
export declare const SERIES: React.FC<SERIESProps>;
export default SERIES;
