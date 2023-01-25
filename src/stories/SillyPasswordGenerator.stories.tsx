/*
 * More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
 * More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
 * More on args: https://storybook.js.org/docs/react/writing-stories/args
 * More on argTypes: https://storybook.js.org/docs/react/api/argtypes
 */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SillyPasswordGenerator } from '../components/SillyPasswordGenerator';

export default {
  title: 'Stories/SillyPasswordGenerator',
  component: SillyPasswordGenerator,
} as ComponentMeta<typeof SillyPasswordGenerator>;

const Template: ComponentStory<typeof SillyPasswordGenerator> = (args) => <SillyPasswordGenerator {...args} />;

export const Generator = Template.bind({});
Generator.args = {};
