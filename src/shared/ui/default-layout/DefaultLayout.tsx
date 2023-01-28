import { FC } from 'react';
import { Profile } from '@/type/api/profile';
import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';

type Props = {
  profile: Profile;
};

export const DefaultLayout: FC<Props> = ({ profile, children }) => {
  return (
    <div className='flex flex-row justify-start sm:justify-center transition-all mx-auto max-w-5xl w-full'>
      <Header profile={profile} />

      <main className='my-0 pt-8 px-4 max-w-main-content'>
        {children}

        <Footer copyRight={`${profile.givenNameEn} ${profile.familyNameEn}`} />
      </main>
    </div>
  );
};
