import Input from '../../../ui/input/Input';

const OrderForm = () => {
	return (
		<div>
			<div className='flex gap-2'>
				<div>
					<img
						width={25}
						height={25}
						src='/images/location.svg'
						alt='location-icon'
					/>
				</div>
				<p className='mb-3 text-[15px] font-medium'>Адрес доставки</p>
			</div>
			<form className='flex gap-3 flex-wrap'>
				<select></select>
				<Input type='text' placeholder='Улица / Район' classNames='' />
				<Input type='text' placeholder='Дом' classNames='' />
				<Input type='text' placeholder='Подъезд' classNames='' />
				<Input type='text' placeholder='Квартира' classNames='' />
			</form>
		</div>
	);
};

export default OrderForm;
