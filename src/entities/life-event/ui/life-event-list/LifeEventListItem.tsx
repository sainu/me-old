import { FC } from 'react';
import { getDate, getMonth, getYear } from '@/shared/lib';
import { LifeEvent } from '@/type/api/lifeEvent';

type Props = {
  lifeEvent: LifeEvent;
};

const yearBgColors = [
  'bg-yellow-400',
  'bg-red-400',
  'bg-green-400',
  'bg-blue-400',
  'bg-indigo-400',
  'bg-purple-400',
  'bg-pink-400',
];

export const LifeEventListItem: FC<Props> = ({ lifeEvent }) => {
  const year = getYear(lifeEvent.date);
  const yearBgColor = yearBgColors[year % yearBgColors.length];

  return (
    <div className='flex py-4'>
      <div className='flex flex-col w-18 shadow px-3 py-2 rounded'>
        <div
          className={`text-xs ${yearBgColor} text-white rounded-full inline text-center w-12 mb-1.5`}
        >
          {getYear(lifeEvent.date)}
        </div>
        <div className='flex justify-center font-bold leading-none'>
          {getMonth(lifeEvent.date)}.{getDate(lifeEvent.date)}
        </div>
      </div>

      <div className='px-3 flex items-center'>{lifeEvent.title}</div>
    </div>
  );
};
