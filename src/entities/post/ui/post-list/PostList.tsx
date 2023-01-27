import { ComponentProps, FC } from 'react';
import { PostListItem } from './PostListItem';

type Props = {
  gapClass?: string;
  posts: ComponentProps<typeof PostListItem>['post'][];
};

export const PostList: FC<Props> = ({ gapClass = 'gap-1', posts }) => {
  return (
    <div className={`flex flex-col ${gapClass}`}>
      {posts.map((post) => (
        <PostListItem key={post.slug} post={post} />
      ))}
    </div>
  );
};
