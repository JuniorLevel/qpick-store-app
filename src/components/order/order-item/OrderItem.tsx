import { FC, useEffect, useRef, useState } from 'react';
import { MdAttachMoney } from 'react-icons/md';
import { CSSTransition } from 'react-transition-group';
import OrderTitle from '../../ui/order-title/OrderTitle';
import Success from '../../ui/success/Success';
import TotalAmount from '../../ui/total-amount/TotalAmount';
import YandexMap from '../../ui/yandex-map/YandexMap';
import { useAppSelector } from './../../../hooks/useStore';
import OrderForm from './order-form/OrderForm';
import OrderList from './order-list/OrderList';

const OrderItem: FC = (): JSX.Element => {
	const isSuccess = useAppSelector(state => state.products.isSuccess);
	const [show, setShow] = useState<boolean>(false);
	const nodeRef = useRef<HTMLElement | null>(null);
	useEffect(() => {
		setShow(!show);
	}, []);

	return (
		<CSSTransition
			nodeRef={nodeRef}
			in={show}
			timeout={3000}
			classNames='main-animation-scale'
			unmountOnExit
		>
			<section ref={nodeRef}>
				{!isSuccess && localStorage.getItem('selectReceiving') ? (
					<div className='md-max:flex-col flex justify-between gap-5'>
						<div className='md-max:mx-auto max-w-[600px] rounded-[30px] shadow-shadow py-4 px-8 w-full h-full bg-block-color-bg border-[1px]'>
							<div className='flex justify-between items-center mb-3 font-semibold'>
								<p className='sm-max:text-[14px] text-[17px]'>
									{
										JSON.parse(localStorage.getItem('selectReceiving') || '{}')
											.label
									}
								</p>
								<span className='text-[15px]'>{`${
									JSON.parse(localStorage.getItem('selectReceiving') || '{}')
										.price
								}$`}</span>
							</div>
							{JSON.parse(localStorage.getItem('selectReceiving') || '{}')
								.value === 'delivery' ? (
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
							<div className='rounded-[30px] shadow-shadow bg-block-color-bg border-[1px] p-4 mb-2'>
								<OrderTitle title='Ваш заказ' />
								<OrderList />
								<TotalAmount />
							</div>
							<div className='lg-min:max-w-[450px] lg-min:mb-2 rounded-[30px] shadow-shadow bg-block-color-bg border-[1px] p-4'>
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
		</CSSTransition>
	);
};

export default OrderItem;
