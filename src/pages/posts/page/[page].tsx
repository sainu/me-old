import { GetStaticPropsContext, InferGetStaticPropsType, NextPage } from 'next';
import React from 'react';
import { DefaultLayout } from '@/components/DefaultLayout';
import { PageTitle } from '@/components/PageTitle';
import { PostList } from '@/entities/post';
import { fetchPosts, fetchProfile } from '@/services';
import { ArticleHeadMeta, CommonHeadMeta } from '@/shared/meta';
import { Pagination } from '@/widgets/pagination';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticProps = async (context: GetStaticPropsContext) => {
  let page = Number((context.params || {}).page);
  page = page > 1 ? page : 1;

  const responses = await Promise.all([fetchProfile(), fetchPosts({ page })]);

  return {
    props: {
      profile: responses[0],
      posts: responses[1],
      currentPage: page,
    },
  };
};

export const getStaticPaths = async () => {
  const posts = await fetchPosts();
  const totalPages = posts.meta.totalPages;
  const paths = [];
  for (let i = 0; i < totalPages; i++) {
    paths.push({ params: { page: (i + 1).toString() } });
  }
  return {
    paths: paths,
    fallback: false,
  };
};

const pageTitle = 'ブログ';

const PostsPage: NextPage<Props> = ({ profile, posts, currentPage }) => {
  return (
    <DefaultLayout profile={profile}>
      <CommonHeadMeta title={pageTitle} path='/posts' />
      <ArticleHeadMeta />

      <PageTitle>
        <h1>{pageTitle}</h1>
      </PageTitle>

      <PostList gapClass='gap-4' posts={posts.data} />

      <Pagination
        totalCount={posts.meta.totalCount}
        perPage={posts.meta.perPage}
        current={currentPage}
      />
    </DefaultLayout>
  );
};

export default PostsPage;
