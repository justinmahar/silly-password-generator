import { capitalize } from 'lodash';
import zxcvbn from 'zxcvbn';
import { allCreatures, attributes } from './components/words';

export interface SillyPasswordOptions {
  wordCount?: number;
  capitalize?: boolean;
  suffixCharacters?: string[];
}

export const DEFAULT_OPTIONS = {
  wordCount: 4,
  capitalize: true,
  suffixCharacters: ['!'],
};

export const generateSillyPassword = (options?: SillyPasswordOptions): string => {
  const opts = { ...DEFAULT_OPTIONS, ...options };
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
  if (opts.suffixCharacters.length > 0) {
    pass = pass + opts.suffixCharacters[Math.floor(Math.random() * opts.suffixCharacters.length)];
  }
  return pass.toLowerCase();
};

export const analyzePassword = (sillyPassword: string, userInputs?: string[] | undefined): zxcvbn.ZXCVBNResult => {
  return zxcvbn(sillyPassword, userInputs);
};
