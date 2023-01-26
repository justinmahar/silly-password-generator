import classNames from 'classnames';
import { Alert, Badge, Button, Card, Col, Container, Form, Row, Spinner, Stack } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import copy from 'copy-to-clipboard';
import React from 'react';
import { DivProps } from 'react-html-props';
import { useMomentaryBool } from 'react-use-precision-timer';
import zxcbvn from 'zxcvbn';
import { generateSillyPassword } from '../passwords';

export interface SillyPasswordGeneratorProps extends DivProps {}

export const SillyPasswordGenerator = ({ ...props }: SillyPasswordGeneratorProps) => {
  const [sillyPassword, setSillyPassword] = React.useState(generateSillyPassword());
  const [showCopied, toggleShowCopied] = useMomentaryBool(false, 1500);

  const [thinking, toggleThinking] = useMomentaryBool(false, 500);

  const handleGenerateButton = () => {
    setSillyPassword(generateSillyPassword());
  };

  const handleCopyButton = () => {
    copy(sillyPassword);
    toggleShowCopied();
  };

  const passwordAnalysis = zxcbvn(sillyPassword);

  let scoreSentiments = 'really shitty';
  switch (passwordAnalysis.score) {
    case 0:
      scoreSentiments = 'really shitty';
      break;
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
            <Col md={{ span: 8, offset: 2 }}>
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
                          className="fs-3 text-center"
                        />
                      </div>
                      <div className="d-flex justify-content-center gap-2">
                        <Button onClick={handleGenerateButton}>Generate</Button>
                        <Button variant="outline-primary" onClick={handleCopyButton}>
                          {showCopied ? '✅ Copied!' : 'Copy'}
                        </Button>
                      </div>
                    </div>
                    <Alert variant={strengthVariant}>
                      <h5 className="mb-4">
                        <div className="d-flex gap-2">
                          {thinking ? (
                            <Spinner animation="border" role="status" />
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
                      <p className="mb-0">
                        🤖 “I'm kind of obsessed with cracking passwords, and it would take{' '}
                        <span className="fw-bold">
                          {passwordAnalysis.crack_times_display.offline_fast_hashing_1e10_per_second}
                        </span>{' '}
                        to crack this <span className="fw-bold">{scoreSentiments}</span> password on an ultra fast
                        computer!” &mdash;Robot powered by questionable morals (and{' '}
                        <a href="https://www.npmjs.com/package/zxcvbn">zxcvbn</a>)
                      </p>
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
