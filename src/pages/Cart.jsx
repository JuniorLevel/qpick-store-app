import { useEffect } from 'react';
import CartItem from '../components/cart-item/CartItem';
import Layout from './../components/layout/Layout';

const Cart = () => {
	useEffect(() => {
		window.scroll(0, 0);
	}, []);

	return (
		<Layout>
			<CartItem />
		</Layout>
	);
};

export default Cart;
