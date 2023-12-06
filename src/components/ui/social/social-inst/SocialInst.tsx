import { TiSocialInstagram } from 'react-icons/ti';
import styles from './../Social.module.scss';

const SocialInst = () => {
	return (
		<a href='https://www.instagram.com' target='_blank' rel='noreferrer'>
			<TiSocialInstagram width={60} height={60} className={styles.icon} />
		</a>
	);
};

export default SocialInst;
