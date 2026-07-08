import * as React from 'react';
export interface FAMILYTIMEProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "variant2";
  /** Text content; defaults to "Family Time". */
  text1?: string;
  /** Text content; defaults to "Family Time". */
  text2?: string;
}
export declare const FAMILYTIME: React.FC<FAMILYTIMEProps>;
export default FAMILYTIME;
