import { InferGetStaticPropsType } from 'next';
import { FC } from 'react';
import { DefaultLayout } from '@/components/DefaultLayout';
import { EmbededTwitterTimeline } from '@/components/EmbededTwitterTimeline';
import { fetchProfile } from '@/services';
import { ArticleHeadMeta, CommonHeadMeta } from '@/shared/meta';
import { Section, PageTitle, LinkText } from '@/shared/ui';

export const getStaticProps = async () => {
  const [profile] = await Promise.all([fetchProfile()]);

  return {
    props: {
      profile,
    },
  };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const pageTitle = 'アクティビティ';

const ActivitiesPage: FC<Props> = ({ profile }) => {
  return (
    <DefaultLayout profile={profile}>
      <CommonHeadMeta title={pageTitle} path='/activities' />
      <ArticleHeadMeta />

      <PageTitle title={<h1>{pageTitle}</h1>} />

      <Section title={<h2>Twitter</h2>}>
        <EmbededTwitterTimeline />
      </Section>
    </DefaultLayout>
  );
};

export default ActivitiesPage;
