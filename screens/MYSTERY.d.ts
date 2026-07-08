import * as React from 'react';
export interface MYSTERYProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "variant2";
  /** Text content; defaults to "Mystery". */
  text1?: string;
}
export declare const MYSTERY: React.FC<MYSTERYProps>;
export default MYSTERY;
