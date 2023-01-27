import { ComponentProps, FC } from 'react';
import { SkillBarListItem } from './SkillBarListItem';

type Props = {
  skills: ComponentProps<typeof SkillBarListItem>['skill'][];
};

export const SkillBarList: FC<Props> = ({ skills }) => {
  return (
    <div className='flex flex-col gap-2'>
      {skills.map((skill) => (
        <SkillBarListItem key={skill.id} skill={skill} />
      ))}
    </div>
  );
};
