import { useState } from 'react';
import Select from 'react-select';
import Input from '../../../ui/input/Input';
import { cities } from './data.js';

const OrderForm = () => {
	const [selectValue, setSelectValue] = useState('moskva');

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
				<Select
					className='w-full'
					options={cities}
					value={
						selectValue ? cities.find(item => item.value === selectValue) : ''
					}
					onChange={selectValue => {
						setSelectValue(selectValue);
					}}
				/>
				<Input type='text' placeholder='Улица / Район' classNames='' />
				<Input type='text' placeholder='Дом' classNames='' />
				<Input type='text' placeholder='Подъезд' classNames='' />
				<Input type='text' placeholder='Квартира' classNames='' />
			</form>
		</div>
	);
};

export default OrderForm;
