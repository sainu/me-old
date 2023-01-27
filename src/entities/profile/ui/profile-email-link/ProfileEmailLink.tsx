import Link from 'next/link';
import { FC } from 'react';
import { Icon } from '@/components/Icon';
import { Profile } from '@/type/api/profile';

type Props = {
  profile: Pick<Profile, 'email'>;
};

export const ProfileEmailLink: FC<Props> = ({ profile: { email } }) => {
  return (
    <Link
      href={`mailto:${email}`}
      className='sm:px-4 sm:rounded-full inline-flex items-center gap-1 sm:hover:shadow-md hover:underline sm:hover:no-underline'
      passHref
    >
      <Icon name='envelope' width={16} height={16} />
      {email}
    </Link>
  );
};
