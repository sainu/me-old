import { ComponentProps, FC } from 'react';
import { SkillRankListItem } from './SkillRankListItem';

type Props = {
  skills: ComponentProps<typeof SkillRankListItem>['skill'][];
};

export const SkillRankList: FC<Props> = ({ skills }) => {
  return (
    <div className='flex flex-col gap-4'>
      {skills.slice(0, 3).map((skill, index) => (
        <SkillRankListItem key={skill.id} skill={skill} rank={index + 1} />
      ))}
    </div>
  );
};
