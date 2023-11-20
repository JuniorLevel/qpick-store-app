import { Link } from 'react-router-dom';
import styles from '../Footer.module.scss';
const FooterItem = ({ item }) => {
	return (
		<li className={styles.footer__item}>
			<Link to={item.link}>{item.text}</Link>
		</li>
	);
};

export default FooterItem;
