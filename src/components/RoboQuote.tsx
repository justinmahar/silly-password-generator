import React from 'react';
import zxcvbn from 'zxcvbn';

export interface RoboQuoteProps {
  effectiveScore: number;
  analysis: zxcvbn.ZXCVBNResult;
}

export const RoboQuote = ({ effectiveScore, analysis }: RoboQuoteProps) => {
  let scoreSentiments = '[thinking...]';
  switch (effectiveScore) {
    case 4:
      scoreSentiments = 'rock solid';
      break;
    case 3:
      scoreSentiments = 'decent';
      break;
    case 2:
      scoreSentiments = 'lame';
      break;
    case 1:
      scoreSentiments = 'terrible';
      break;
    default:
      scoreSentiments = 'painfully bad';
  }

  const makeRoboQuote = (roboStatementElement: JSX.Element) => <>🤖 “{roboStatementElement}”</>;
  const analysisSentiments = (
    <>
      <span className="fw-bold">{analysis.crack_times_display.offline_fast_hashing_1e10_per_second}</span> to crack this{' '}
      <span className="fw-bold">{scoreSentiments}</span> password on an ultra fast computer
    </>
  );
  let robotQuote = makeRoboQuote(<>Awful. It would take {analysisSentiments}.</>);
  if (effectiveScore >= 4) {
    robotQuote = makeRoboQuote(<>Looks great! It would take {analysisSentiments}.</>);
  } else if (effectiveScore >= 3) {
    robotQuote = makeRoboQuote(<>Not the worst I've seen, but it would take {analysisSentiments}.</>);
  } else if (effectiveScore >= 2) {
    robotQuote = makeRoboQuote(<>It's not great. It would take {analysisSentiments}.</>);
  } else if (effectiveScore >= 1) {
    robotQuote = makeRoboQuote(<>Dang, that's a bad one. It would take {analysisSentiments}.</>);
  }

  return robotQuote;
};
