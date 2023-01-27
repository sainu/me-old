import { ComponentProps, FC } from 'react';
import { Experience } from '@/type/api/experience';
import { ExperienceSummaryListItem } from './ExperienceSummaryListItem';

type Props = {
  experiences: (ComponentProps<typeof ExperienceSummaryListItem>['experience'] &
    Pick<Experience, 'id'>)[];
};

export const ExperienceSummaryList: FC<Props> = ({ experiences }) => {
  return (
    <div className='flex flex-col gap-3'>
      {experiences.map((experience) => (
        <ExperienceSummaryListItem
          key={experience.id}
          experience={experience}
        />
      ))}
    </div>
  );
};
