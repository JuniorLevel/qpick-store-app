import { FC } from 'react';
import SocialInst from './social-inst/SocialInst';
import SocialTeleg from './social-teleg/SocialTeleg';
import SocialVk from './social-vk/SocialVk';
import SocialWhats from './social-whats/SocialWhats';

const Social: FC = (): JSX.Element => {
	return (
		<div className='flex flex-wrap gap-5 mt-8'>
			<SocialVk />
			<SocialInst />
			<SocialTeleg />
			<SocialWhats />
		</div>
	);
};

export default Social;
