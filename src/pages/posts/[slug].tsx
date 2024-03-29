import { DiscussionEmbed } from 'disqus-react';
import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from 'next';
import { ComponentProps } from 'react';
import { fetchPost, fetchPosts, fetchProfile } from '@/services';
import { formatISO, formatPostPublishedTime } from '@/shared/lib/date';
import { ArticleHeadMeta, CommonHeadMeta } from '@/shared/meta';
import { DefaultLayout } from '@/shared/ui';
import { Post } from '@/type/api/post';
import { Profile } from '@/type/api/profile';
import 'zenn-content-css';

type DiscussionEmbedConfig = ComponentProps<typeof DiscussionEmbed>['config'];

type Params = {
  slug: string;
};

type Props = {
  post: Post;
  prevPost: Post | null;
  nextPost: Post | null;
  profile: Profile;
};

export const getStaticProps: GetStaticProps<Props> = async (
  context: GetStaticPropsContext
) => {
  const params = context.params as Params;
  const [post, posts, profile] = await Promise.all([
    fetchPost(params.slug),
    fetchPosts(),
    fetchProfile(),
  ]);
  const postIndex = posts.data.findIndex((p) => p.slug === post.slug);
  const prevPost = posts.data[postIndex + 1] || null;
  const nextPost = posts.data[postIndex - 1] || null;

  return {
    props: {
      post,
      prevPost,
      nextPost,
      profile,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await fetchPosts();
  const paths = posts.data.map((post) => ({ params: { slug: post.slug } }));

  return {
    fallback: false,
    paths,
  };
};

const PostPage: NextPage<Props> = ({ post, prevPost, nextPost, profile }) => {
  const path = `/posts/${post.slug}`;
  const url = `${process.env.NEXT_PUBLIC_SITE_URL}${path}`;
  const disqusConfig: DiscussionEmbedConfig = {
    url,
    identifier: post.slug,
    title: post.title,
  };

  return (
    <DefaultLayout profile={profile}>
      <CommonHeadMeta title={post.title} path={path} />
      <ArticleHeadMeta publishedTime={new Date(post.publishedAt)} />

      <article>
        <h1 className='text-3xl font-bold'>{post.title}</h1>

        <div className='text-gray-400 text-sm font-bold mt-2 mb-4'>
          <time dateTime={formatISO(post.publishedAt)}>
            {formatPostPublishedTime(post.publishedAt)}
          </time>
        </div>

        <div
          className='znc'
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>

      <DiscussionEmbed shortname='sainu-me' config={disqusConfig} />
    </DefaultLayout>
  );
};

export default PostPage;
