import { FC, useEffect, useState } from 'react';
import { searchProductByTitle } from '../../features/products/products.slice';
import { useAppDispatch, useAppSelector } from '../../hooks/useStore';
import { IProduct } from '../../interfaces/interfaces';
import Loader from '../loader/Loader';
import SelectFiltering from '../ui/select-filtering/SelectFiltering';
import CardList from './card-list/CardList';

const Assortment: FC = (): JSX.Element => {
	const dispatch = useAppDispatch();

	const isLoading = useAppSelector(state => state.products.isLoading);

	const inputValue = useAppSelector(state => state.products.searchProduct);

	const productsList = useAppSelector(state => state.products.productsList);

	const filteredProducts = useAppSelector(
		state => state.products.filteredProducts
	);

	const [searchedProductsList, setSearchedProductsList] = useState<IProduct[]>(
		[]
	);

	const searchProducts = (inputValue: string, products: IProduct[]) => {
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
