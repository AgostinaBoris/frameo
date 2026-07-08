import * as React from 'react';
export interface TRENDINGProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "variant2";
  /** Text content; defaults to "Trending". */
  text1?: string;
}
export declare const TRENDING: React.FC<TRENDINGProps>;
export default TRENDING;
