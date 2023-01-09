import { ComponentProps, FC } from 'react';
import { SocialLinkIcon } from './SocialLinkIcon';

type Props = {
  socialLinks: ComponentProps<typeof SocialLinkIcon>['socialLink'][];
};

export const SocialLinkIconList: FC<Props> = ({ socialLinks }) => {
  return (
    <div className='flex flex-row flex-wrap gap-2'>
      {socialLinks.map((socialLink) => (
        <SocialLinkIcon key={socialLink.name} socialLink={socialLink} />
      ))}
    </div>
  );
};
