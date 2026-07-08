import * as React from 'react';
export interface HAVETIMEProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "variant2";
  /** Text content; defaults to "2+ hours.". */
  text1?: string;
  /** Text content; defaults to "I Have Time". */
  text2?: string;
  /** Text content; defaults to "2+ hours.". */
  text3?: string;
}
export declare const HAVETIME: React.FC<HAVETIMEProps>;
export default HAVETIME;
