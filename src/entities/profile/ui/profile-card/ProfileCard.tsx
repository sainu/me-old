import { FC } from 'react';
import { ProfileImage } from '@/entities/profile';
import { Profile } from '@/type/api/profile';

type Props = {
  profile: Pick<
    Profile,
    'profileImageUrl' | 'givenNameEn' | 'familyNameEn' | 'bio' | 'job'
  >;
  extra?: React.ReactNode;
};

export const ProfileCard: FC<Props> = ({ profile, extra }) => {
  return (
    <section>
      <div className='flex flex-col sm:flex-row mt-12 gap-6'>
        <div className='shrink-0'>
          <div className='flex sm:items-start'>
            <ProfileImage src={profile.profileImageUrl} size='large' />
          </div>
        </div>

        <div className='flex flex-col gap-6'>
          <div>
            <div className='text-gray-400'>{profile.job}</div>
            <div className='text-xl font-bold'>
              {profile.givenNameEn} {profile.familyNameEn}
            </div>
            <div>{profile.bio}</div>
          </div>

          <div className='flex gap-3 flex-col flex-wrap sm:flex-row-reverse sm:justify-end'>
            {extra}
          </div>
        </div>
      </div>
    </section>
  );
};
