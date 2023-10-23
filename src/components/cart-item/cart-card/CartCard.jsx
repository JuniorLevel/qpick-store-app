import { useState } from 'react';
import ButtonAction from './../../ui/button-action/ButtonAction';
import ButtonDelete from './../../ui/button-delete/ButtonDelete';
const CartCard = ({ product }) => {
	const [count, setCount] = useState(1);

	return (
		<div className='relative rounded-[30px] shadow-shadow bg-white-bg p-4 mb-4'>
			<div>
				<div className='flex gap-3 items-center mb-3'>
					<div className='w-[200px]'>
						<img src={product.images[0]} alt='img' className='rounded-[30px]' />
					</div>
					<div>
						<p className='text-bg-black text-[17px] font-extrabold'>
							{product.title}
						</p>
						<span className='mt-3 text-[#AAA] text-[15px] font-semibold'>
							{`${product.price}$`}
						</span>
					</div>
				</div>
				<div className='flex justify-between'>
					<div className='flex justify-between w-[200px]'>
						<ButtonAction
							onClick={() => {
								if (count === 1) return;
								setCount(count - 1);
							}}
							action='-'
						/>
						<p className='text-[17px] my-auto'>{count}</p>
						<ButtonAction
							onClick={() => {
								if (count === 100) return;
								setCount(count + 1);
							}}
							action='+'
						/>
					</div>
					<span className='text-sm font-semibold'>{`${
						product.price * count
					}$`}</span>
				</div>
			</div>
			<ButtonDelete product={product} />
		</div>
	);
};

export default CartCard;
