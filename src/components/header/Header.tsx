import { FC } from 'react';
import { Link } from 'react-router-dom';
import { HOME_ROUTE } from '../../utils/consts.js';
import Logo from '../logo/Logo.js';
import Search from '../ui/search/Search.js';
import HeaderPanel from './header-panel/HeaderPanel.js';
const Header: FC = (): JSX.Element => {
	return (
		<header className='sm-max:flex-wrap sm-max:pb-0 flex justify-between items-center w-full py-6'>
			<Link to={HOME_ROUTE}>
				<Logo />
			</Link>
			{window.location.pathname === '/' ? <Search /> : <></>}
			<HeaderPanel />
		</header>
	);
};

export default Header;
