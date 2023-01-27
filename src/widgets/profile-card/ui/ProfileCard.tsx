import { ComponentProps, FC } from 'react';
import {
  ProfileCard as ProfileCardEntity,
  ProfileEmailLink,
} from '@/entities/profile';
import { SocialLinkIconList } from '@/entities/social-link';

type Profile = ComponentProps<typeof ProfileCardEntity>['profile'] &
  ComponentProps<typeof ProfileEmailLink>['profile'];
type SocialLinks = ComponentProps<typeof SocialLinkIconList>['socialLinks'];

type Props = {
  profile: Profile;
  socialLinks: SocialLinks;
};

export const ProfileCard: FC<Props> = ({ profile, socialLinks }) => {
  return (
    <ProfileCardEntity
      profile={profile}
      extra={[
        <ProfileEmailLink key='email-link' profile={profile} />,
        <SocialLinkIconList key='social-links' socialLinks={socialLinks} />,
      ]}
    />
  );
};
