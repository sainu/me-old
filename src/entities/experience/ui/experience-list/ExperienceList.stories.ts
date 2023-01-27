import type { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { ExperienceList } from './ExperienceList';

type Component = typeof ExperienceList;
type Meta = ComponentMeta<Component>;
type Story = ComponentStoryObj<Component>;

const meta: Meta = {
  component: ExperienceList,
  title: 'entities/experience/experience-list',
};

export default meta;

export const Default: Story = {
  args: {
    experiences: [
      {
        id: '1',
        companyName: 'Company 1',
        employmentType: '正社員',
        startDate: '2015-06-30T15:00:00.000Z',
        endDate: '2017-02-28T15:00:00.000Z',
        projects: [
          {
            description:
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            technologies: [
              {
                name: 'React',
                versions: ['16.13.1'],
              },
              {
                name: 'Vue',
                versions: ['4.5.6'],
              },
            ],
          },
          {
            description:
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            technologies: [
              {
                name: 'React',
                versions: ['16.13.1'],
              },
            ],
          },
        ],
      },
      {
        id: '2',
        companyName: 'Company 2',
        employmentType: 'インターン',
        startDate: '2015-06-30T15:00:00.000Z',
        endDate: '2017-02-28T15:00:00.000Z',
        projects: [
          {
            description:
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            technologies: [
              {
                name: 'React',
                versions: ['16.13.1'],
              },
              {
                name: 'Vue',
                versions: ['4.5.6'],
              },
            ],
          },
          {
            description:
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            technologies: [
              {
                name: 'React',
                versions: ['16.13.1'],
              },
            ],
          },
        ],
      },
      {
        id: '3',
        companyName: 'Company 3',
        employmentType: 'パートタイム',
        startDate: '2015-06-30T15:00:00.000Z',
        endDate: '2017-02-28T15:00:00.000Z',
        projects: [
          {
            description:
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            technologies: [
              {
                name: 'React',
                versions: ['16.13.1'],
              },
              {
                name: 'Vue',
                versions: ['4.5.6'],
              },
            ],
          },
          {
            description:
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            technologies: [
              {
                name: 'React',
                versions: ['16.13.1'],
              },
            ],
          },
        ],
      },
      {
        id: '4',
        companyName: 'Company 4',
        employmentType: 'フリーランス',
        startDate: '2015-06-30T15:00:00.000Z',
        endDate: '2017-02-28T15:00:00.000Z',
        projects: [
          {
            description:
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            technologies: [
              {
                name: 'React',
                versions: ['16.13.1'],
              },
              {
                name: 'Vue',
                versions: ['4.5.6'],
              },
            ],
          },
          {
            description:
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            technologies: [
              {
                name: 'React',
                versions: ['16.13.1'],
              },
            ],
          },
        ],
      },
    ],
  },
};
