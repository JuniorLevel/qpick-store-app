import { useSelector } from 'react-redux';
import { ORDER_ROUTE } from '../../utils/consts';
import Button from '../ui/button/Button';
import TotalAmount from '../ui/total-amount/TotalAmount';
import EmptyItem from './../../components/ui/empty-item/EmptyItem';
import Title from './../ui/title/Title';
import CartCard from './cart-card/CartCard';
import Delivery from './delivery/Delivery';

const CartItem = () => {
	const cartList = useSelector(state => state.products.cartList);

	return (
		<section>
			<Title title='Корзина' />
			{cartList.length ? (
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
			) : (
				<EmptyItem title='Корзина пуста' />
			)}
		</section>
	);
};

export default CartItem;
