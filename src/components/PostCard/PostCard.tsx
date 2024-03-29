import Link from '~/components/Link';
import type { FC } from 'react';

import PostMeta from '~/components/PostMeta';
import type { PostFrontmatter } from '~/types/post';

type PostCardProps = {
	post: PostFrontmatter;
};

const PostCard: FC<PostCardProps> = ({ post }) => {
	return (
		<div className='rounded border-3 border-black px-8 py-8 shadow-box duration-300 hover:shadow-none dark:border-white dark:shadow-box-white hover:dark:shadow-none'>
			<h1 className='mb-10 font-heading text-3xl font-semibold max-[750px]:text-2xl'>
				<Link to={`/blog/${post.slug}`} className='transition duration-300 hover:text-red-400'>
					{post.title}
				</Link>
			</h1>

			<PostMeta date={post.date} tags={post.tags} topic={post.topic} />
		</div>
	);
};

export default PostCard;
