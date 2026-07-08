import * as React from 'react';
export interface MOVIENIGHTProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "variant2";
  /** Text content; defaults to "1-2 hours.". */
  text1?: string;
  /** Text content; defaults to "Movie Night". */
  text2?: string;
  /** Text content; defaults to "1-2 hours.". */
  text3?: string;
}
export declare const MOVIENIGHT: React.FC<MOVIENIGHTProps>;
export default MOVIENIGHT;
