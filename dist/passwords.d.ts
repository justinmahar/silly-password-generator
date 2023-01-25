import zxcvbn from 'zxcvbn';
export interface SillyPasswordOptions {
    wordCount?: number;
}
export declare const DEFAULT_OPTIONS: {
    wordCount: number;
};
export declare const generateSillyPassword: (options?: SillyPasswordOptions) => string;
export declare const analyzePassword: (sillyPassword: string, userInputs?: string[] | undefined) => zxcvbn.ZXCVBNResult;
