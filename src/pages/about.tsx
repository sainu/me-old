import type { InferGetStaticPropsType, NextPage } from 'next';
import { CommonHeadMeta } from '@/components/CommonHeadMeta';
import { DefaultLayout } from '@/components/DefaultLayout';
import { EmailWithLink } from '@/components/EmailWithLink';
import { ExperienceList } from '@/components/ExperienceList';
import { ExperienceListItem } from '@/components/ExperienceListItem';
import { PageTitle } from '@/components/PageTitle';
import { ProfileHeadMeta } from '@/components/ProfileHeadMeta';
import { ProfileImage } from '@/components/ProfileImage';
import { Section } from '@/components/Section';
import { SectionTitle } from '@/components/SectionTitle';
import { SkillBarList } from '@/components/SkillBarList';
import { SkillBarListItem } from '@/components/SkillBarListItem';
import { LifeEventList } from '@/entities/life-event';
import { SocialLinkIconList } from '@/entities/social-link/ui';
import {
  fetchExperiences,
  fetchProfile,
  fetchSkills,
  fetchSocialLinks,
  fetchLifeEvents,
} from '@/services';

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
          <div className='flex flex-col sm:flex-row mt-12 gap-6'>
            <div className='shrink-0'>
              <div className='flex sm:items-start'>
                <ProfileImage
                  url={profile.profileImageUrl}
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
                <EmailWithLink email={profile.email} />

                <SocialLinkIconList socialLinks={socialLinks} />
              </div>
            </div>
          </div>
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

          <SkillBarList>
            {skills.map((skill) => (
              <SkillBarListItem key={skill.name} skill={skill} />
            ))}
          </SkillBarList>
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
