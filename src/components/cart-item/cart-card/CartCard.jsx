import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
	addTotalPrice,
	subTotalPrice,
} from '../../../features/prices/prices.slice.js';
import { PRODUCT_ROUTE } from './../../../utils/consts.js';
import ButtonAction from './../../ui/button-action/ButtonAction';
import ButtonDelete from './../../ui/button-delete/ButtonDelete';
const CartCard = ({ product }) => {
	const dispatch = useDispatch();
	const [count, setCount] = useState(
		Number(localStorage.getItem(`count${product.id}`))
	);

	useEffect(() => {
		localStorage.setItem(`count${product.id}`, count);
	}, [count]);

	return (
		<div className='sm:max-w-[320px] lg:max-w-[450px] lg:w-full relative rounded-[30px] shadow-shadow bg-block-color-bg border-[1px] p-4 mb-4'>
			<div>
				<div className='lg-max:flex-col flex gap-3 items-center mb-3'>
					<div className='lg:max-w-[250px] lg:max-h-[250px] max-w-[200px] max-h-[200px]'>
						<Link to={`${PRODUCT_ROUTE}/${product.id}`}>
							<img
								src={product.images[0]}
								alt='img'
								className='rounded-[30px] w-full h-full object-cover'
							/>
						</Link>
					</div>
					<div>
						<p className='text-bg-black text-[17px] font-extrabold'>
							{product.title ? product.title : 'Some title product'}
						</p>
						<span className='mt-3 text-main-text text-[15px] font-semibold'>
							{`${product.price}$`}
						</span>
					</div>
				</div>
				<div className='md-max:flex-col md-max:items-center flex justify-between'>
					<div className='md-max:order-2 flex justify-between w-[200px]'>
						<ButtonAction
							onClick={() => {
								if (count === 1) return;
								setCount(count - 1);
								dispatch(subTotalPrice(product.price));
							}}
							action='-'
						/>
						<p className='text-[17px] my-auto'>{count}</p>
						<ButtonAction
							onClick={() => {
								if (count === 100) return;
								setCount(count + 1);
								dispatch(addTotalPrice(product.price));
							}}
							action='+'
						/>
					</div>
					<span className='text-sm font-semibold'>{`${
						product.price * count
					}$`}</span>
				</div>
			</div>
			<ButtonDelete product={product} count={count} />
		</div>
	);
};

export default CartCard;
