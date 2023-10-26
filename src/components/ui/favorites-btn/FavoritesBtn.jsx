import { PiHeartStraightLight } from 'react-icons/pi';
import { useSelector } from 'react-redux';

const FavoritesBtn = () => {
	const favoritesList = useSelector(state => state.products.favoritesList);

	return (
		<div className='relative w-[30px] h-[30px]'>
			<PiHeartStraightLight
				color='black'
				className='w-full h-full hover:fill-orange-text transition ease-in-out duration-0 hover:duration-500'
			/>
			<div className='flex justify-center items-center absolute top-[-15px] right-[-15px] w-[25px] h-[25px] p-[13px] rounded-[50%] bg-orange-text text-[12px] font-medium text-[#ffffff]'>
				{favoritesList.length}
			</div>
		</div>
	);
};

export default FavoritesBtn;
