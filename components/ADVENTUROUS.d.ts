import * as React from 'react';
export interface ADVENTUROUSProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "variant2";
  /** Text content; defaults to "Adventurous". */
  text1?: string;
}
export declare const ADVENTUROUS: React.FC<ADVENTUROUSProps>;
export default ADVENTUROUS;
