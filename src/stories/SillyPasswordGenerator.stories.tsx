/*
 * More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
 * More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
 * More on args: https://storybook.js.org/docs/react/writing-stories/args
 * More on argTypes: https://storybook.js.org/docs/react/api/argtypes
 */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SillyPasswordGenerator as SPG } from '../components/SillyPasswordGenerator';

export default {
  title: 'Tools',
  component: SPG,
} as ComponentMeta<typeof SPG>;

const Template: ComponentStory<typeof SPG> = (args) => <SPG {...args} />;

export const SillyPasswordGenerator = Template.bind({});
SillyPasswordGenerator.args = {};
