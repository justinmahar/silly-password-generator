import zxcvbn from 'zxcvbn';
export interface SillyPasswordOptions {
    wordCount?: number;
    capitalize?: boolean;
    suffixCharacters?: string[];
}
export declare const DEFAULT_PASSWORD_OPTIONS: {
    wordCount: number;
    capitalize: boolean;
    suffixCharacters: string[];
};
export declare const generateSillyPassword: (options?: SillyPasswordOptions) => string;
export declare const analyzePassword: (sillyPassword: string, userInputs?: string[] | undefined) => zxcvbn.ZXCVBNResult;
