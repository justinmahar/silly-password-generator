/// <reference types="react" />
import zxcvbn from 'zxcvbn';
export interface RoboQuoteProps {
    effectiveScore: number;
    analysis: zxcvbn.ZXCVBNResult;
}
export declare const RoboQuote: ({ effectiveScore, analysis }: RoboQuoteProps) => JSX.Element;
