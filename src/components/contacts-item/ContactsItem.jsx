const ContactsItem = () => {
	return (
		<div className='w-[860px] rounded-[30px] shadow-shadow bg-white-bg p-4 mb-10'>
			<h1 className='text-[17px] font-semibold mb-3'>Наш офис</h1>
			<div className='rounded=[10px] mb-3'>
				<a
					href='https://yandex.ru/maps/-/CDa6eY0d'
					target='_blank'
					rel='noreferrer'
				>
					<img className='w-full' src='/images/map2.png' alt='map2.png' />
				</a>
			</div>
			<div className='flex gap-3 items-center'>
				<div className='my-auto'>
					<img src='/images/location.svg' alt='location-icon' />
				</div>
				<div className='flex flex-col'>
					<p className='font-medium text-[15px]'>
						Аксай-3а, 62ф, Алматы, Казахстан
					</p>
					<span className='text-title-color text-[13px] font-medium'>
						3 этаж 35 кабинет
					</span>
				</div>
			</div>
		</div>
	);
};

export default ContactsItem;
