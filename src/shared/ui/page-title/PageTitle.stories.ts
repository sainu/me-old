import type { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { PageTitle } from './PageTitle';

type Component = typeof PageTitle;
type Meta = ComponentMeta<Component>;
type Story = ComponentStoryObj<Component>;

const meta: Meta = {
  component: PageTitle,
  title: 'shared/page-title',
};

export default meta;

export const Default: Story = {
  args: {
    title: 'Title',
  },
};
