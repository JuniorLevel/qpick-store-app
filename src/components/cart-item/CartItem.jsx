import { useSelector } from 'react-redux';
import { ORDER_ROUTE } from '../../utils/consts';
import Button from '../ui/button/Button';
import TotalAmount from '../ui/total-amount/TotalAmount';
import Title from './../ui/title/Title';
import CartCard from './cart-card/CartCard';
import Delivery from './delivery/Delivery';
import EmptyCartItem from './empty-cart-item/EmptyCartItem';

const CartItem = () => {
	const cartList = useSelector(state => state.products.cartList);

	return (
		<section>
			{cartList.length ? (
				<div>
					<Title title='Корзина' />
					<div className='flex justify-between gap-[120px]'>
						<div className='w-[630px]'>
							{cartList.map(product => (
								<CartCard key={product.id} product={product} />
							))}
							<Delivery />
						</div>
						<div>
							<div className='w-[350px] rounded-[30px] shadow-shadow bg-white-bg p-4'>
								<TotalAmount />
								<Button text='Перейти к оформлению' path={ORDER_ROUTE} />
							</div>
						</div>
					</div>
				</div>
			) : (
				<EmptyCartItem />
			)}
		</section>
	);
};

export default CartItem;
