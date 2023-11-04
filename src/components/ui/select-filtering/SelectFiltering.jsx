import { useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { filterProducts } from '../../../features/products/products.slice';
const SelectFiltering = () => {
	const dispatch = useDispatch();

	const productsList = useSelector(state => state.products.productsList);

	const productsCategories = useSelector(
		state => state.products.productsCategories
	);

	const filteredProducts = useSelector(
		state => state.products.filteredProducts
	);

	useEffect(() => {
		dispatch(filterProducts(productsList));
	}, []);
	return (
		<div className='mb-5 text-end'>
			<Form.Select
				className='bg-[white] border-[red] p-3 pl-5 rounded-[30px] text-[20px]'
				onChange={e => {
					switch (e.target.value) {
						case 'all':
							dispatch(filterProducts(productsList));
							break;
						case 'expensive':
							dispatch(
								filterProducts(
									[...productsList].sort((a, b) => b.price - a.price)
								)
							);
							break;
						case 'cheap':
							dispatch(
								filterProducts(
									[...productsList].sort((a, b) => a.price - b.price)
								)
							);
							break;
						case 'clothes':
							dispatch(
								filterProducts(
									productsList.filter(item => item.category.name === 'Clothes')
								)
							);
							break;
						case 'electronics':
							dispatch(
								filterProducts(
									productsList.filter(
										item => item.category.name === 'Electronics'
									)
								)
							);
							break;
						case 'furniture':
							dispatch(
								filterProducts(
									productsList.filter(
										item => item.category.name === 'Furniture'
									)
								)
							);
							break;
						case 'shoes':
							dispatch(
								filterProducts(
									productsList.filter(item => item.category.name === 'Shoes')
								)
							);
							break;
						case 'others':
							dispatch(
								filterProducts(
									productsList.filter(item => item.category.name === 'Others')
								)
							);
							break;
						default:
							dispatch(filterProducts([]));
							break;
					}
				}}
			>
				<option value='all'>Весь ассортимент</option>
				<option value='expensive'>Сначала дорогие</option>
				<option value='cheap'>Сначала дешёвые</option>
				{productsCategories.map(item => (
					<option
						key={item.id}
						value={item.name.toLowerCase()}
					>{`Товар из категории: ${item.name}`}</option>
				))}
			</Form.Select>
		</div>
	);
};

export default SelectFiltering;
