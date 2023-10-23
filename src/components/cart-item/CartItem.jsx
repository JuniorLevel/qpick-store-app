import { useSelector } from 'react-redux';
import { ORDER_ROUTE } from '../../utils/consts';
import Button from '../ui/button/Button';
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
								<div className='m-w-[350px] '>
									<div className='flex justify-between text-[20px] text-black'>
										<span>ИТОГО</span>
										<span>1200₽</span>
									</div>
								</div>
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
