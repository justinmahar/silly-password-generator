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
const zxcvbn_1 = __importDefault(require("zxcvbn"));
const react_1 = __importDefault(require("react"));
const passwords_1 = require("../passwords");
const copy_to_clipboard_1 = __importDefault(require("copy-to-clipboard"));
const react_use_precision_timer_1 = require("react-use-precision-timer");
const SillyPasswordGenerator = (_a) => {
    var props = __rest(_a, []);
    const [sillyPassword, setSillyPassword] = react_1.default.useState((0, passwords_1.generateSillyPassword)());
    const [showCopied, toggleShowCopied] = (0, react_use_precision_timer_1.useMomentaryBool)(false, 1500);
    const handleGenerateButton = () => {
        const pass = (0, passwords_1.generateSillyPassword)();
        setSillyPassword(pass);
    };
    const handleCopyButton = () => {
        (0, copy_to_clipboard_1.default)(sillyPassword);
        toggleShowCopied();
    };
    const passwordAnalysis = (0, zxcvbn_1.default)(sillyPassword);
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
    return (react_1.default.createElement("div", Object.assign({}, props, { style: Object.assign({}, props.style) }),
        react_1.default.createElement("div", null,
            react_1.default.createElement("div", null,
                "Password:",
                ' ',
                react_1.default.createElement("input", { type: "text", value: sillyPassword, onChange: (e) => setSillyPassword(e.target.value), style: { width: 400 } })),
            react_1.default.createElement("button", { onClick: handleGenerateButton }, "Generate"),
            react_1.default.createElement("button", { onClick: handleCopyButton }, showCopied ? 'Copied!' : 'Copy')),
        react_1.default.createElement("div", null,
            "Password strength:",
            react_1.default.createElement("div", null,
                passwordAnalysis.score,
                "/4, it would take",
                ' ',
                passwordAnalysis.crack_times_display.offline_fast_hashing_1e10_per_second,
                " to crack this ",
                scoreRating,
                ' ',
                "password on an ultra fast computer"))));
};
exports.SillyPasswordGenerator = SillyPasswordGenerator;
