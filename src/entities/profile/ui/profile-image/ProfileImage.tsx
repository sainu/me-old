import Image from 'next/image';
import { FC } from 'react';

type Size = 'medium' | 'large';

type Props = {
  size: Size;
  src: string;
};

const sizeMap: Record<Size, number> = {
  medium: 96, // 16 * 6
  large: 128, // 16 * 8
};

export const ProfileImage: FC<Props> = ({ size, src }) => {
  return (
    <Image
      className='rounded-full'
      src={src}
      alt='プロフィール画像'
      width={sizeMap[size]}
      height={sizeMap[size]}
    />
  );
};
