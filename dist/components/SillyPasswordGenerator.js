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
require("bootstrap/dist/css/bootstrap.css");
const classnames_1 = __importDefault(require("classnames"));
const copy_to_clipboard_1 = __importDefault(require("copy-to-clipboard"));
const react_1 = __importDefault(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
const react_use_precision_timer_1 = require("react-use-precision-timer");
const passwords_1 = require("../passwords/passwords");
const RoboQuote_1 = require("./RoboQuote");
const settings_1 = require("./settings");
const SillyPasswordGenerator = (_a) => {
    var props = __rest(_a, []);
    const [showCopied, toggleShowCopied] = (0, react_use_precision_timer_1.useMomentaryBool)(false, 1500);
    const settings = (0, settings_1.useSettings)();
    const [wordCount, setWordCount] = settings.wordCountState;
    const [capitalize, setCapitalize] = settings.capitalizeState;
    const [salt, setSalt] = settings.saltState;
    const options = react_1.default.useMemo(() => {
        return {
            capitalize: !!capitalize,
            salt: salt !== null && salt !== void 0 ? salt : '',
            wordCount: wordCount !== null && wordCount !== void 0 ? wordCount : passwords_1.DEFAULT_PASSWORD_OPTIONS.wordCount,
        };
    }, [capitalize, salt, wordCount]);
    const initialPassword = react_1.default.useMemo(() => (0, passwords_1.generateSillyPassword)(options), []); // No deps; one-time only.
    const [sillyPassword, setSillyPassword] = react_1.default.useState(initialPassword);
    const [shouldGenerate, setShouldGenerate] = react_1.default.useState(false);
    const generate = react_1.default.useCallback(() => {
        setSillyPassword((0, passwords_1.generateSillyPassword)(options));
    }, [options]);
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
    const passwordAnalysis = (0, passwords_1.analyzePassword)(sillyPassword);
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
    return (react_1.default.createElement("div", Object.assign({}, props, { style: Object.assign({}, props.style) }),
        react_1.default.createElement("style", null, "@import url('https://fonts.googleapis.com/css2?family=Underdog&display=swap');"),
        react_1.default.createElement("div", null,
            react_1.default.createElement(react_bootstrap_1.Container, null,
                react_1.default.createElement(react_bootstrap_1.Row, null,
                    react_1.default.createElement(react_bootstrap_1.Col, { sm: { span: 10, offset: 1 }, md: { span: 8, offset: 2 } },
                        react_1.default.createElement(react_bootstrap_1.Card, { className: "shadow" },
                            react_1.default.createElement(react_bootstrap_1.Card.Body, null,
                                react_1.default.createElement(react_bootstrap_1.Stack, { gap: 2 },
                                    react_1.default.createElement("h1", { className: `d-flex flex-column text-center my-3 text-${strengthVariant}`, style: {
                                            fontFamily: "'Underdog', sans-serif",
                                            lineHeight: '45px',
                                        } },
                                        react_1.default.createElement("div", null, "Silly"),
                                        react_1.default.createElement("div", { className: "position-relative", style: { fontSize: '180%', transform: 'rotate(-3deg)', top: -5 } }, "Password"),
                                        react_1.default.createElement("div", null, "Generator")),
                                    react_1.default.createElement(react_bootstrap_1.Alert, { variant: strengthVariant },
                                        react_1.default.createElement("h5", { className: "text-center mb-0" }, "Generate silly passwords that are secure and easy to use.")),
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
                                                        react_1.default.createElement(react_bootstrap_1.Form.Control, { min: 2, max: 10, step: 1, type: "number", style: { width: 80 }, value: wordCount !== null && wordCount !== void 0 ? wordCount : passwords_1.DEFAULT_PASSWORD_OPTIONS.wordCount, onChange: (e) => {
                                                                const newVal = parseInt(e.target.value);
                                                                if (!isNaN(newVal)) {
                                                                    setWordCount(Math.max(1, Math.min(settings_1.MAX_WORD_COUNT, newVal)));
                                                                    setShouldGenerate(true);
                                                                }
                                                            } }),
                                                        react_1.default.createElement(react_bootstrap_1.Form.Range, { min: 2, max: 10, step: 1, value: wordCount !== null && wordCount !== void 0 ? wordCount : passwords_1.DEFAULT_PASSWORD_OPTIONS.wordCount, onChange: (e) => {
                                                                const newVal = parseInt(e.target.value);
                                                                if (!isNaN(newVal)) {
                                                                    setWordCount(Math.max(1, Math.min(settings_1.MAX_WORD_COUNT, newVal)));
                                                                    setShouldGenerate(true);
                                                                }
                                                            } }))),
                                                react_1.default.createElement("div", null,
                                                    react_1.default.createElement(react_bootstrap_1.Form.Check, { label: "Capitalize", id: "capitalize-checkbox", className: "user-select-none", checked: !!capitalize, onChange: (e) => {
                                                            setCapitalize(e.target.checked);
                                                            setShouldGenerate(true);
                                                        } })),
                                                react_1.default.createElement(react_bootstrap_1.Form.Group, { controlId: "form-group-salt" },
                                                    react_1.default.createElement(react_bootstrap_1.Form.Label, { className: "fw-bold" }, "\uD83E\uDDC2 Salt"),
                                                    react_1.default.createElement(react_bootstrap_1.Form.Control, { type: "text", placeholder: "Make it salty", value: salt !== null && salt !== void 0 ? salt : passwords_1.DEFAULT_PASSWORD_OPTIONS.salt, onChange: (e) => {
                                                            setSalt(e.target.value);
                                                            setShouldGenerate(true);
                                                        } }),
                                                    react_1.default.createElement(react_bootstrap_1.Form.Text, { className: "text-muted" }, "Everything is better with a little salt. Your generated password will end with this text."))))),
                                    react_1.default.createElement(react_bootstrap_1.Alert, { variant: strengthVariant },
                                        react_1.default.createElement("h5", { className: "mb-4" },
                                            react_1.default.createElement("div", { className: "d-flex align-items-center gap-2" },
                                                react_1.default.createElement(react_bootstrap_1.Badge, { bg: strengthVariant, className: (0, classnames_1.default)(effectiveScore >= 2 && effectiveScore <= 3 && 'text-black') },
                                                    effectiveScore,
                                                    "/4"),
                                                "Password Strength")),
                                        react_1.default.createElement("h6", null, "What does our password cracking robot have to say?"),
                                        react_1.default.createElement("p", null,
                                            react_1.default.createElement(RoboQuote_1.RoboQuote, { effectiveScore: effectiveScore, analysis: passwordAnalysis })),
                                        react_1.default.createElement(react_bootstrap_1.Form.Text, { className: "text-muted" },
                                            "Password analysis powered by ",
                                            react_1.default.createElement("a", { href: "https://www.npmjs.com/package/zxcvbn" }, "zxcvbn"),
                                            ".")),
                                    react_1.default.createElement(react_bootstrap_1.Alert, { variant: "dark" }, "Note from the developer: This password generator is hot off the press! Even better passwords are coming soon. \uD83C\uDF7B"),
                                    react_1.default.createElement("div", { className: "d-flex flex-wrap justify-content-center align-items-center gap-1 mb-2" },
                                        "Inspired by",
                                        ' ',
                                        react_1.default.createElement("a", { className: "text-decoration-none", href: "https://xkcd.com/936/", target: "_blank", rel: "noopener noreferrer" }, "xkcd"),
                                        react_1.default.createElement("div", null, "\u2022"),
                                        react_1.default.createElement("a", { className: "text-decoration-none", href: "https://github.com/justinmahar/silly-password-generator" }, "View on GitHub")))))))))));
};
exports.SillyPasswordGenerator = SillyPasswordGenerator;
