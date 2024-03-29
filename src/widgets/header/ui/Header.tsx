import { useRouter } from 'next/dist/client/router';
import { FC, useState } from 'react';
import { ProfileImage } from '@/entities/profile';
import { Icon } from '@/shared/ui';
import { Profile } from '@/type/api/profile';
import { HeaderNavigationLink } from './HeaderNavigationLink';

type Props = {
  profile: Profile;
};

const navClass =
  'transition-all h-screen w-min max-w-xs' +
  ' fixed top-auto right-0 bottom-0 md:sticky md:top-0 md:right-auto md:bottom-auto' +
  ' p-2 md:px-4 md:py-8' +
  ' inline-flex flex-col-reverse md:flex-col items-center md:items-start flex-end';

const iconProps = { width: 28, height: 28 };
const filledIconProps = Object.assign({}, iconProps, { fill: true });

const navIcons = (pathname: string) => {
  return [
    <HeaderNavigationLink
      key='1'
      href='/'
      active={pathname === '/'}
      icon={<Icon name='home' {...iconProps} />}
      activeIcon={<Icon name='home' {...filledIconProps} />}
    >
      Home
    </HeaderNavigationLink>,
    <HeaderNavigationLink
      key='4'
      href='/about'
      active={pathname === '/about'}
      icon={<Icon name='person' {...iconProps} />}
      activeIcon={<Icon name='person' {...filledIconProps} />}
    >
      About
    </HeaderNavigationLink>,
    <HeaderNavigationLink
      key='2'
      href='/posts/page/1'
      active={pathname.startsWith('/posts/page/')}
      icon={<Icon name='book' {...iconProps} />}
      activeIcon={<Icon name='book' {...filledIconProps} />}
    >
      Posts
    </HeaderNavigationLink>,
  ];
};

const Thumbnail: FC<{
  url: string;
  onClick?: () => void;
}> = ({ url, onClick }) => {
  return (
    <div className='w-full text-center'>
      <div
        className='inline-block cursor-pointer md:cursor-auto mb-0 md:mb-4 w-20 md:w-24 shadow md:shadow-none rounded-full bg-gray-100 p-2'
        style={{ fontSize: '0px' }}
        onClick={() => onClick && onClick()}
      >
        <ProfileImage src={url} size='medium' />
      </div>
    </div>
  );
};

export const Header: FC<Props> = ({ profile }) => {
  const router = useRouter();
  const [hideMenu, setHideMenu] = useState(true);

  const mobileLinkClass = hideMenu
    ? 'animate-nav-link-fade-out animation-forwards'
    : 'animate-nav-link-fade-in animation-forwards';

  return (
    <header className='z-10'>
      <nav className={navClass + ' hidden md:block'}>
        <Thumbnail url={profile.profileImageUrl} />

        {navIcons(router.pathname).map((icon, i) => (
          <div key={i}>{icon}</div>
        ))}
      </nav>

      <nav className={navClass + ' block md:hidden'}>
        <Thumbnail
          url={profile.profileImageUrl}
          onClick={() => setHideMenu(!hideMenu)}
        />

        {navIcons(router.pathname).map((icon, i) => (
          <div key={i} className={mobileLinkClass + ' mb-2'}>
            {icon}
          </div>
        ))}
      </nav>
    </header>
  );
};
