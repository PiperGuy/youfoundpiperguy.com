import type { FC } from 'react';

import LinkButton from '~/components/LinkButton';

type PostEditProps = {
	slug: string;
};

const PostEdit: FC<PostEditProps> = ({ slug }) => {
	const edit = `https://github.com/piperguy/youfoundpiperguy.com/edit/master/content/posts/${slug}.md`;

	return (
		<LinkButton to={edit} reverse>
			💻 edit on github
		</LinkButton>
	);
};

export default PostEdit;
