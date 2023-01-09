import { FC } from 'react'
import { formatExperienceDate } from '@/shared/lib/date'
import { Experience } from '@/type/api/experience'

type Props = {
  experience: Experience,
}

export const ActiveWorkListItem: FC<Props> = ({
  experience,
}) => {
  return (
    <div className='flex flex-row gap-2'>
      <div className='w-1 bg-gray-800' />
      <div className='flex flex-col sm:flex-row'>
        <div className='sm:w-32'>
          {formatExperienceDate(experience.startDate)}
          〜
        </div>
        <div className='font-bold'>
          {experience.companyName}
        </div>
      </div>
    </div>
  )
}
