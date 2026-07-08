import * as React from 'react';
export interface DATENIGHTProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "variant2";
  /** Text content; defaults to "Date Night". */
  text1?: string;
  /** Text content; defaults to "Date Night". */
  text2?: string;
}
export declare const DATENIGHT: React.FC<DATENIGHTProps>;
export default DATENIGHT;
