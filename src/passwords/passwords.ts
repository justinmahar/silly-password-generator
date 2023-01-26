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

export const generateSillyPassword = (options?: SillyPasswordOptions): string => {
  const opts = { ...DEFAULT_PASSWORD_OPTIONS, ...options };
  let adjectives = '';
  for (let i = 0; i < Math.max(1, opts.wordCount) - 1; i++) {
    adjectives += attributes[Math.floor(Math.random() * allCreatures.length)] + ' ';
  }
  const noun = allCreatures[Math.floor(Math.random() * allCreatures.length)];
  let pass = adjectives + noun;
  pass = pass.toLowerCase();
  if (opts.capitalize) {
    pass = capitalize(pass);
  }
  if (opts.salt) {
    pass = pass + opts.salt;
  }
  return pass;
};

export const analyzePassword = (sillyPassword: string, userInputs?: string[] | undefined): zxcvbn.ZXCVBNResult => {
  return zxcvbn(sillyPassword, userInputs);
};
