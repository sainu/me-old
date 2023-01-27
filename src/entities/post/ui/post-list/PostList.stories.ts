import type { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { ComponentProps } from 'react';
import { PostList } from './PostList';

type Component = typeof PostList;
type Meta = ComponentMeta<Component>;
type Story = ComponentStoryObj<Component>;
type Posts = ComponentProps<Component>['posts'];

const meta: Meta = {
  component: PostList,
  title: 'entities/post/post-list',
};

export default meta;

const postsMock: Posts = [
  {
    slug: 'post-1',
    title: 'Post 1',
    publishedAt: '2021-01-01T09:00:00+09:00',
    content: 'Post 1 content',
  },
];

export const Default: Story = {
  args: {
    posts: postsMock,
  },
};
