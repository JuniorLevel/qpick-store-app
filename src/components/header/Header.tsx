import Logo from 'components/logo/Logo';
import Search from 'components/ui/search/Search.js';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { HOME_ROUTE } from 'utils/consts.ts';
import HeaderPanel from './header-panel/HeaderPanel';
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
