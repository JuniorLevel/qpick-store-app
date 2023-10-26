import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Select from 'react-select';
import {
	addDeliveryPrice,
	subDeliveryPrice,
} from '../../../features/prices/prices.slice.js';
import { optionsData } from './options.data.js';

const Delivery = () => {
	const [selectValue, setSelectValue] = useState('pickup');
	const [selectObject, setSelectObject] = useState(optionsData[0]);
	const dispatch = useDispatch();

	useEffect(() => {
		setSelectObject(...optionsData.filter(item => item.value === selectValue));
	}, [selectValue]);

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
						src={selectObject.img}
						alt={selectObject.alt}
					/>
					<Select
						className='text-[15px]'
						value={
							selectValue
								? optionsData.find(item => item.value === selectValue)
								: ''
						}
						options={optionsData}
						onChange={selectValue => {
							setSelectValue(selectValue.value);
							if (selectValue.value === 'delivery') {
								dispatch(addDeliveryPrice(50));
							}
							if (selectValue.value === 'pickup') {
								dispatch(subDeliveryPrice(50));
							}
						}}
					/>
				</div>
				<span className='text-sm font-semibold'>{`${selectObject.price}$`}</span>
			</div>
		</div>
	);
};

export default Delivery;
