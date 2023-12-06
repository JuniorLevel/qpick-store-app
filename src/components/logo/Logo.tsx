import { FC } from 'react';

const Logo: FC = (): JSX.Element => {
	return (
		<div>
			<div className='w-full hover:cursor-pointer'>
				<span className='text-main-text font-[Montserrat] text-[25px] hover:text-hover-color font-bold'>
					QPICK
				</span>
			</div>
		</div>
	);
};

export default Logo;
