import * as React from 'react';
export interface DISNEYProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "variant2";
  /** Text content; defaults to "Disney+". */
  text1?: string;
}
export declare const DISNEY: React.FC<DISNEYProps>;
export default DISNEY;
