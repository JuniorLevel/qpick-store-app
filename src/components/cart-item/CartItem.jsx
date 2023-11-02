import { useInView } from 'react-intersection-observer';
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
	const { ref, inView } = useInView({
		threshold: 1,
	});

	return (
		<section>
			<div ref={ref}>
				<Title title='Корзина' />
			</div>
			{cartList.length ? (
				<div className='flex justify-between gap-[120px]'>
					<div className='max-w-[610px]'>
						{cartList.map(product => (
							<CartCard key={product.id} product={product} />
						))}
						<Delivery />
					</div>
					<div>
						<div
							className={`w-[350px] rounded-[30px] shadow-shadow bg-white-bg p-4 ${
								!inView ? 'sticky top-[15px]' : ''
							}`}
						>
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
