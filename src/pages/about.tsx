import type { InferGetStaticPropsType, NextPage } from 'next';
import { CommonHeadMeta } from '@/components/CommonHeadMeta';
import { DefaultLayout } from '@/components/DefaultLayout';
import { ExperienceList } from '@/components/ExperienceList';
import { ExperienceListItem } from '@/components/ExperienceListItem';
import { PageTitle } from '@/components/PageTitle';
import { ProfileHeadMeta } from '@/components/ProfileHeadMeta';
import { Section } from '@/components/Section';
import { SectionTitle } from '@/components/SectionTitle';
import { LifeEventList } from '@/entities/life-event';
import { SkillBarList } from '@/entities/skill';
import {
  fetchExperiences,
  fetchProfile,
  fetchSkills,
  fetchSocialLinks,
  fetchLifeEvents,
} from '@/services';
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

      <PageTitle>{title}</PageTitle>

      <Section>
        <section>
          <ProfileCard profile={profile} socialLinks={socialLinks} />
        </section>
      </Section>

      <Section>
        <section>
          <SectionTitle>
            <h2 id='life-events'>Life Events</h2>
          </SectionTitle>

          <LifeEventList lifeEvents={lifeEvents} />
        </section>
      </Section>

      <Section>
        <section>
          <SectionTitle>
            <h2 id='skills'>Skills</h2>
          </SectionTitle>

          <SkillBarList skills={skills} />
        </section>
      </Section>

      <Section>
        <section>
          <SectionTitle>
            <h2 id='experiences'>Experiences</h2>
          </SectionTitle>

          <ExperienceList>
            {experiences.map((experience, i) => (
              <ExperienceListItem key={i} experience={experience} />
            ))}
          </ExperienceList>
        </section>
      </Section>
    </DefaultLayout>
  );
};

export default AboutPage;
