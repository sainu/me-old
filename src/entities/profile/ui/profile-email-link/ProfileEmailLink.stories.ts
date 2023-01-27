import type { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { ProfileEmailLink } from './ProfileEmailLink';

type Component = typeof ProfileEmailLink;
type Meta = ComponentMeta<Component>;
type Story = ComponentStoryObj<Component>;

const meta: Meta = {
  component: ProfileEmailLink,
  title: 'entities/profile/profile-email-link',
};

export default meta;

export const Default: Story = {
  args: {
    profile: {
      email: 'john.doe@sainu.me',
    },
  },
};
