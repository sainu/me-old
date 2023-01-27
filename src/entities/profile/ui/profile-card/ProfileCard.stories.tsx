import type { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { ProfileCard } from './ProfileCard';

type Component = typeof ProfileCard;
type Meta = ComponentMeta<Component>;
type Story = ComponentStoryObj<Component>;

const meta: Meta = {
  component: ProfileCard,
  title: 'entities/profile/profile-card',
};

export default meta;

const profileMock = {
  profileImageUrl: 'sample-abc.jpg',
  givenNameEn: 'John',
  familyNameEn: 'Doe',
  bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  job: 'Manager',
};

export const Default: Story = {
  args: {
    profile: profileMock,
  },
};

export const WithExtra: Story = {
  args: {
    profile: profileMock,
    extra: [<div key='extra-1'>Extra 1</div>, <div key='extra-2'>Extra 2</div>],
  },
};
