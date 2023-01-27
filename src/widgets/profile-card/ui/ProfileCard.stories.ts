import type { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { ProfileCard } from './ProfileCard';

type Component = typeof ProfileCard;
type Meta = ComponentMeta<Component>;
type Story = ComponentStoryObj<Component>;

const meta: Meta = {
  component: ProfileCard,
  title: 'widgets/profile-card',
};

export default meta;

const profileMock = {
  profileImageUrl: 'sample-abc.jpg',
  givenNameEn: 'John',
  familyNameEn: 'Doe',
  bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  job: 'Manager',
  email: 'john.doe@sainu.me',
};

const socialLinksMock = [
  {
    name: 'SNS-1',
    url: '#sns-1',
    iconUrl: '/sample-abc.jpg',
  },
  {
    name: 'SNS-2',
    url: '#sns-2',
    iconUrl: '/sample-abc.jpg',
  },
  {
    name: 'SNS-3',
    url: '#sns-3',
    iconUrl: '/sample-abc.jpg',
  },
  {
    name: 'SNS-4',
    url: '#sns-4',
    iconUrl: '/sample-abc.jpg',
  },
];

export const Default: Story = {
  args: {
    profile: profileMock,
    socialLinks: socialLinksMock,
  },
};
