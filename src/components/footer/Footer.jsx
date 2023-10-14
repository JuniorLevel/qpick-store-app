import { Link } from 'react-router-dom';
import Social from '../ui/social/Social';
import Logo from './../../components/logo/Logo';
import {
	CART_ROUTE,
	CONTACTS_ROUTE,
	FAVORITES_ROUTE,
	SERVICES_ROUTE,
} from './../../utils/consts.js';
const Footer = () => {
	return (
		<footer>
			<div className='bg-white-bg p-7 rounded-t-[30px] shadow-shadow grid grid-cols-4'>
				<ul>
					<li>
						<Logo />
					</li>
				</ul>
				<ul>
					<li>
						<Link to={FAVORITES_ROUTE}>Избранное</Link>
					</li>
					<li>
						<Link to={CART_ROUTE}>Корзина</Link>
					</li>
					<li>
						<Link to={CONTACTS_ROUTE}>Контакты</Link>
					</li>
				</ul>
				<ul>
					<li>
						<Link to={SERVICES_ROUTE}>Условия сервиса</Link>
					</li>
				</ul>
				<Social />
			</div>
		</footer>
	);
};

export default Footer;
