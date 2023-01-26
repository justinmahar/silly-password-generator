import React from 'react';
import { useLocalStorage } from 'react-storage-complete';
import { DEFAULT_PASSWORD_OPTIONS } from '../passwords/passwords';

export const MAX_WORD_COUNT = 20;

const STORAGE_PREFIX = 'silly-password-generator';

export const useSettings = () => {
  const wordCountState = useLocalStorage('wordCount', DEFAULT_PASSWORD_OPTIONS.wordCount, {
    prefix: STORAGE_PREFIX,
  });
  const capitalizeState = useLocalStorage('capitalize', false, { prefix: STORAGE_PREFIX });
  const saltState = useLocalStorage('salt', DEFAULT_PASSWORD_OPTIONS.salt, {
    prefix: STORAGE_PREFIX,
  });

  return React.useMemo(() => {
    return {
      wordCountState,
      capitalizeState,
      saltState,
    };
  }, [capitalizeState, saltState, wordCountState]);
};
