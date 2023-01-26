"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SillyPasswordGenerator = void 0;
/*
 * More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
 * More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
 * More on args: https://storybook.js.org/docs/react/writing-stories/args
 * More on argTypes: https://storybook.js.org/docs/react/api/argtypes
 */
const react_1 = __importDefault(require("react"));
const SillyPasswordGenerator_1 = require("../components/SillyPasswordGenerator");
exports.default = {
    title: 'Tools',
    component: SillyPasswordGenerator_1.SillyPasswordGenerator,
    parameters: {
        controls: {
            disabled: true,
        },
        options: { showPanel: false },
    },
};
const Template = (args) => react_1.default.createElement(SillyPasswordGenerator_1.SillyPasswordGenerator, Object.assign({}, args));
exports.SillyPasswordGenerator = Template.bind({});
exports.SillyPasswordGenerator.args = {};
