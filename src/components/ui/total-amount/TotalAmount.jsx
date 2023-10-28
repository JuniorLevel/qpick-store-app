import { useSelector } from 'react-redux';
const TotalAmount = () => {
	const totalPrice = useSelector(state => state.prices.totalPrice);
	return (
		<div className='m-w-[350px]'>
			<div className='flex justify-between text-[20px] text-black font-bold'>
				<span>ИТОГО</span>
				<span>{`${totalPrice}$`}</span>
			</div>
		</div>
	);
};

export default TotalAmount;
