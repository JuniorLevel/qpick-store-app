import { useSelector } from 'react-redux';
import OrderListItem from './order-list-item/OrderListItem';
const OrderList = () => {
	const cartList = useSelector(state => state.products.cartList);
	return (
		<ul className='mb-5'>
			{cartList.map(item => (
				<OrderListItem key={item.id} item={item} />
			))}
		</ul>
	);
};

export default OrderList;
