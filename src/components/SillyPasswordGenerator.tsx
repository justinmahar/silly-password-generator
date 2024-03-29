import 'bootstrap/dist/css/bootstrap.css';
import classNames from 'classnames';
import copy from 'copy-to-clipboard';
import React from 'react';
import { Accordion, Alert, Badge, Button, Card, Col, Container, Form, Row, Stack } from 'react-bootstrap';
import { DivProps } from 'react-html-props';
import { FaGithub, FaStar, FaCheck, FaCopy } from 'react-icons/fa';
import { useMomentaryBool } from 'react-use-precision-timer';
import { analyzePassword, DEFAULT_PASSWORD_OPTIONS, generateSillyPassword } from '../passwords/passwords';
import { RoboQuote } from './RoboQuote';
import { MAX_WORD_COUNT, useSettings } from './settings';

export interface SillyPasswordGeneratorProps extends DivProps {}

export const SillyPasswordGenerator = ({ ...props }: SillyPasswordGeneratorProps) => {
  const [showCopied, toggleShowCopied] = useMomentaryBool(false, 1500);

  const settings = useSettings();

  const [wordCount, setWordCount] = settings.wordCountState;
  const [capitalize, setCapitalize] = settings.capitalizeState;
  const [salt, setSalt] = settings.saltState;

  const options = React.useMemo(() => {
    return {
      capitalize: !!capitalize,
      salt: salt ?? '',
      wordCount: wordCount ?? DEFAULT_PASSWORD_OPTIONS.wordCount,
    };
  }, [capitalize, salt, wordCount]);
  const initialPassword = React.useMemo(() => generateSillyPassword(options), []); // No deps; one-time only.
  const [sillyPassword, setSillyPassword] = React.useState(initialPassword);
  const [shouldGenerate, setShouldGenerate] = React.useState(false);
  const [animationTime, setAnimationTime] = React.useState(new Date().getTime());
  const [shouldAnimate, setShouldAnimate] = React.useState(false);

  const generate = React.useCallback(() => {
    setSillyPassword(generateSillyPassword(options));
  }, [options]);

  const handleGenerateButton = () => {
    setShouldAnimate(true);
    setAnimationTime(new Date().getTime());
    generate();
  };

  const handleCopyButton = () => {
    copy(sillyPassword);
    toggleShowCopied();
  };

  React.useEffect(() => {
    if (shouldGenerate) {
      setShouldGenerate(false);
      generate();
    }
  }, [generate, shouldGenerate]);

  const passwordAnalysis = analyzePassword(sillyPassword);

  let effectiveScore = passwordAnalysis.score;
  // Force a lower score at less than 18 characters
  const isShortPassword = sillyPassword.length < 18;
  if (effectiveScore > 3 && isShortPassword) {
    effectiveScore = 3;
  }

  let strengthVariant = 'danger';
  if (effectiveScore >= 2) {
    strengthVariant = 'warning';
  }
  if (effectiveScore >= 4) {
    strengthVariant = 'success';
  }

  return (
    <div {...props} style={{ ...props.style }}>
      <style>@import url('https://fonts.googleapis.com/css2?family=Underdog&family=Rye&display=swap');</style>
      <style>
        {`
         .bounce { 
            animation-name: bounce; 
            animation-duration: 1s;
         }
         @keyframes bounce { 
            0%, 100% {
              transform: scale(1) rotate(-3deg);
            } 
            20% {
              transform: scale(1.1) rotate(-2deg);
            }
         }
         .shake { 
            animation-name: shake; 
            animation-duration: 0.3s;
         }
         @keyframes shake { 
            0% {
              transform: rotate(0deg);
            }  
            33% {
              transform: rotate(-2deg);
            } 
            67% {
              transform: rotate(2deg);
            } 
            100% {
              transform: rotate(0deg);
            }
         }
         .dip { 
            animation-name: dip; 
            animation-duration: 0.3s;
         }
         @keyframes dip {
            0%, 100% {
              transform: scale(1);
            } 
            20% {
              transform: scale(0.95);
            }
         }
         `}
      </style>
      <div>
        <Container>
          <Row>
            <Col sm={{ span: 10, offset: 1 }} md={{ span: 8, offset: 2 }}>
              <Card className="shadow">
                <Card.Body>
                  <Stack gap={2}>
                    <h1
                      className={`position-relative d-flex flex-column text-center my-3`}
                      style={{
                        fontFamily: "'Underdog', sans-serif",
                        lineHeight: '45px',
                      }}
                    >
                      <div key={`silly-heading-${animationTime}`} className={classNames(shouldAnimate && 'shake')}>
                        Silly
                      </div>
                      <div
                        key={`password-heading-${animationTime}`}
                        className={classNames(
                          shouldAnimate && 'bounce',
                          'position-relative d-flex flex-wrap justify-content-center',
                        )}
                        style={{
                          fontFamily: "'Rye', sans-serif",
                          fontSize: '180%',
                          transform: 'rotate(-3deg)',
                          top: -5,
                        }}
                      >
                        <div>Pass</div>
                        <div>word</div>
                      </div>
                      <div key={`generator-heading-${animationTime}`} className={classNames(shouldAnimate && 'shake')}>
                        Generator
                      </div>
                      <div
                        key={`asterisk-1-heading-${animationTime}`}
                        className={classNames(shouldAnimate && 'shake', 'position-absolute')}
                        style={{ top: 15, left: '30%' }}
                      >
                        *
                      </div>
                      <div
                        key={`asterisk-2-heading-${animationTime}`}
                        className={classNames(shouldAnimate && 'shake', 'position-absolute')}
                        style={{ bottom: 10, left: '70%', transform: 'scaleX(-1)' }}
                      >
                        *
                      </div>
                    </h1>
                    <Alert variant={strengthVariant}>
                      <h5 className="text-center mb-0">Generate silly passwords that are secure and easy to use.</h5>
                    </Alert>
                    <div className="d-flex flex-column gap-2 my-4">
                      <div className="d-flex justify-content-center">
                        <Form.Control
                          placeholder="Generate a silly password, silly!"
                          value={sillyPassword}
                          onChange={(e) => setSillyPassword(e.target.value)}
                          className="d-none d-md-block fs-3 text-center"
                        />
                        <Form.Control
                          as="textarea"
                          rows={2}
                          placeholder="Generate a silly password, silly!"
                          value={sillyPassword}
                          onChange={(e) => setSillyPassword(e.target.value)}
                          className="d-md-none fs-3 text-center"
                        />
                      </div>
                      <div className="d-flex justify-content-center gap-2">
                        <Button
                          key={`generate-button-${animationTime}`}
                          onClick={handleGenerateButton}
                          className={classNames(shouldAnimate && 'dip')}
                        >
                          Generate!
                        </Button>
                        <Button
                          variant="outline-primary"
                          onClick={handleCopyButton}
                          className={classNames(showCopied && 'dip')}
                        >
                          {showCopied ? (
                            <div className="d-flex align-items-center gap-2">
                              <FaCheck />
                              Copy
                            </div>
                          ) : (
                            <div className="d-flex align-items-center gap-2">
                              <FaCopy />
                              Copy
                            </div>
                          )}
                        </Button>
                      </div>
                    </div>
                    <Accordion>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>Options</Accordion.Header>
                        <Accordion.Body className="d-flex flex-column gap-3">
                          <Form.Group controlId="form-group-word-count">
                            <Form.Label className="fw-bold">Number of Words</Form.Label>
                            <div className="d-flex align-items-center gap-2">
                              <Form.Control
                                min={2}
                                max={10}
                                step={1}
                                type="number"
                                style={{ width: 80 }}
                                value={wordCount ?? DEFAULT_PASSWORD_OPTIONS.wordCount}
                                onChange={(e) => {
                                  const newVal = parseInt(e.target.value);
                                  if (!isNaN(newVal)) {
                                    setWordCount(Math.max(1, Math.min(MAX_WORD_COUNT, newVal)));
                                    setShouldGenerate(true);
                                  }
                                }}
                              />
                              <Form.Range
                                min={2}
                                max={10}
                                step={1}
                                value={wordCount ?? DEFAULT_PASSWORD_OPTIONS.wordCount}
                                onChange={(e) => {
                                  const newVal = parseInt(e.target.value);
                                  if (!isNaN(newVal)) {
                                    setWordCount(Math.max(1, Math.min(MAX_WORD_COUNT, newVal)));
                                    setShouldGenerate(true);
                                  }
                                }}
                              />
                            </div>
                          </Form.Group>
                          <div>
                            <Form.Check
                              label="Capitalize"
                              id="capitalize-checkbox"
                              className="user-select-none"
                              checked={!!capitalize}
                              onChange={(e) => {
                                setCapitalize(e.target.checked);
                                setShouldGenerate(true);
                              }}
                            />
                          </div>
                          <Form.Group controlId="form-group-salt">
                            <Form.Label className="fw-bold">🧂 Salt</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Make it salty"
                              value={salt ?? DEFAULT_PASSWORD_OPTIONS.salt}
                              onChange={(e) => {
                                setSalt(e.target.value);
                                setShouldGenerate(true);
                              }}
                            />
                            <Form.Text className="text-muted">
                              Everything is better with a little salt. Your generated password will end with this text.
                              Provide something simple that only you know about. This can also be handy for pesky
                              password requirements that force you to include a number and a symbol.
                            </Form.Text>
                          </Form.Group>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                    <Alert variant={strengthVariant}>
                      <h5 className="mb-4">
                        <div className="d-flex align-items-center gap-2">
                          <Badge
                            bg={strengthVariant}
                            className={classNames(
                              shouldAnimate && 'shake',
                              effectiveScore >= 2 && effectiveScore <= 3 && 'text-black',
                            )}
                            key={`rating-badge-${animationTime}`}
                          >
                            {effectiveScore}/4
                          </Badge>
                          Password Strength
                        </div>
                      </h5>
                      <h6>What does our password cracking robot have to say?</h6>
                      <p>
                        <RoboQuote effectiveScore={effectiveScore} analysis={passwordAnalysis} salt={salt ?? ''} />
                      </p>
                      <Form.Text className="text-muted">
                        Password analysis powered by <a href="https://www.npmjs.com/package/zxcvbn">zxcvbn</a>.
                      </Form.Text>
                    </Alert>
                    <div className="d-flex flex-wrap justify-content-center align-items-center gap-4 mb-2">
                      <div>
                        Inspired by{' '}
                        <a
                          className="text-decoration-none"
                          href="https://xkcd.com/936/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          xkcd
                        </a>
                      </div>
                      <a
                        className="text-decoration-none  d-flex align-items-center gap-1"
                        href="https://github.com/justinmahar/silly-password-generator"
                      >
                        <FaGithub className="text-black" /> View on GitHub
                      </a>
                    </div>
                    <div className="d-flex flex-wrap justify-content-center align-items-center gap-1 mb-2">
                      Love it?
                      <a
                        className="text-decoration-none d-flex align-items-center gap-1"
                        href="https://github.com/justinmahar/silly-password-generator/stargazers"
                      >
                        <FaStar className="text-warning" /> Star It!
                      </a>
                    </div>
                  </Stack>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
