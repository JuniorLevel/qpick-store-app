import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchProductByTitle } from '../../features/products/products.slice';
import Loader from '../loader/Loader';
import SelectFiltering from './../ui/select-filtering/SelectFiltering';
import CardList from './card-list/CardList';

const Assortment = () => {
	const dispatch = useDispatch();

	const isLoading = useSelector(state => state.products.isLoading);

	const inputValue = useSelector(state => state.products.searchProduct);

	const productsList = useSelector(state => state.products.productsList);

	const filteredProducts = useSelector(
		state => state.products.filteredProducts
	);

	const [searchedProductsList, setSearchedProductsList] = useState([]);

	const searchProducts = (inputValue, products) => {
		return products.filter(item =>
			item.title.toLowerCase().includes(inputValue.toLowerCase())
		);
	};

	useEffect(() => {
		dispatch(searchProductByTitle(''));
	}, [filteredProducts]);

	useEffect(() => {
		setSearchedProductsList(searchProducts(inputValue, filteredProducts));
	}, [inputValue]);

	return (
		<section className='mt-9'>
			{isLoading ? (
				<div className='sm:top-40 lg:top-[55%] left-[50%] absolute'>
					<Loader />
				</div>
			) : !searchedProductsList.length && inputValue.length ? (
				<div className='text-center'>
					{`Ничего не нашлось по запросу "${inputValue}"`}
				</div>
			) : (
				<>
					{productsList.length ? <SelectFiltering /> : <></>}
					{!filteredProducts.length ? (
						<div className='text-center'>Товары отсутствуют</div>
					) : (
						<CardList
							products={!inputValue ? filteredProducts : searchedProductsList}
						/>
					)}
				</>
			)}
		</section>
	);
};

export default Assortment;
