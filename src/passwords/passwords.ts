import { capitalize } from 'lodash';
import zxcvbn from 'zxcvbn';
import { allCreatures, attributes } from './words';

export interface SillyPasswordOptions {
  wordCount?: number;
  capitalize?: boolean;
  salt?: string;
}

export const DEFAULT_PASSWORD_OPTIONS = {
  wordCount: 4,
  capitalize: false,
  salt: '',
};

const sources = [attributes, allCreatures];

export const generateSillyPassword = (options?: SillyPasswordOptions): string => {
  const opts = { ...DEFAULT_PASSWORD_OPTIONS, ...options };
  const parts: string[] = [];
  const wordCount = Math.max(1, opts.wordCount);
  for (let i = 0; i < wordCount; i++) {
    const source =
      i === wordCount - 1 ? allCreatures : i === 0 ? attributes : sources[Math.floor(Math.random() * sources.length)];
    parts.push(source[Math.floor(Math.random() * allCreatures.length)]);
  }
  let pass = parts.join(' ').toLowerCase();
  if (opts.capitalize) {
    pass = capitalize(pass);
  }
  if (opts.salt) {
    pass = pass + opts.salt;
  }
  return pass;
};

export const analyzePassword = (sillyPassword: string, userInputs?: string[] | undefined): zxcvbn.ZXCVBNResult => {
  return zxcvbn(sillyPassword, [...sources.flat(), ...(userInputs ?? [])]);
};
