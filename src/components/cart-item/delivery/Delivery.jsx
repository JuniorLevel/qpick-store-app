import Select from 'react-select';

const Delivery = () => {
	const options = [
		{ value: 'delivery', label: 'Доставка курьером' },
		{ value: 'pickup', label: 'Самовывоз' },
	];

	return (
		<div className='rounded-[30px] bg-white-bg shadow-shadow p-4'>
			<h2 className='mb-4 text-[black] text-[20px] font-semibold'>Доставка</h2>
			<div>
				<a href='https://yandex.ru/maps/-/CDa6eY0d'>
					<img src='/images/map.png' alt='map' />
				</a>
			</div>
			<div className='mt-4 flex justify-between items-center'>
				<div className='flex gap-3'>
					<img width={25} height={25} src='/images/car.svg' alt='car' />
					<img width={30} height={30} src='/images/gift.svg' alt='gift' />
					<Select className='text-[15px]' options={options} />
				</div>
				<span className='text-sm font-semibold'>500₽</span>
			</div>
		</div>
	);
	//TODO: Стилизация select, отслеживание изменений select
};

export default Delivery;
