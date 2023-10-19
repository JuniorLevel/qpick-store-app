import Layout from '../components/layout/Layout';
import OrderItem from '../components/order/order-item/OrderItem';
import Title from './../components/ui/title/Title';

const Order = () => {
	return (
		<Layout>
			<Title title='Оформление заказа' />
			<OrderItem />
		</Layout>
	);
};

export default Order;
