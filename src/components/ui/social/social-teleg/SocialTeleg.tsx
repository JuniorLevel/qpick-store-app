import { SiTelegram } from 'react-icons/si';
import styles from './../Social.module.scss';
const SocialTeleg = () => {
	return (
		<a href='https://telegram.org/' target='_blank' rel='noreferrer'>
			<SiTelegram className={styles.icon} width={60} height={60} />
		</a>
	);
};

export default SocialTeleg;
