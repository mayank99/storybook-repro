import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Button, ButtonProps } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  parameters: {
    docs: { inlineStories: false } // toggle this line and refresh storybook
  },
} as Meta;

export const Basic: Story<ButtonProps> = (args: ButtonProps) => {
  return (
    <Button {...args}>
      Basic button
    </Button>
  );
};
Basic.args = {
  children: 'Basic button'
}

export const Italic: Story<ButtonProps> = (args: ButtonProps) => {
  return (
    <Button {...args}>
      <span style={{ fontStyle: 'italic'}}>Italic label</span>
    </Button>
  );
};
Italic.argTypes = {
  children: { control: { disable: true } }
}

export const Dropdown: Story<ButtonProps> = (args: ButtonProps) => {
  return (
    <Button {...args}>
      {'Dropdown \u25be'}
    </Button>
  );
};
