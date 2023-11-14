import { MdAttachMoney } from 'react-icons/md';
import { useSelector } from 'react-redux';
import OrderTitle from '../../ui/order-title/OrderTitle';
import YandexMap from '../../ui/yandex-map/YandexMap';
import Success from './../../ui/success/Success';
import TotalAmount from './../../ui/total-amount/TotalAmount';
import OrderForm from './order-form/OrderForm';
import OrderList from './order-list/OrderList';

const OrderItem = () => {
	const isSuccess = useSelector(state => state.products.isSuccess);
	return (
		<section>
			{!isSuccess ? (
				<div className='md-max:flex-col flex justify-between gap-5'>
					<div className='md-max:mx-auto max-w-[600px] rounded-[30px] shadow-shadow bg-white-bg py-4 px-8 h-full'>
						<div className='flex justify-between items-center mb-3 font-semibold'>
							<p className='sm:text-[14px] text-[17px]'>
								{JSON.parse(localStorage.getItem('selectReceiving')).label}
							</p>
							<span className='text-[15px]'>{`${
								JSON.parse(localStorage.getItem('selectReceiving')).price
							}$`}</span>
						</div>
						{JSON.parse(localStorage.getItem('selectReceiving')).value ===
						'delivery' ? (
							<></>
						) : (
							<div className='mb-3 h-[300px]'>
								<YandexMap
									src={
										'https://yandex.ru/map-widget/v1/?ll=76.877407%2C43.252906&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCggyNDIwMDYwMRJI0prQsNC30LDSm9GB0YLQsNC9LCDQkNC70LzQsNGC0YssINCV0YHQtdC9INCU0q_QudGB0LXQvdC-0LIg0LrTqdGI0LXRgdGWIgoNq8CZQhUCAy1C&utm_source=share&z=18'
									}
								/>
							</div>
						)}
						<OrderForm />
					</div>
					<div className='lg-min:max-w-[350px] w-full'>
						<div className='rounded-[30px] shadow-shadow bg-white-bg p-4 mb-2'>
							<OrderTitle title='Ваш заказ' />
							<OrderList />
							<TotalAmount />
						</div>
						<div className='lg-min:max-w-[450px] rounded-[30px] shadow-shadow bg-white-bg p-4 lg-min:mb-2'>
							<OrderTitle title='Способ оплаты' />
							<div className='flex gap-1 items-center'>
								<MdAttachMoney />
								<p className='sm-max:text-[15px] text-sm font-medium'>
									Наличными
								</p>
							</div>
						</div>
					</div>
				</div>
			) : (
				<Success />
			)}
		</section>
	);
};

export default OrderItem;
