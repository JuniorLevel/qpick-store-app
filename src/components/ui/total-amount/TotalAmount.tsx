import { FC } from 'react';
import { useAppSelector } from './../../../hooks/useStore';
const TotalAmount: FC = (): JSX.Element => {
	const totalPrice = useAppSelector(state => state.prices.totalPrice);
	return (
		<div className='w-full'>
			<div className='sm-max:text-[15px] flex justify-between text-[20px] text-black font-bold w-full text-main-text'>
				<span>ИТОГО</span>
				<span>{`${totalPrice}$`}</span>
			</div>
		</div>
	);
};

export default TotalAmount;
