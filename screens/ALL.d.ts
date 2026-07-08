import * as React from 'react';
export interface ALLProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "variant2";
  /** Text content; defaults to "All". */
  text1?: string;
}
export declare const ALL: React.FC<ALLProps>;
export default ALL;
