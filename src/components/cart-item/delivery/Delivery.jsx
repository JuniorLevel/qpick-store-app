import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import {
	addDeliveryPrice,
	subDeliveryPrice,
} from '../../../features/prices/prices.slice.js';
import { optionsData } from './options.data.js';

const Delivery = () => {
	const [selectValue, setSelectValue] = useState(
		localStorage.getItem('selectReceiving')
			? JSON.parse(localStorage.getItem('selectReceiving'))
			: optionsData.find(item => item.value === 'pickup')
	);
	const dispatch = useDispatch();
	const totalPrice = useSelector(state => state.prices.totalPrice);

	useEffect(() => {
		localStorage.setItem('selectReceiving', JSON.stringify(selectValue));
	}, []);

	return (
		<div className='rounded-[30px] bg-white-bg shadow-shadow p-4'>
			<h2 className='mb-4 text-[black] text-[20px] font-semibold'>Доставка</h2>
			<div>
				<a
					href='https://yandex.ru/maps/-/CDa6eY0d'
					target='_blank'
					rel='noreferrer'
				>
					<img src='/images/map.png' alt='map' />
				</a>
			</div>
			<div className='mt-4 flex justify-between items-center'>
				<div className='flex gap-3'>
					<img
						width={30}
						height={30}
						src={selectValue.img}
						alt={selectValue.alt}
					/>
					<Select
						className='text-[15px]'
						value={selectValue}
						options={optionsData}
						onChange={selectValue => {
							setSelectValue(selectValue);
							localStorage.setItem(
								'selectReceiving',
								JSON.stringify(selectValue)
							);
							if (selectValue.value === 'delivery') {
								dispatch(addDeliveryPrice(50));
							}
							if (selectValue.value === 'pickup') {
								dispatch(subDeliveryPrice(50));
							}
						}}
					/>
				</div>
				<span className='text-sm font-semibold'>{`${selectValue.price}$`}</span>
			</div>
		</div>
	);
};

export default Delivery;
