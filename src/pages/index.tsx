import type { InferGetStaticPropsType, NextPage } from 'next';
import React from 'react';
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
import { CommonHeadMeta, WebsiteHeadMeta } from '@/shared/meta';
import { LinkText, Section, DefaultLayout } from '@/shared/ui';

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

      <Section title={<h1>最新の投稿</h1>}>
        <PostList posts={posts.data} />
      </Section>

      <Section title={<h1>アクティブな活動</h1>}>
        <ExperienceSummaryList experiences={experiences} />
        <LinkText href='/about#experiences'>過去の活動を見る</LinkText>
      </Section>

      <Section title={<h1>最近のイベント</h1>}>
        <LifeEventList lifeEvents={lifeEvents} />

        <LinkText href='/about#life-events'>
          過去のライフイベントを見る
        </LinkText>
      </Section>

      <Section title={<h1>得意な技術トップ3</h1>}>
        <SkillRankList skills={skills} />
        <LinkText href='/about#skills'>全ての技術を見る</LinkText>
      </Section>
    </DefaultLayout>
  );
};

export default HomePage;
