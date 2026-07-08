import * as React from 'react';
export interface PRIMEVIDEOProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "variant2";
  /** Text content; defaults to "Prime Video". */
  text1?: string;
}
export declare const PRIMEVIDEO: React.FC<PRIMEVIDEOProps>;
export default PRIMEVIDEO;
