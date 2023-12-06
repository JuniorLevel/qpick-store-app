import { FC } from 'react';

interface IError {
	name: string;
	message: string;
}

interface IErrorProps {
	error: IError;
}

const Error: FC<IErrorProps> = ({ error }): JSX.Element => {
	return (
		<div className='sm-max:text-[20px] flex flex-col items-center justify-center h-[50vh] w-full'>
			<div className='text-center'>В ходе работы с сайтом возникла ошибка!</div>
			<div>Название ошибки: {error.name}</div>
			<div>Описание ошибки: {error.message}</div>
			<div>
				Попробуйте{' '}
				<span
					onClick={() => location.reload()}
					className='hover:text-hover-color hover:cursor-pointer'
				>
					перезагрузить страницу
				</span>{' '}
				или зайти позже
			</div>
		</div>
	);
};

export default Error;
