import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '.';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'My Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'My Button',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'My Button',
  },
};

export const Disabled: Story = {
  args: {
    children: 'My Button',
    disabled: true,
  },
};
