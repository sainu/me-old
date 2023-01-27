import type { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { Footer } from './Footer';

type Component = typeof Footer;
type Meta = ComponentMeta<Component>;
type Story = ComponentStoryObj<Component>;

const meta: Meta = {
  component: Footer,
  title: 'widgets/footer',
};

export default meta;

export const Default: Story = {};
