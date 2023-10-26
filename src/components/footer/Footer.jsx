import { Link } from 'react-router-dom';
import Social from '../ui/social/Social';
import Logo from './../../components/logo/Logo';
import {
	CART_ROUTE,
	CONTACTS_ROUTE,
	FAVORITES_ROUTE,
	HOME_ROUTE,
	SERVICES_ROUTE,
} from './../../utils/consts.js';
import styles from './Footer.module.scss';
const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className='bg-white-bg p-7 rounded-t-[30px] shadow-shadow grid grid-cols-3'>
				<Link to={HOME_ROUTE}>
					<Logo />
				</Link>
				<ul className={styles.footer__list}>
					<li className={styles.footer__listItem}>
						<Link to={FAVORITES_ROUTE}>Избранное</Link>
					</li>
					<li className={styles.footer__listItem}>
						<Link to={CART_ROUTE}>Корзина</Link>
					</li>
					<li className={styles.footer__listItem}>
						<Link to={CONTACTS_ROUTE}>Контакты</Link>
					</li>
				</ul>
				<ul className={styles.footer__list}>
					<li className={styles.footer__listItem}>
						<Link to={SERVICES_ROUTE}>Условия сервиса</Link>
					</li>
					<Social />
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
