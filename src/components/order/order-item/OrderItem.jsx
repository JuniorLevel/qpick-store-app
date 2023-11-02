import Input from '../../ui/input/Input';
import OrderTitle from '../../ui/order-title/OrderTitle';
import YandexMap from '../../ui/yandex-map/YandexMap';
import ButtonSubmit from './../../ui/button-submit/ButtonSubmit';
import TotalAmount from './../../ui/total-amount/TotalAmount';
import OrderForm from './order-form/OrderForm';
import OrderList from './order-list/OrderList';

const OrderItem = () => {
	return (
		<section>
			<div className='flex justify-between'>
				<div className='max-w-[600px] rounded-[30px] shadow-shadow bg-white-bg py-4 px-8 h-full'>
					<div className='flex justify-between mb-3 font-semibold'>
						<p className='text-[17px]'>
							{JSON.parse(localStorage.getItem('selectReceiving')).label}
						</p>
						<span className='text-[15px]'>{`${
							JSON.parse(localStorage.getItem('selectReceiving')).price
						}$`}</span>
					</div>
					<div className='mb-3 h-[300px]'>
						<YandexMap
							src={
								'https://yandex.ru/map-widget/v1/?ll=76.877407%2C43.252906&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCggyNDIwMDYwMRJI0prQsNC30LDSm9GB0YLQsNC9LCDQkNC70LzQsNGC0YssINCV0YHQtdC9INCU0q_QudGB0LXQvdC-0LIg0LrTqdGI0LXRgdGWIgoNq8CZQhUCAy1C&utm_source=share&z=18'
							}
						/>
					</div>
					<OrderForm />
				</div>
				<div>
					<div className='max-w-[450px] rounded-[30px] shadow-shadow bg-white-bg p-4 mb-2'>
						<OrderTitle title='Ваш заказ' />
						<OrderList />
						<TotalAmount />
					</div>
					<div className='max-w-[450px] rounded-[30px] shadow-shadow bg-white-bg p-4 mb-2'>
						<OrderTitle title='Способ оплаты' />
						<div className='flex gap-1 items-center'>
							<img
								width={30}
								height={30}
								src='/images/money-icon.png'
								alt='money-icon'
							/>
							<p className='text-sm font-medium'>Наличными</p>
						</div>
					</div>
					<div className='max-w-[450px] rounded-[30px] shadow-shadow bg-white-bg p-4 mb-2'>
						<OrderTitle title='Номер получателя' />
						<form>
							<Input
								type='text'
								placeholder='+7 ___ ___ ___ __'
								classNames=''
							/>
						</form>
					</div>
					<ButtonSubmit text='Закончить оформление' />
				</div>
			</div>
		</section>
		//TODO: Стилизация select, сделать условие по которому проверяется select с корзины: самовывоз или доставка
	);
};

export default OrderItem;
