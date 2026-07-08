import * as React from 'react';
export interface AskFrameoProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "variant2";
  /** Text content; defaults to "Ask Frameo". */
  text1?: string;
}
export declare const AskFrameo: React.FC<AskFrameoProps>;
export default AskFrameo;
