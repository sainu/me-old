import type { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { SkillRankList } from './SkillRankList';

type Component = typeof SkillRankList;
type Meta = ComponentMeta<Component>;
type Story = ComponentStoryObj<Component>;

const meta: Meta = {
  component: SkillRankList,
  title: 'entities/skill/skill-rank-list',
};

export default meta;

const skillsMock = [
  {
    id: '1',
    name: 'Skill 1',
    score: 100,
  },
  {
    id: '2',
    name: 'Skill 2',
    score: 90,
  },
  {
    id: '3',
    name: 'Skill 3',
    score: 40,
  },
  {
    id: '4',
    name: 'Skill 4',
    score: 10,
  },
  {
    id: '5',
    name: 'Skill 5',
    score: 0,
  },
];

export const Default: Story = {
  args: {
    skills: skillsMock,
  },
};
