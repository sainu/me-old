import type { InferGetStaticPropsType, NextPage } from 'next';
import React from 'react';
import { CommonHeadMeta } from '@/components/CommonHeadMeta';
import { DefaultLayout } from '@/components/DefaultLayout';
import { MoreLink } from '@/components/MoreLink';
import { Section } from '@/components/Section';
import { SectionTitle } from '@/components/SectionTitle';
import { WebsiteHeadMeta } from '@/components/WebsiteHeadMeta';
import { ExperienceSummaryList } from '@/entities/experience';
import { LifeEventList } from '@/entities/life-event';
import { PostList } from '@/entities/post';
import { SkillRankList } from '@/entities/skill';
import {
  fetchExperiences,
  fetchLifeEvents,
  fetchPosts,
  fetchProfile,
  fetchSkills,
} from '@/services';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticProps = async () => {
  const [profile, posts, skills, experiences, lifeEvents] = await Promise.all([
    fetchProfile(),
    fetchPosts({ perPage: 5 }),
    fetchSkills({ orders: '-score' }),
    fetchExperiences({ orders: '-startDate' }),
    fetchLifeEvents(),
  ]);

  return {
    props: {
      profile,
      posts: posts,
      skills: skills,
      experiences: experiences.filter((e) => e.endDate === null),
      lifeEvents: lifeEvents.slice(0, 3),
    },
  };
};

const HomePage: NextPage<Props> = ({
  profile,
  posts,
  skills,
  experiences,
  lifeEvents,
}) => {
  return (
    <DefaultLayout profile={profile}>
      <CommonHeadMeta path='/' />
      <WebsiteHeadMeta />

      <Section>
        <section>
          <SectionTitle>
            <h1>最新の投稿</h1>
          </SectionTitle>

          <PostList posts={posts.data} />
        </section>
      </Section>

      <Section>
        <section>
          <SectionTitle>
            <h1>アクティブな活動</h1>
          </SectionTitle>

          <ExperienceSummaryList experiences={experiences} />

          <MoreLink href='/about#experiences'>過去の活動を見る</MoreLink>
        </section>
      </Section>

      <Section>
        <section>
          <SectionTitle>
            <h1>最近のイベント</h1>
          </SectionTitle>

          <LifeEventList lifeEvents={lifeEvents} />

          <MoreLink href='/about#life-events'>
            過去のライフイベントを見る
          </MoreLink>
        </section>
      </Section>

      <Section>
        <section>
          <SectionTitle>
            <h1>得意な技術トップ3</h1>
          </SectionTitle>
          <SkillRankList skills={skills} />

          <MoreLink href='/about#skills'>全ての技術を見る</MoreLink>
        </section>
      </Section>
    </DefaultLayout>
  );
};

export default HomePage;
