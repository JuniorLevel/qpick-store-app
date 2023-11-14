import { GoLocation } from 'react-icons/go';
import YandexMap from '../ui/yandex-map/YandexMap';
const ContactsItem = () => {
	return (
		<div className='sm-max:mb-5 max-w-[860px] w-full rounded-[30px] shadow-shadow bg-white-bg p-4 mb-10'>
			<h1 className='text-[17px] font-semibold mb-3'>Наш офис</h1>
			<div className='rounded=[10px] mb-3 h-[300px]'>
				<YandexMap
					src={
						'https://yandex.ru/map-widget/v1/?ll=76.826455%2C43.233490&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg2NzI4Nzk2NhJM0prQsNC30LDSm9GB0YLQsNC9LCDQkNC70LzQsNGC0YssINCQ0pvRgdCw0LktM9CQINGI0LDSk9GL0L0g0LDRg9C00LDQvdGLLCA2MiIKDfammUIVT-8sQg%2C%2C&z=17.94'
					}
				/>
			</div>
			<div className='flex gap-3 items-center'>
				<div className='my-auto'>
					<GoLocation />
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
