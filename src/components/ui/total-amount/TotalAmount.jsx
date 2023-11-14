import { useSelector } from 'react-redux';
const TotalAmount = () => {
	const totalPrice = useSelector(state => state.prices.totalPrice);
	return (
		<div className='w-full'>
			<div className='sm-max:text-[15px] flex justify-between text-[20px] text-black font-bold w-full'>
				<span>ИТОГО</span>
				<span>{`${totalPrice}$`}</span>
			</div>
		</div>
	);
};

export default TotalAmount;
