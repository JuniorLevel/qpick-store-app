import SocialInst from './social-inst/SocialInst';
import SocialTeleg from './social-teleg/SocialTeleg';
import SocialVk from './social-vk/SocialVk';
import SocialWhats from './social-whats/SocialWhats';

const Social = () => {
	return (
		<div className='flex flex-wrap'>
			<SocialVk />
			<SocialInst />
			<SocialTeleg />
			<SocialWhats />
		</div>
	);
};

export default Social;
