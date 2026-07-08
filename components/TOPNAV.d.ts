import * as React from 'react';
export interface TOPNAVProps {
  className?: string;
  style?: React.CSSProperties;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const TOPNAV: React.FC<TOPNAVProps>;
export default TOPNAV;
