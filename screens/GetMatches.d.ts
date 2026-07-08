import * as React from 'react';
export interface GetMatchesProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "variant2";
  /** Text content; defaults to "Get matches". */
  text1?: string;
}
export declare const GetMatches: React.FC<GetMatchesProps>;
export default GetMatches;
