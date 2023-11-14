import { HOME_ROUTE } from '../../../utils/consts';
import Button from '../button/Button';

const EmptyItem = ({ title }) => {
	return (
		<div className='mx-auto max-w-[400px]'>
			<div className='flex justify-center'>
				<img
					className='w-full h-full object-cover'
					src='/images/empty-cart.png'
					alt='empty-cart'
				/>
			</div>
			<div className='text-center mt-7'>
				<p className='mb-4 text-[30px] font-medium'>{title}</p>
				<p className='text-title-color text-[20px] font-medium'>
					Но это никогда не поздно исправить! :)
				</p>
				<Button text='В каталог товаров' path={HOME_ROUTE} />
			</div>
		</div>
	);
};

export default EmptyItem;
