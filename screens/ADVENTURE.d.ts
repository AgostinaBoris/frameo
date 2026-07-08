import * as React from 'react';
export interface ADVENTUREProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "variant2";
  /** Text content; defaults to "Adventure". */
  text1?: string;
}
export declare const ADVENTURE: React.FC<ADVENTUREProps>;
export default ADVENTURE;
