import { HOME_ROUTE } from '../../utils/consts';
import Button from './../../components/ui/button/Button';
const NotFoundItem = () => {
	return (
		<section>
			<div className='flex justify-center items-center w-full min-h-[500px]'>
				<div className='w-[400px] text-center'>
					<p className='text-[150px] font-bold'>404</p>
					<p>Страница не найдена!</p>
					<Button text='Вернуться на главную' path={HOME_ROUTE} />
				</div>
			</div>
		</section>
	);
};

export default NotFoundItem;