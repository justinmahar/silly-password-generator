import { capitalize } from 'lodash';
import zxcvbn from 'zxcvbn';
import { allCreatures, attributes } from './components/words';

export interface SillyPasswordOptions {
  wordCount?: number;
}

export const DEFAULT_OPTIONS = {
  wordCount: 4,
};

export const generateSillyPassword = (options?: SillyPasswordOptions): string => {
  const opts = { ...DEFAULT_OPTIONS, ...options };
  let adjectives = '';
  for (let i = 0; i < Math.max(1, opts.wordCount) - 1; i++) {
    adjectives += attributes[Math.floor(Math.random() * allCreatures.length)] + ' ';
  }
  const noun = allCreatures[Math.floor(Math.random() * allCreatures.length)];
  const pass = adjectives + noun + '!';
  return capitalize(pass.toLowerCase());
};

export const analyzePassword = (sillyPassword: string, userInputs?: string[] | undefined): zxcvbn.ZXCVBNResult => {
  return zxcvbn(sillyPassword, userInputs);
};
