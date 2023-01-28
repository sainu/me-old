import type { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { ProfileImage } from './ProfileImage';

type Component = typeof ProfileImage;
type Meta = ComponentMeta<Component>;
type Story = ComponentStoryObj<Component>;

const meta: Meta = {
  component: ProfileImage,
  title: 'entities/profile/profile-image',
};

export default meta;

export const Medium: Story = {
  args: {
    src: 'sample-abc.jpg',
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    src: 'sample-abc.jpg',
    size: 'large',
  },
};
