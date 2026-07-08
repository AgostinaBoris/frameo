import * as React from 'react';
export interface SEARCHBARProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Search movies, series, genres... ". */
  text1?: string;
}
export declare const SEARCHBAR: React.FC<SEARCHBARProps>;
export default SEARCHBAR;
