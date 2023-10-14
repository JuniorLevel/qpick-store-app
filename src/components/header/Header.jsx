import { Link } from 'react-router-dom';
import Logo from '../logo/Logo';
import { HOME_ROUTE } from './../../utils/consts.js';
import HeaderPanel from './header-panel/HeaderPanel';
const Header = () => {
	return (
		<header className='flex justify-between items-center w-full py-6'>
			<Link to={HOME_ROUTE}>
				<Logo />
			</Link>
			<HeaderPanel />
		</header>
	);
};

export default Header;
