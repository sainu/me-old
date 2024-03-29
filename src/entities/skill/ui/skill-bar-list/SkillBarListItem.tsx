import { FC } from 'react';
import { Skill } from '@/type/api/skill';

type Props = {
  skill: Skill;
};

const colors = [
  ['bg-blue-50', 'text-gray-900'],
  ['bg-blue-100', 'text-gray-900'],
  ['bg-blue-200', 'text-gray-900'],
  ['bg-blue-300', 'text-gray-900'],
  ['bg-blue-400', 'text-white'],
  ['bg-blue-500', 'text-white'],
  ['bg-blue-600', 'text-white'],
  ['bg-blue-700', 'text-white'],
  ['bg-blue-800', 'text-white'],
  ['bg-blue-900', 'text-white'],
];
const colorsSize = colors.length;
const calculateLevelFrom = (score: number) => {
  if (score >= 100) {
    return colorsSize - 1;
  }
  if (score < 0) {
    return 0;
  }
  return Math.floor(score / colorsSize);
};

export const SkillBarListItem: FC<Props> = ({ skill }) => {
  const level = calculateLevelFrom(skill.score);

  return (
    <div className='bg-gray-100 rounded-full hover:shadow hover:scale-105 transition-all cursor-pointer relative'>
      <div style={{ width: `${skill.score}%` }}>
        <div
          className={`animate-left-to-right flex items-center justify-start h-6 rounded-full ${colors[level][0]}`}
        ></div>
      </div>
      <div className='absolute z-10 -translate-y-full translate-x-4'>
        <span className={`${colors[level][1]} text-sm`}>{skill.name}</span>
      </div>
    </div>
  );
};
