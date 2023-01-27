import { InferGetStaticPropsType } from 'next';
import { FC } from 'react';
import { DefaultLayout } from '@/components/DefaultLayout';
import { EmbededTwitterTimeline } from '@/components/EmbededTwitterTimeline';
import { MoreLink } from '@/components/MoreLink';
import { QiitaPostList } from '@/components/QiitaPostList';
import { QiitaPostListItem } from '@/components/QiitaPostListItem';
import { fetchProfile, fetchQiitaPosts } from '@/services';
import { ArticleHeadMeta, CommonHeadMeta } from '@/shared/meta';
import { Section, PageTitle } from '@/shared/ui';

export const getStaticProps = async () => {
  const [profile, qiitaPosts] = await Promise.all([
    fetchProfile(),
    fetchQiitaPosts(),
  ]);

  return {
    props: {
      profile,
      qiitaPosts: qiitaPosts.slice(0, 5),
    },
  };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const pageTitle = 'アクティビティ';

const ActivitiesPage: FC<Props> = ({ profile, qiitaPosts }) => {
  return (
    <DefaultLayout profile={profile}>
      <CommonHeadMeta title={pageTitle} path='/activities' />
      <ArticleHeadMeta />

      <PageTitle title={<h1>{pageTitle}</h1>} />

      <Section title={<h2>Twitter</h2>}>
        <EmbededTwitterTimeline />
      </Section>

      <Section title={<h2>Qiita</h2>}>
        <QiitaPostList>
          {qiitaPosts.map((qiitaPost) => (
            <article key={qiitaPost.id}>
              <QiitaPostListItem qiitaPost={qiitaPost} />
            </article>
          ))}
        </QiitaPostList>

        <MoreLink href='https://qiita.com/sainu'>他の投稿を見る</MoreLink>
      </Section>
    </DefaultLayout>
  );
};

export default ActivitiesPage;
