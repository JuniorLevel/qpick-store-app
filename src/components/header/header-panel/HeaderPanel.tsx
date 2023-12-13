import { FC } from 'react';
import { Link } from 'react-router-dom';
import { CART_ROUTE, FAVORITES_ROUTE } from 'utils/consts.ts';
import CartBtn from '../../ui/cart-btn/CartBtn';
import FavoritesBtn from '../../ui/favorites-btn/FavoritesBtn';

const HeaderPanel: FC = (): JSX.Element => {
	return (
		<nav>
			<div className='flex items-center gap-6 mr-2'>
				<Link to={FAVORITES_ROUTE}>
					<FavoritesBtn />
				</Link>
				<Link to={CART_ROUTE}>
					<CartBtn />
				</Link>
			</div>
		</nav>
	);
};

export default HeaderPanel;
