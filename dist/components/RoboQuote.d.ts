/// <reference types="react" />
import zxcvbn from 'zxcvbn';
export interface RoboQuoteProps {
    effectiveScore: number;
    analysis: zxcvbn.ZXCVBNResult;
    salt?: string;
}
export declare const RoboQuote: ({ effectiveScore, analysis, salt }: RoboQuoteProps) => JSX.Element;
