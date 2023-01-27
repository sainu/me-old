import type { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { ComponentProps } from 'react';
import { LifeEventList } from './LifeEventList';

type Component = typeof LifeEventList;
type Meta = ComponentMeta<Component>;
type Story = ComponentStoryObj<Component>;
type Posts = ComponentProps<Component>['lifeEvents'];

const meta: Meta = {
  component: LifeEventList,
  title: 'entities/life-event/life-event-list',
};

export default meta;

const lifeEventsMock: Posts = [
  {
    id: '1',
    title: 'Life Event 1',
    date: '2020-09-15T15:00:00.000Z',
  },
  {
    id: '2',
    title: 'Life Event 2',
    date: '2021-09-16T15:00:00.000Z',
  },
  {
    id: '3',
    title: 'Life Event 3',
    date: '2022-09-17T15:00:00.000Z',
  },
  {
    id: '4',
    title: 'Life Event 4',
    date: '2023-09-17T15:00:00.000Z',
  },
  {
    id: '5',
    title: 'Life Event 5',
    date: '2024-09-17T15:00:00.000Z',
  },
  {
    id: '6',
    title: 'Life Event 6',
    date: '2025-09-17T15:00:00.000Z',
  },
  {
    id: '7',
    title: 'Life Event 7',
    date: '2026-09-17T15:00:00.000Z',
  },
  {
    id: '8',
    title: 'Life Event 8',
    date: '2027-09-17T15:00:00.000Z',
  },
  {
    id: '9',
    title: 'Life Event 9',
    date: '2028-09-17T15:00:00.000Z',
  },
  {
    id: '10',
    title: 'Life Event 10',
    date: '2029-09-17T15:00:00.000Z',
  },
];

export const Default: Story = {
  args: {
    lifeEvents: lifeEventsMock,
  },
};
