import * as React from 'react';
export interface MOVIESProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "variant2";
  /** Text content; defaults to "Movies". */
  text1?: string;
}
export declare const MOVIES: React.FC<MOVIESProps>;
export default MOVIES;
