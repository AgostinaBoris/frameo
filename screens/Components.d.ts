// Components.d.ts — the complete catalog of the 25 component(s) in
// Components.bundle.js. READ THIS FILE BEFORE USING THE BUNDLE: component
// names are derived from Figma layer names (sanitized to PascalCase,
// deduplicated) and may differ from what the design calls them — the
// "figma layer" comment above each interface maps them back.
// After the bundle <script> loads, every component is a window global
// (e.g. window.ADVENTUROUS) and usable directly in JSX.
import * as React from 'react';

// figma layer: "ADVENTUROUS" (node 126:127)
export interface ADVENTUROUSProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "variant2";
  /** Text content; defaults to "Adventurous". */
  text1?: string;
}

// figma layer: "AI MATCH " (node 109:209)
export interface AIMATCHProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Ask Frameo" (node 84:46)
export interface AskFrameoProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "variant2";
  /** Text content; defaults to "Ask Frameo". */
  text1?: string;
}

// figma layer: "boxicons:search" (node 181:318)
export interface BoxiconsSearchProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "CURIOUS" (node 126:115)
export interface CURIOUSProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "variant2";
  /** Text content; defaults to "Curious". */
  text1?: string;
}

// figma layer: "Continue" (node 118:73)
export interface ContinueProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "variant2";
  /** Text content; defaults to "Continue". */
  text1?: string;
}

// figma layer: "EXCITED" (node 126:107)
export interface EXCITEDProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "variant2";
  /** Text content; defaults to "Excited". */
  text1?: string;
}

// figma layer: "Ellipse 10" (node 439:562)
export interface Ellipse10Props {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "variant2";
}

// figma layer: "Ellipse 11" (node 439:566)
export interface Ellipse11Props {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "variant2";
}

// figma layer: "Ellipse 8" (node 439:554)
export interface Ellipse8Props {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "variant2";
}

// figma layer: "Ellipse 9" (node 439:558)
export interface Ellipse9Props {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "variant2";
}

// figma layer: "FOCUSED" (node 126:99)
export interface FOCUSEDProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "variant2";
  /** Text content; defaults to "Focused". */
  text1?: string;
}

// figma layer: "HOME - FRAMEO" (node 99:95)
export interface HOMEFRAMEOProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "iconoir:bright-star" (node 99:110)
export interface IconoirBrightStarProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "LOGO NAV" (node 74:29)
export interface LOGONAVProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "material-symbols:bookmark-outline" (node 99:118)
export interface MaterialSymbolsBookmarkOutlineProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "material-symbols:home-outline-rounded" (node 99:107)
export interface MaterialSymbolsHomeOutlineRoundedProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "ONBOARDING - FRAMEO" (node 1:2)
export interface ONBOARDINGFRAMEOProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "PROFILE" (node 74:23)
export interface PROFILEProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "RELAXED" (node 126:119)
export interface RELAXEDProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "variant2";
  /** Text content; defaults to "Relaxed". */
  text1?: string;
}

// figma layer: "ROMANTIC" (node 126:123)
export interface ROMANTICProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "variant2";
  /** Text content; defaults to "Romantic". */
  text1?: string;
}

// figma layer: "SAD" (node 126:111)
export interface SADProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "variant2";
  /** Text content; defaults to "Sad". */
  text1?: string;
}

// figma layer: "STRESSED" (node 126:103)
export interface STRESSEDProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "variant2";
  /** Text content; defaults to "Stressed". */
  text1?: string;
}

// figma layer: "TAB BAR" (node 99:123)
export interface TABBARProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Home". */
  text1?: string;
  /** Text content; defaults to "Discover". */
  text2?: string;
  /** Text content; defaults to "AI Match". */
  text3?: string;
  /** Text content; defaults to "Watchlist". */
  text4?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon4?: React.ReactNode;
}

// figma layer: "TOP NAV" (node 109:219)
export interface TOPNAVProps {
  className?: string;
  style?: React.CSSProperties;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

declare const ADVENTUROUS: React.FC<ADVENTUROUSProps>;
declare const AIMATCH: React.FC<AIMATCHProps>;
declare const AskFrameo: React.FC<AskFrameoProps>;
declare const BoxiconsSearch: React.FC<BoxiconsSearchProps>;
declare const CURIOUS: React.FC<CURIOUSProps>;
declare const Continue: React.FC<ContinueProps>;
declare const EXCITED: React.FC<EXCITEDProps>;
declare const Ellipse10: React.FC<Ellipse10Props>;
declare const Ellipse11: React.FC<Ellipse11Props>;
declare const Ellipse8: React.FC<Ellipse8Props>;
declare const Ellipse9: React.FC<Ellipse9Props>;
declare const FOCUSED: React.FC<FOCUSEDProps>;
declare const HOMEFRAMEO: React.FC<HOMEFRAMEOProps>;
declare const IconoirBrightStar: React.FC<IconoirBrightStarProps>;
declare const LOGONAV: React.FC<LOGONAVProps>;
declare const MaterialSymbolsBookmarkOutline: React.FC<MaterialSymbolsBookmarkOutlineProps>;
declare const MaterialSymbolsHomeOutlineRounded: React.FC<MaterialSymbolsHomeOutlineRoundedProps>;
declare const ONBOARDINGFRAMEO: React.FC<ONBOARDINGFRAMEOProps>;
declare const PROFILE: React.FC<PROFILEProps>;
declare const RELAXED: React.FC<RELAXEDProps>;
declare const ROMANTIC: React.FC<ROMANTICProps>;
declare const SAD: React.FC<SADProps>;
declare const STRESSED: React.FC<STRESSEDProps>;
declare const TABBAR: React.FC<TABBARProps>;
declare const TOPNAV: React.FC<TOPNAVProps>;
declare global {
  interface Window {
    ADVENTUROUS: React.FC<ADVENTUROUSProps>;
    AIMATCH: React.FC<AIMATCHProps>;
    AskFrameo: React.FC<AskFrameoProps>;
    BoxiconsSearch: React.FC<BoxiconsSearchProps>;
    CURIOUS: React.FC<CURIOUSProps>;
    Continue: React.FC<ContinueProps>;
    EXCITED: React.FC<EXCITEDProps>;
    Ellipse10: React.FC<Ellipse10Props>;
    Ellipse11: React.FC<Ellipse11Props>;
    Ellipse8: React.FC<Ellipse8Props>;
    Ellipse9: React.FC<Ellipse9Props>;
    FOCUSED: React.FC<FOCUSEDProps>;
    HOMEFRAMEO: React.FC<HOMEFRAMEOProps>;
    IconoirBrightStar: React.FC<IconoirBrightStarProps>;
    LOGONAV: React.FC<LOGONAVProps>;
    MaterialSymbolsBookmarkOutline: React.FC<MaterialSymbolsBookmarkOutlineProps>;
    MaterialSymbolsHomeOutlineRounded: React.FC<MaterialSymbolsHomeOutlineRoundedProps>;
    ONBOARDINGFRAMEO: React.FC<ONBOARDINGFRAMEOProps>;
    PROFILE: React.FC<PROFILEProps>;
    RELAXED: React.FC<RELAXEDProps>;
    ROMANTIC: React.FC<ROMANTICProps>;
    SAD: React.FC<SADProps>;
    STRESSED: React.FC<STRESSEDProps>;
    TABBAR: React.FC<TABBARProps>;
    TOPNAV: React.FC<TOPNAVProps>;
  }
}
