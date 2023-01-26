"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSettings = exports.MAX_WORD_COUNT = void 0;
const react_1 = __importDefault(require("react"));
const react_storage_complete_1 = require("react-storage-complete");
const passwords_1 = require("../passwords/passwords");
exports.MAX_WORD_COUNT = 20;
const STORAGE_PREFIX = 'silly-password-generator';
const useSettings = () => {
    const wordCountState = (0, react_storage_complete_1.useLocalStorage)('wordCount', passwords_1.DEFAULT_PASSWORD_OPTIONS.wordCount, {
        prefix: STORAGE_PREFIX,
    });
    const capitalizeState = (0, react_storage_complete_1.useLocalStorage)('capitalize', false, { prefix: STORAGE_PREFIX });
    const saltState = (0, react_storage_complete_1.useLocalStorage)('salt', passwords_1.DEFAULT_PASSWORD_OPTIONS.salt, {
        prefix: STORAGE_PREFIX,
    });
    return react_1.default.useMemo(() => {
        return {
            wordCountState,
            capitalizeState,
            saltState,
        };
    }, [capitalizeState, saltState, wordCountState]);
};
exports.useSettings = useSettings;
