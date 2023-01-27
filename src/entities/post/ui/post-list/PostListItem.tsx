import Link from 'next/link';
import { FC } from 'react';
import { formatISO, formatPostPublishedTime } from '@/shared/lib/date';
import { Post } from '@/type/api/post';

type Props = {
  post: Post;
};

export const PostListItem: FC<Props> = ({ post }) => {
  return (
    <article>
      <Link
        href={`/posts/${post.slug}`}
        className='block p-4 rounded-md transition-all hover:shadow'
        passHref
      >
        <h4 className='text-xl font-bold'>{post.title}</h4>
        <time
          dateTime={formatISO(post.publishedAt)}
          className='text-sm text-gray-500'
        >
          {formatPostPublishedTime(post.publishedAt)}
        </time>
      </Link>
    </article>
  );
};
