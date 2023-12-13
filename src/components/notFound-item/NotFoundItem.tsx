import Button from 'components/ui/button/Button';
import { FC } from 'react';
import { HOME_ROUTE } from 'utils/consts.ts';

const NotFoundItem: FC = (): JSX.Element => {
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
