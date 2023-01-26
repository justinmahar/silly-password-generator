import { useLocalStorage } from 'react-storage-complete';
import classNames from 'classnames';
import { Accordion, Alert, Badge, Button, Card, Col, Container, Form, Row, Spinner, Stack } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import copy from 'copy-to-clipboard';
import React from 'react';
import { DivProps } from 'react-html-props';
import { useMomentaryBool } from 'react-use-precision-timer';
import zxcbvn from 'zxcvbn';
import { generateSillyPassword } from '../passwords';

export interface SillyPasswordGeneratorProps extends DivProps {}

export const SillyPasswordGenerator = ({ ...props }: SillyPasswordGeneratorProps) => {
  const [showCopied, toggleShowCopied] = useMomentaryBool(false, 1500);
  const [thinking, toggleThinking] = useMomentaryBool(false, 300);

  const [wordCount, setWordCount] = useLocalStorage('wordCount', 4, { prefix: STORAGE_PREFIX });
  const [capitalize, setCapitalize] = useLocalStorage('capitalize', false, { prefix: STORAGE_PREFIX });
  const [endingPunctuation, setEndingPunctuation] = useLocalStorage('endingPunctuation', '!', {
    prefix: STORAGE_PREFIX,
  });
  const options = React.useMemo(() => {
    return {
      capitalize: !!capitalize,
      suffixCharacters: [...new Set((endingPunctuation ?? '').split(''))],
      wordCount: wordCount ?? 4,
    };
  }, [capitalize, endingPunctuation, wordCount]);
  const initialPassword = React.useMemo(() => generateSillyPassword(options), []); // No deps; one-time only.
  const [sillyPassword, setSillyPassword] = React.useState(initialPassword);
  const [shouldGenerate, setShouldGenerate] = React.useState(false);

  const generate = React.useCallback(() => {
    setSillyPassword(generateSillyPassword(options));
    toggleThinking();
  }, [options, toggleThinking]);

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

  const passwordAnalysis = zxcbvn(sillyPassword);

  let scoreSentiments = 'really shitty';
  switch (passwordAnalysis.score) {
    case 1:
      scoreSentiments = 'terrible';
      break;
    case 2:
      scoreSentiments = 'lame';
      break;
    case 3:
      scoreSentiments = 'decent';
      break;
    case 4:
      scoreSentiments = 'rock solid';
      break;
    default:
      scoreSentiments = 'really shitty';
  }

  let strengthVariant = 'danger';
  if (passwordAnalysis.score >= 2) {
    strengthVariant = 'warning';
  }
  if (passwordAnalysis.score >= 4) {
    strengthVariant = 'success';
  }

  return (
    <div {...props} style={{ ...props.style }}>
      <style>@import url('https://fonts.googleapis.com/css2?family=Rye&family=Sigmar+One&display=swap');</style>
      <div>
        <Container>
          <Row>
            <Col sm={{ span: 10, offset: 1 }} md={{ span: 8, offset: 2 }}>
              <Card className="shadow">
                <Card.Body>
                  <Stack gap={2}>
                    <h1
                      className={`d-flex flex-column text-center my-3 text-${strengthVariant}`}
                      style={{
                        fontFamily: "'Sigmar One', cursive",
                        // WebkitTextFillColor: 'white',
                        // WebkitTextStroke: '1px black',
                      }}
                    >
                      <div>Silly</div>
                      <div style={{ fontSize: '150%' }}>Password</div>
                      <div>Generator</div>
                    </h1>
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
                        <Button onClick={generate}>Generate</Button>
                        <Button variant="outline-primary" onClick={handleCopyButton}>
                          {showCopied ? '✅ Copied!' : 'Copy'}
                        </Button>
                      </div>
                    </div>
                    <Accordion defaultActiveKey="0">
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>Options</Accordion.Header>
                        <Accordion.Body className="d-flex flex-column gap-3">
                          <Form.Group controlId="form-group-word-count">
                            <Form.Label className="fw-bold">Number of Words</Form.Label>
                            <div className="d-flex align-items-center gap-2">
                              <Form.Control
                                min={4}
                                max={10}
                                step={1}
                                type="number"
                                style={{ width: 80 }}
                                value={wordCount ?? 4}
                                onChange={(e) => {
                                  const newVal = parseInt(e.target.value);
                                  if (!isNaN(newVal)) {
                                    setWordCount(newVal);
                                    setShouldGenerate(true);
                                  }
                                }}
                              />
                              <Form.Range
                                min={4}
                                max={10}
                                step={1}
                                value={wordCount ?? 4}
                                onChange={(e) => {
                                  const newVal = parseInt(e.target.value);
                                  if (!isNaN(newVal)) {
                                    setWordCount(newVal);
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
                              checked={!!capitalize}
                              onChange={(e) => {
                                setCapitalize(e.target.checked);
                                setShouldGenerate(true);
                              }}
                            />
                          </div>
                          <Form.Group controlId="form-group-word-count">
                            <Form.Label className="fw-bold">Ending Punctuation</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter some punctuation"
                              value={endingPunctuation ?? ''}
                              onChange={(e) => {
                                setEndingPunctuation(e.target.value);
                                setShouldGenerate(true);
                              }}
                            />
                            <Form.Text className="text-muted">
                              The generated password will end with one of these characters.
                            </Form.Text>
                          </Form.Group>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                    <Alert variant={strengthVariant}>
                      <h5 className="mb-4">
                        <div className="d-flex align-items-center gap-2">
                          {thinking ? (
                            <Spinner animation="border" role="status" size="sm" />
                          ) : (
                            <Badge
                              bg={strengthVariant}
                              className={classNames(
                                passwordAnalysis.score >= 2 && passwordAnalysis.score <= 3 && 'text-black',
                              )}
                            >
                              {passwordAnalysis.score}/4
                            </Badge>
                          )}
                          Password Strength
                        </div>
                      </h5>
                      <h6>What does our password cracking robot have to say?</h6>
                      {thinking ? (
                        <Spinner animation="border" role="status" size="sm" />
                      ) : (
                        <p className="mb-0">
                          🤖 “I'm kind of obsessed with cracking passwords, and it would take{' '}
                          <span className="fw-bold">
                            {passwordAnalysis.crack_times_display.offline_fast_hashing_1e10_per_second}
                          </span>{' '}
                          to crack this <span className="fw-bold">{scoreSentiments}</span> password on an ultra fast
                          computer!” &mdash;Robot powered by questionable morals (and{' '}
                          <a href="https://www.npmjs.com/package/zxcvbn">zxcvbn</a>)
                        </p>
                      )}
                    </Alert>
                    <Alert variant="dark">
                      Note from the developer: This password generator is hot off the press! Even better passwords are
                      coming soon. 🍻
                    </Alert>
                    <div className="text-center mb-2">
                      <a
                        className="text-decoration-none"
                        href="https://github.com/justinmahar/silly-password-generator"
                      >
                        View on GitHub
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

const STORAGE_PREFIX = 'silly-password-generator_test';
