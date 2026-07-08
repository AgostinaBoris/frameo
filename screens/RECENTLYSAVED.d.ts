import * as React from 'react';
export interface RECENTLYSAVEDProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "variant2";
  /** Text content; defaults to "Saved\n". */
  text1?: string;
}
export declare const RECENTLYSAVED: React.FC<RECENTLYSAVEDProps>;
export default RECENTLYSAVED;
