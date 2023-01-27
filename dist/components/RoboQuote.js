"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoboQuote = void 0;
const react_1 = __importDefault(require("react"));
const RoboQuote = ({ effectiveScore, analysis, salt }) => {
    let scoreSentiments = '[thinking...]';
    switch (effectiveScore) {
        case 4:
            scoreSentiments = 'rock solid';
            break;
        case 3:
            scoreSentiments = 'decent';
            break;
        case 2:
            scoreSentiments = 'insufficient';
            break;
        case 1:
            scoreSentiments = 'terrible';
            break;
        default:
            scoreSentiments = 'painfully bad';
    }
    const makeRoboQuote = (roboStatementElement) => react_1.default.createElement(react_1.default.Fragment, null,
        "\uD83E\uDD16 \u201C",
        roboStatementElement,
        "\u201D");
    const analysisSentiments = (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("span", { className: "fw-bold" }, analysis.crack_times_display.offline_fast_hashing_1e10_per_second),
        " to brute-force crack this ",
        react_1.default.createElement("span", { className: "fw-bold" }, scoreSentiments),
        " password on an ultra fast computer",
        effectiveScore >= 4 && react_1.default.createElement(react_1.default.Fragment, null, " (even if the hacker knew about this password generator)"),
        ".",
        !salt && effectiveScore >= 4 && (react_1.default.createElement(react_1.default.Fragment, null,
            ' ',
            "You can make your password even stronger by ",
            react_1.default.createElement("span", { className: "fw-bold" }, "adding some salt"),
            " in Options."))));
    let robotQuote = makeRoboQuote(react_1.default.createElement(react_1.default.Fragment, null,
        "Awful. It would take ",
        analysisSentiments));
    if (effectiveScore >= 4) {
        robotQuote = makeRoboQuote(react_1.default.createElement(react_1.default.Fragment, null,
            "Looks great! It would take ",
            analysisSentiments));
    }
    else if (effectiveScore >= 3) {
        robotQuote = makeRoboQuote(react_1.default.createElement(react_1.default.Fragment, null,
            "Not the worst I've seen, but it would take ",
            analysisSentiments));
    }
    else if (effectiveScore >= 2) {
        robotQuote = makeRoboQuote(react_1.default.createElement(react_1.default.Fragment, null,
            "It's not great. It would take ",
            analysisSentiments));
    }
    else if (effectiveScore >= 1) {
        robotQuote = makeRoboQuote(react_1.default.createElement(react_1.default.Fragment, null,
            "Dang, that's a bad one. It would take ",
            analysisSentiments));
    }
    return robotQuote;
};
exports.RoboQuote = RoboQuote;
