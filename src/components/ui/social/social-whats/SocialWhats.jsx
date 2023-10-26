import { ImWhatsapp } from 'react-icons/im';
import styles from './../Social.module.scss';
const SocialWhats = () => {
	return (
		<a href='https://web.whatsapp.com/' target='_blank' rel='noreferrer'>
			<ImWhatsapp className={styles.icon} width={60} height={60} />
		</a>
	);
};

export default SocialWhats;
