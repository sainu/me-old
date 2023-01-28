import type { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { LinkText } from './LinkText';

type Component = typeof LinkText;
type Meta = ComponentMeta<Component>;
type Story = ComponentStoryObj<Component>;

const meta: Meta = {
  component: LinkText,
  title: 'shared/link-text',
};

export default meta;

export const Default: Story = {
  args: {
    children: 'Link Text',
    href: '#',
  },
};
