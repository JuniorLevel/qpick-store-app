import { BsCart2 } from 'react-icons/bs';
import { useSelector } from 'react-redux';
const CartBtn = () => {
	const cartList = useSelector(state => state.products.cartList);

	return (
		<div className='flex items-center relative w-[30px] h-[30px]'>
			<BsCart2
				color='black'
				className='hover:fill-orange-text transition ease-in-out duration-0 hover:duration-500'
			/>
			<div className='flex justify-center items-center absolute top-[-15px] right-[-15px] w-[25px] h-[25px] p-[13px] rounded-[50%] bg-orange-text text-[12px] font-medium text-[#ffffff]'>
				{cartList.length}
			</div>
		</div>
	);
};

export default CartBtn;
