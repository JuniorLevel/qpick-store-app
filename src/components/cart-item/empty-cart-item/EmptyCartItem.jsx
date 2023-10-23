import { HOME_ROUTE } from '../../../utils/consts';
import Button from './../../ui/button/Button';

const EmptyCartItem = () => {
	return (
		<div className='mx-auto w-[400px]'>
			<div className='flex justify-center'>
				<img
					className='m-w-[400px] h-[315px]'
					src='/public/images/empty-cart.png'
					alt='empty-cart'
				/>
			</div>
			<div className='text-center mt-7'>
				<p className='text-[30px] font-medium'>Корзина пуста</p>
				<p className='text-title-color text-[20px] font-medium'>
					Но это никогда не поздно исправить! :)
				</p>
				<Button text='В каталог товаров' path={HOME_ROUTE} />
			</div>
		</div>
	);
};

export default EmptyCartItem;
