import type { Meta, StoryObj } from '@storybook/react';
import { SillyPasswordGenerator as SPG } from '../components/SillyPasswordGenerator';

// === Setup ===
const StoryComponent = SPG; // <-- Set to your component
const meta: Meta<typeof StoryComponent> = {
  title: 'Tools', // <-- Set to your story title
  component: StoryComponent,
  parameters: {
    options: { showPanel: false }, // Don't show addons panel
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

// === Stories ===
export const SillyPasswordGenerator: Story = {};
