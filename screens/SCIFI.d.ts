import * as React from 'react';
export interface SCIFIProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "variant2";
  /** Text content; defaults to "Sci-Fi". */
  text1?: string;
}
export declare const SCIFI: React.FC<SCIFIProps>;
export default SCIFI;
