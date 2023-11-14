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
				<>
					<div className='sm:flex-col md-max:gap-5 lg:gap-[30px] flex justify-between gap-[120px]'>
						<div className='sm:mx-auto sm:max-w-[320px] max-w-[610px] w-full'>
							{cartList.map(product => (
								<CartCard key={product.id} product={product} />
							))}
						</div>
						<div>
							<div
								className={`sm:mb-10 sm:w-full md:w-[300px] w-[350px] rounded-[30px] shadow-shadow bg-white-bg p-4 ${
									!inView ? 'sticky top-[15px]' : ''
								}`}
							>
								<TotalAmount />
								<Button text='Перейти к оформлению' path={ORDER_ROUTE} />
							</div>
						</div>
					</div>
					<Delivery />
				</>
			) : (
				<EmptyItem title='Корзина пуста' />
			)}
		</section>
	);
};

export default CartItem;
