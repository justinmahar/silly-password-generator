"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.analyzePassword = exports.generateSillyPassword = exports.DEFAULT_PASSWORD_OPTIONS = void 0;
const lodash_1 = require("lodash");
const zxcvbn_1 = __importDefault(require("zxcvbn"));
const words_1 = require("./words");
exports.DEFAULT_PASSWORD_OPTIONS = {
    wordCount: 4,
    capitalize: false,
    salt: '',
};
const sources = [words_1.attributes, words_1.allCreatures];
const generateSillyPassword = (options) => {
    const opts = Object.assign(Object.assign({}, exports.DEFAULT_PASSWORD_OPTIONS), options);
    const parts = [];
    const wordCount = Math.max(1, opts.wordCount);
    for (let i = 0; i < wordCount; i++) {
        const source = i === wordCount - 1 ? words_1.allCreatures : i === 0 ? words_1.attributes : sources[Math.floor(Math.random() * sources.length)];
        parts.push(source[Math.floor(Math.random() * words_1.allCreatures.length)]);
    }
    let pass = parts.join(' ').toLowerCase();
    if (opts.capitalize) {
        pass = (0, lodash_1.capitalize)(pass);
    }
    if (opts.salt) {
        pass = pass + opts.salt;
    }
    return pass;
};
exports.generateSillyPassword = generateSillyPassword;
const analyzePassword = (sillyPassword, userInputs) => {
    return (0, zxcvbn_1.default)(sillyPassword, [...sources.flat(), ...(userInputs !== null && userInputs !== void 0 ? userInputs : [])]);
};
exports.analyzePassword = analyzePassword;
