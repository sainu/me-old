import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { SocialLink } from '@/type/api/socialLink';

type Props = {
  socialLink: SocialLink;
};

export const SocialIconLink: FC<Props> = ({ socialLink }) => {
  return (
    <Link
      href={socialLink.url}
      target='_blank'
      className='flex items-center rounded-full hover:shadow-md'
      passHref
    >
      <Image
        alt={socialLink.name}
        src={socialLink.iconUrl}
        width={32}
        height={32}
        className='rounded-full'
      />
    </Link>
  );
};
