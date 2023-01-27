import { ComponentProps, FC } from 'react';
import { Experience } from '@/type/api/experience';
import { ExperienceListItem } from './ExperienceListItem';

type Props = {
  experiences: (ComponentProps<typeof ExperienceListItem>['experience'] &
    Pick<Experience, 'id'>)[];
};

export const ExperienceList: FC<Props> = ({ experiences }) => {
  return (
    <div className='flex flex-col gap-8 sm:gap-6'>
      {experiences.map((experience) => (
        <ExperienceListItem key={experience.id} experience={experience} />
      ))}
    </div>
  );
};
