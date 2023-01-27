import Image from 'next/image';
import { FC } from 'react';
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
            <Image
              className='rounded-full'
              src={profile.profileImageUrl}
              alt='プロフィール画像'
              width={100}
              height={100}
            />
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
