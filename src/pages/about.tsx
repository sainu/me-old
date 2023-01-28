import type { InferGetStaticPropsType, NextPage } from 'next';
import { ExperienceList } from '@/entities/experience';
import { LifeEventList } from '@/entities/life-event';
import { SkillBarList } from '@/entities/skill';
import {
  fetchExperiences,
  fetchProfile,
  fetchSkills,
  fetchSocialLinks,
  fetchLifeEvents,
} from '@/services';
import { CommonHeadMeta, ProfileHeadMeta } from '@/shared/meta';
import { Section, PageTitle, DefaultLayout } from '@/shared/ui';
import { ProfileCard } from '@/widgets/profile-card';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticProps = async () => {
  const [profile, socialLinks, skills, experiences, lifeEvents] =
    await Promise.all([
      fetchProfile(),
      fetchSocialLinks(),
      fetchSkills({ orders: '-score' }),
      fetchExperiences({ orders: '-startDate' }),
      fetchLifeEvents(),
    ]);

  return {
    props: {
      profile,
      socialLinks,
      skills,
      experiences,
      lifeEvents,
    },
  };
};

const title = 'About';

const AboutPage: NextPage<Props> = ({
  profile,
  socialLinks,
  skills,
  experiences,
  lifeEvents,
}) => {
  return (
    <DefaultLayout profile={profile}>
      <CommonHeadMeta title={title} path='/about' />
      <ProfileHeadMeta
        firstName={profile.givenNameKanji}
        lastName={profile.familyNameKanji}
        username={profile.nickname}
      />

      <PageTitle title={title} />

      <Section>
        <ProfileCard profile={profile} socialLinks={socialLinks} />
      </Section>

      <Section title={<h2 id='life-events'>Life Events</h2>}>
        <LifeEventList lifeEvents={lifeEvents} />
      </Section>

      <Section title={<h2 id='skills'>Skills</h2>}>
        <SkillBarList skills={skills} />
      </Section>

      <Section title={<h2 id='experiences'>Experiences</h2>}>
        <ExperienceList experiences={experiences} />
      </Section>
    </DefaultLayout>
  );
};

export default AboutPage;
