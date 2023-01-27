import type { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { ExperienceSummaryList } from './ExperienceSummaryList';

type Component = typeof ExperienceSummaryList;
type Meta = ComponentMeta<Component>;
type Story = ComponentStoryObj<Component>;

const meta: Meta = {
  component: ExperienceSummaryList,
  title: 'entities/experience/experience-summary-list',
};

export default meta;

export const Default: Story = {
  args: {
    experiences: [
      {
        id: '1',
        companyName: '株式会社テスト',
        startDate: '2015-06-30T15:00:00.000Z',
      },
      {
        id: '2',
        companyName: '株式会社サッカー',
        startDate: '2014-06-30T15:00:00.000Z',
      },
      {
        id: '3',
        companyName: '株式会社肉三昧',
        startDate: '2012-06-30T15:00:00.000Z',
      },
    ],
  },
};
