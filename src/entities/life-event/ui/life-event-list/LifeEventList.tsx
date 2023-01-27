import { ComponentProps, FC } from 'react';
import { LifeEventListItem } from './LifeEventListItem';

type Props = {
  lifeEvents: ComponentProps<typeof LifeEventListItem>['lifeEvent'][];
};

export const LifeEventList: FC<Props> = ({ lifeEvents }) => {
  return (
    <div className='flex flex-col divide-y'>
      {lifeEvents.map((lifeEvent) => (
        <LifeEventListItem key={lifeEvent.id} lifeEvent={lifeEvent} />
      ))}
    </div>
  );
};
