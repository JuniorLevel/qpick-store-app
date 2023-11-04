import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Loader from './../../components/loader/Loader';
import CardList from './card-list/CardList';
const Category = ({ title }) => {
	const isLoading = useSelector(state => state.products.isLoading);
	const inputValue = useSelector(state => state.products.searchProduct);
	const productsList = useSelector(state => state.products.productsList);

	const [filteredProductsList, setFilteredProductsList] = useState([]);

	const filterProducts = (inputValue, products) => {
		return products.filter(item =>
			item.title.toLowerCase().includes(inputValue.toLowerCase())
		);
	};

	useEffect(() => {
		setFilteredProductsList(filterProducts(inputValue, productsList));
	}, [inputValue]);

	return (
		<section className='mt-9'>
			<h2 className='mb-5 text-title-color font-bold'>{title}</h2>
			{isLoading ? (
				<Loader />
			) : !filteredProductsList.length && inputValue.length ? (
				<div className='text-center'>
					{`Ничего не нашлось по запросу "${inputValue}"`}
				</div>
			) : (
				<CardList
					products={!inputValue ? productsList : filteredProductsList}
				/>
			)}
		</section>
	);
};

export default Category;
