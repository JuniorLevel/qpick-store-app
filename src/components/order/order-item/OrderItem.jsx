import Input from '../../ui/input/Input';
import OrderTitle from '../../ui/order-title/OrderTitle';
import ButtonSubmit from './../../ui/button-submit/ButtonSubmit';
import OrderForm from './order-form/OrderForm';

const OrderItem = () => {
	return (
		<section>
			<div className='flex justify-between'>
				<div className='max-w-[600px] rounded-[30px] shadow-shadow bg-white-bg py-4 px-8'>
					<div className='flex justify-between mb-3 font-semibold'>
						<p className='text-[17px]'>Доставка курьером</p>
						<span className='text-[15px]'>500₽</span>
					</div>
					<div className='mb-3'>
						<img className='w-full' src='/images/map3.png' alt='map3.png' />
					</div>
					<OrderForm />
				</div>
				<div>
					<div className='max-w-[450px] rounded-[30px] shadow-shadow bg-white-bg p-4 mb-2'>
						<OrderTitle title='Ваш заказ' />
						<ul>
							<li className='flex justify-between items-center text-[18px] font-medium'>
								<span>1x</span>
								<p className='flex-1 px-5 text-[16px] font-bold'>
									Наушники Apple BYZ S852I
								</p>
								<span className=''>3 200₽</span>
							</li>
						</ul>
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
