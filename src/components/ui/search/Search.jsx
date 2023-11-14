import { useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdClear } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { searchProductByTitle } from '../../../features/products/products.slice';

const Search = () => {
	const searchProduct = useSelector(state => state.products.searchProduct);
	const [inputValue, setInputValue] = useState(searchProduct);
	const dispatch = useDispatch();
	const clearInput = () => setInputValue('');
	useEffect(() => {
		dispatch(searchProductByTitle(inputValue));
	}, [inputValue]);
	return (
		<div className='relative max-w-[500px] w-full mx-2 sm:order-4 sm:mt-4 sm:mx-auto'>
			<AiOutlineSearch className='absolute top-3 left-2' />
			<input
				value={searchProduct}
				className='rounded-[30px] p-3 w-full text-[16px] pl-8 shadow-shadow'
				type='text'
				placeholder='Введите название товара'
				onChange={e => {
					setInputValue(e.target.value);
				}}
			/>
			<MdClear
				onClick={() => clearInput()}
				className={`${
					!inputValue ? 'hidden' : 'absolute'
				}  top-3 right-3 hover:cursor-pointer`}
			/>
		</div>
	);
};

export default Search;
