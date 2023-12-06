import { SlSocialVkontakte } from 'react-icons/sl';
import styles from './../Social.module.scss';
const SocialVk = () => {
	return (
		<a href='https://vk.com' target='_blank' rel='noreferrer'>
			<SlSocialVkontakte width={60} height={60} className={styles.icon} />
		</a>
	);
};

export default SocialVk;
