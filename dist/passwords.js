"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.analyzePassword = exports.generateSillyPassword = exports.DEFAULT_PASSWORD_OPTIONS = void 0;
const lodash_1 = require("lodash");
const zxcvbn_1 = __importDefault(require("zxcvbn"));
const words_1 = require("./components/words");
exports.DEFAULT_PASSWORD_OPTIONS = {
    wordCount: 4,
    capitalize: false,
    suffixCharacters: [''],
};
const generateSillyPassword = (options) => {
    const opts = Object.assign(Object.assign({}, exports.DEFAULT_PASSWORD_OPTIONS), options);
    let adjectives = '';
    for (let i = 0; i < Math.max(1, opts.wordCount) - 1; i++) {
        adjectives += words_1.attributes[Math.floor(Math.random() * words_1.allCreatures.length)] + ' ';
    }
    const noun = words_1.allCreatures[Math.floor(Math.random() * words_1.allCreatures.length)];
    let pass = adjectives + noun;
    pass = pass.toLowerCase();
    if (opts.capitalize) {
        pass = (0, lodash_1.capitalize)(pass);
    }
    if (opts.suffixCharacters.length > 0) {
        pass = pass + opts.suffixCharacters[Math.floor(Math.random() * opts.suffixCharacters.length)];
    }
    return pass;
};
exports.generateSillyPassword = generateSillyPassword;
const analyzePassword = (sillyPassword, userInputs) => {
    return (0, zxcvbn_1.default)(sillyPassword, userInputs);
};
exports.analyzePassword = analyzePassword;
