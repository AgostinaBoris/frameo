import * as React from 'react';
export interface APPLETVProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "variant2";
  /** Text content; defaults to "Apple Tv+". */
  text1?: string;
}
export declare const APPLETV: React.FC<APPLETVProps>;
export default APPLETV;
