import * as React from 'react';
export interface AIAdventProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "variant2";
  /** Text content; defaults to "Adventurous". */
  text1?: string;
}
export declare const AIAdvent: React.FC<AIAdventProps>;
export default AIAdvent;
