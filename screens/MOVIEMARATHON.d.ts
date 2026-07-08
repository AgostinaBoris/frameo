import * as React from 'react';
export interface MOVIEMARATHONProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "variant2";
  /** Text content; defaults to "Movie Marathon". */
  text1?: string;
  /** Text content; defaults to "Movie Marathon". */
  text2?: string;
}
export declare const MOVIEMARATHON: React.FC<MOVIEMARATHONProps>;
export default MOVIEMARATHON;
