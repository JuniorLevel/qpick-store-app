import { FC } from 'react';
import { useAppSelector } from './../../../../hooks/useStore';
import OrderListItem from './order-list-item/OrderListItem';
const OrderList: FC = (): JSX.Element => {
	const cartList = useAppSelector(state => state.products.cartList);
	return (
		<ul className='mb-5'>
			{cartList.map(item => (
				<OrderListItem key={item.id} item={item} />
			))}
		</ul>
	);
};

export default OrderList;
