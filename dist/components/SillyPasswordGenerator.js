"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SillyPasswordGenerator = void 0;
const react_storage_complete_1 = require("react-storage-complete");
const classnames_1 = __importDefault(require("classnames"));
const react_bootstrap_1 = require("react-bootstrap");
require("bootstrap/dist/css/bootstrap.css");
const copy_to_clipboard_1 = __importDefault(require("copy-to-clipboard"));
const react_1 = __importDefault(require("react"));
const react_use_precision_timer_1 = require("react-use-precision-timer");
const zxcvbn_1 = __importDefault(require("zxcvbn"));
const passwords_1 = require("../passwords");
const SillyPasswordGenerator = (_a) => {
    var props = __rest(_a, []);
    const [showCopied, toggleShowCopied] = (0, react_use_precision_timer_1.useMomentaryBool)(false, 1500);
    const [thinking, toggleThinking] = (0, react_use_precision_timer_1.useMomentaryBool)(false, 300);
    const [wordCount, setWordCount] = (0, react_storage_complete_1.useLocalStorage)('wordCount', passwords_1.DEFAULT_PASSWORD_OPTIONS.wordCount, {
        prefix: STORAGE_PREFIX,
    });
    const [capitalize, setCapitalize] = (0, react_storage_complete_1.useLocalStorage)('capitalize', false, { prefix: STORAGE_PREFIX });
    const [endingPunctuation, setEndingPunctuation] = (0, react_storage_complete_1.useLocalStorage)('endingPunctuation', passwords_1.DEFAULT_PASSWORD_OPTIONS.suffixCharacters.join(''), {
        prefix: STORAGE_PREFIX,
    });
    const options = react_1.default.useMemo(() => {
        return {
            capitalize: !!capitalize,
            suffixCharacters: [...new Set((endingPunctuation !== null && endingPunctuation !== void 0 ? endingPunctuation : '').split(''))],
            wordCount: wordCount !== null && wordCount !== void 0 ? wordCount : passwords_1.DEFAULT_PASSWORD_OPTIONS.wordCount,
        };
    }, [capitalize, endingPunctuation, wordCount]);
    const initialPassword = react_1.default.useMemo(() => (0, passwords_1.generateSillyPassword)(options), []); // No deps; one-time only.
    const [sillyPassword, setSillyPassword] = react_1.default.useState(initialPassword);
    const [shouldGenerate, setShouldGenerate] = react_1.default.useState(false);
    const generate = react_1.default.useCallback(() => {
        setSillyPassword((0, passwords_1.generateSillyPassword)(options));
        toggleThinking();
    }, [options, toggleThinking]);
    const handleCopyButton = () => {
        (0, copy_to_clipboard_1.default)(sillyPassword);
        toggleShowCopied();
    };
    react_1.default.useEffect(() => {
        if (shouldGenerate) {
            setShouldGenerate(false);
            generate();
        }
    }, [generate, shouldGenerate]);
    const passwordAnalysis = (0, zxcvbn_1.default)(sillyPassword);
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
    return (react_1.default.createElement("div", Object.assign({}, props, { style: Object.assign({}, props.style) }),
        react_1.default.createElement("style", null, "@import url('https://fonts.googleapis.com/css2?family=Rye&family=Sigmar+One&display=swap');"),
        react_1.default.createElement("div", null,
            react_1.default.createElement(react_bootstrap_1.Container, null,
                react_1.default.createElement(react_bootstrap_1.Row, null,
                    react_1.default.createElement(react_bootstrap_1.Col, { sm: { span: 10, offset: 1 }, md: { span: 8, offset: 2 } },
                        react_1.default.createElement(react_bootstrap_1.Card, { className: "shadow" },
                            react_1.default.createElement(react_bootstrap_1.Card.Body, null,
                                react_1.default.createElement(react_bootstrap_1.Stack, { gap: 2 },
                                    react_1.default.createElement("h1", { className: `d-flex flex-column text-center my-3 text-${strengthVariant}`, style: {
                                            fontFamily: "'Sigmar One', cursive",
                                            // WebkitTextFillColor: 'white',
                                            // WebkitTextStroke: '1px black',
                                        } },
                                        react_1.default.createElement("div", null, "Silly"),
                                        react_1.default.createElement("div", { style: { fontSize: '150%' } }, "Password"),
                                        react_1.default.createElement("div", null, "Generator")),
                                    react_1.default.createElement("div", { className: "d-flex flex-column gap-2 my-4" },
                                        react_1.default.createElement("div", { className: "d-flex justify-content-center" },
                                            react_1.default.createElement(react_bootstrap_1.Form.Control, { placeholder: "Generate a silly password, silly!", value: sillyPassword, onChange: (e) => setSillyPassword(e.target.value), className: "d-none d-md-block fs-3 text-center" }),
                                            react_1.default.createElement(react_bootstrap_1.Form.Control, { as: "textarea", rows: 2, placeholder: "Generate a silly password, silly!", value: sillyPassword, onChange: (e) => setSillyPassword(e.target.value), className: "d-md-none fs-3 text-center" })),
                                        react_1.default.createElement("div", { className: "d-flex justify-content-center gap-2" },
                                            react_1.default.createElement(react_bootstrap_1.Button, { onClick: generate }, "Generate"),
                                            react_1.default.createElement(react_bootstrap_1.Button, { variant: "outline-primary", onClick: handleCopyButton }, showCopied ? '✅ Copied!' : 'Copy'))),
                                    react_1.default.createElement(react_bootstrap_1.Accordion, null,
                                        react_1.default.createElement(react_bootstrap_1.Accordion.Item, { eventKey: "0" },
                                            react_1.default.createElement(react_bootstrap_1.Accordion.Header, null, "Options"),
                                            react_1.default.createElement(react_bootstrap_1.Accordion.Body, { className: "d-flex flex-column gap-3" },
                                                react_1.default.createElement(react_bootstrap_1.Form.Group, { controlId: "form-group-word-count" },
                                                    react_1.default.createElement(react_bootstrap_1.Form.Label, { className: "fw-bold" }, "Number of Words"),
                                                    react_1.default.createElement("div", { className: "d-flex align-items-center gap-2" },
                                                        react_1.default.createElement(react_bootstrap_1.Form.Control, { min: 4, max: 10, step: 1, type: "number", style: { width: 80 }, value: wordCount !== null && wordCount !== void 0 ? wordCount : passwords_1.DEFAULT_PASSWORD_OPTIONS.wordCount, onChange: (e) => {
                                                                const newVal = parseInt(e.target.value);
                                                                if (!isNaN(newVal)) {
                                                                    setWordCount(newVal);
                                                                    setShouldGenerate(true);
                                                                }
                                                            } }),
                                                        react_1.default.createElement(react_bootstrap_1.Form.Range, { min: 4, max: 10, step: 1, value: wordCount !== null && wordCount !== void 0 ? wordCount : passwords_1.DEFAULT_PASSWORD_OPTIONS.wordCount, onChange: (e) => {
                                                                const newVal = parseInt(e.target.value);
                                                                if (!isNaN(newVal)) {
                                                                    setWordCount(newVal);
                                                                    setShouldGenerate(true);
                                                                }
                                                            } }))),
                                                react_1.default.createElement("div", null,
                                                    react_1.default.createElement(react_bootstrap_1.Form.Check, { label: "Capitalize", id: "capitalize-checkbox", checked: !!capitalize, onChange: (e) => {
                                                            setCapitalize(e.target.checked);
                                                            setShouldGenerate(true);
                                                        } })),
                                                react_1.default.createElement(react_bootstrap_1.Form.Group, { controlId: "form-group-word-count" },
                                                    react_1.default.createElement(react_bootstrap_1.Form.Label, { className: "fw-bold" }, "Ending Punctuation"),
                                                    react_1.default.createElement(react_bootstrap_1.Form.Control, { type: "text", placeholder: "Enter some punctuation", value: endingPunctuation !== null && endingPunctuation !== void 0 ? endingPunctuation : passwords_1.DEFAULT_PASSWORD_OPTIONS.suffixCharacters.join(''), onChange: (e) => {
                                                            setEndingPunctuation(e.target.value);
                                                            setShouldGenerate(true);
                                                        } }),
                                                    react_1.default.createElement(react_bootstrap_1.Form.Text, { className: "text-muted" }, "The generated password will end with one of these characters."))))),
                                    react_1.default.createElement(react_bootstrap_1.Alert, { variant: strengthVariant },
                                        react_1.default.createElement("h5", { className: "mb-4" },
                                            react_1.default.createElement("div", { className: "d-flex align-items-center gap-2" },
                                                thinking ? (react_1.default.createElement(react_bootstrap_1.Spinner, { animation: "border", role: "status", size: "sm" })) : (react_1.default.createElement(react_bootstrap_1.Badge, { bg: strengthVariant, className: (0, classnames_1.default)(passwordAnalysis.score >= 2 && passwordAnalysis.score <= 3 && 'text-black') },
                                                    passwordAnalysis.score,
                                                    "/4")),
                                                "Password Strength")),
                                        react_1.default.createElement("h6", null, "What does our password cracking robot have to say?"),
                                        thinking ? (react_1.default.createElement(react_bootstrap_1.Spinner, { animation: "border", role: "status", size: "sm" })) : (react_1.default.createElement("p", { className: "mb-0" },
                                            "\uD83E\uDD16 \u201CI'm kind of obsessed with cracking passwords, and it would take",
                                            ' ',
                                            react_1.default.createElement("span", { className: "fw-bold" }, passwordAnalysis.crack_times_display.offline_fast_hashing_1e10_per_second),
                                            ' ',
                                            "to crack this ",
                                            react_1.default.createElement("span", { className: "fw-bold" }, scoreSentiments),
                                            " password on an ultra fast computer!\u201D \u2014Robot powered by questionable morals (and",
                                            ' ',
                                            react_1.default.createElement("a", { href: "https://www.npmjs.com/package/zxcvbn" }, "zxcvbn"),
                                            ")"))),
                                    react_1.default.createElement(react_bootstrap_1.Alert, { variant: "dark" }, "Note from the developer: This password generator is hot off the press! Even better passwords are coming soon. \uD83C\uDF7B"),
                                    react_1.default.createElement("div", { className: "text-center mb-2" },
                                        react_1.default.createElement("a", { className: "text-decoration-none", href: "https://github.com/justinmahar/silly-password-generator" }, "View on GitHub")))))))))));
};
exports.SillyPasswordGenerator = SillyPasswordGenerator;
const STORAGE_PREFIX = 'silly-password-generator';
