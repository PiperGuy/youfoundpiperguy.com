import type { FC } from 'react';

import SocialLink from '~/components/SocialLink';

const Footer: FC = () => {
	return (
		<footer className='grid grid-flow-col content-center justify-center gap-5 pb-20 pt-28'>
			<SocialLink platform='github' />
			<SocialLink platform='twitter' />
			<SocialLink platform='instagram' />
		</footer>
	);
};

export default Footer;
