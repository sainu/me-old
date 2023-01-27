import type { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { Icon } from './Icon';

type Component = typeof Icon;
type Meta = ComponentMeta<Component>;
type Story = ComponentStoryObj<Component>;

const meta: Meta = {
  component: Icon,
  title: 'shared/icon',
};

export default meta;

export const Book: Story = {
  args: { name: 'book' },
};
