import * as React from 'react';
export interface BACKGROUNDWATCHProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "variant2";
  /** Text content; defaults to "Background Watch". */
  text1?: string;
}
export declare const BACKGROUNDWATCH: React.FC<BACKGROUNDWATCHProps>;
export default BACKGROUNDWATCH;
