import * as React from 'react';
export interface TABBARProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Home". */
  text1?: string;
  /** Text content; defaults to "Discover". */
  text2?: string;
  /** Text content; defaults to "AI Match". */
  text3?: string;
  /** Text content; defaults to "Watchlist". */
  text4?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon4?: React.ReactNode;
}
export declare const TABBAR: React.FC<TABBARProps>;
export default TABBAR;
