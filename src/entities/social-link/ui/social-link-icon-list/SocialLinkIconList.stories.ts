import type { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { SocialLinkIconList } from './SocialLinkIconList';

type Component = typeof SocialLinkIconList;
type Meta = ComponentMeta<Component>;
type Story = ComponentStoryObj<Component>;

const meta: Meta = {
  component: SocialLinkIconList,
  title: 'entities/social-link/social-link-icon-list',
};

export default meta;

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
    socialLinks: socialLinksMock,
  },
};
