import zxcbvn from 'zxcvbn';
import React from 'react';
import { DivProps } from 'react-html-props';
import { generateSillyPassword } from '../passwords';
import copy from 'copy-to-clipboard';
import { useMomentaryBool } from 'react-use-precision-timer';

export interface SillyPasswordGeneratorProps extends DivProps {}

export const SillyPasswordGenerator = ({ ...props }: SillyPasswordGeneratorProps) => {
  const [sillyPassword, setSillyPassword] = React.useState(generateSillyPassword());
  const [showCopied, toggleShowCopied] = useMomentaryBool(false, 1500);

  const handleGenerateButton = () => {
    const pass = generateSillyPassword();
    setSillyPassword(pass);
  };

  const handleCopyButton = () => {
    copy(sillyPassword);
    toggleShowCopied();
  };

  const passwordAnalysis = zxcbvn(sillyPassword);
  console.log(passwordAnalysis);

  let scoreRating = 'shitty';
  switch (passwordAnalysis.score) {
    case 0:
      scoreRating = 'shitty';
      break;
    case 1:
      scoreRating = 'terrible';
      break;
    case 2:
      scoreRating = 'lame';
      break;
    case 3:
      scoreRating = 'decent';
      break;
    case 4:
      scoreRating = 'rock solid';
      break;
  }

  return (
    <div {...props} style={{ ...props.style }}>
      <div>
        <div>
          Password:{' '}
          <input
            type="text"
            value={sillyPassword}
            onChange={(e) => setSillyPassword(e.target.value)}
            style={{ width: 400 }}
          />
        </div>
        <button onClick={handleGenerateButton}>Generate</button>
        <button onClick={handleCopyButton}>{showCopied ? 'Copied!' : 'Copy'}</button>
      </div>
      <div>
        Password strength:
        <div>
          {passwordAnalysis.score}/4, it would take{' '}
          {passwordAnalysis.crack_times_display.offline_fast_hashing_1e10_per_second} to crack this {scoreRating}{' '}
          password on an ultra fast computer
        </div>
      </div>
    </div>
  );
};
