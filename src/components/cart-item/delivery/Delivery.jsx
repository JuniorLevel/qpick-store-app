import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import {
	addDeliveryPrice,
	subDeliveryPrice,
} from '../../../features/prices/prices.slice.js';
import YandexMap from './../../ui/yandex-map/YandexMap';
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
			<div className='h-[300px]'>
				<YandexMap
					src={
						'https://yandex.ru/map-widget/v1/?ll=76.877407%2C43.252906&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCggyNDIwMDYwMRJI0prQsNC30LDSm9GB0YLQsNC9LCDQkNC70LzQsNGC0YssINCV0YHQtdC9INCU0q_QudGB0LXQvdC-0LIg0LrTqdGI0LXRgdGWIgoNq8CZQhUCAy1C&utm_source=share&z=18'
					}
				/>
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
