import { FC, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import { filterProducts } from '../../../features/products/products.slice';
import { useAppDispatch, useAppSelector } from './../../../hooks/useStore';
const SelectFiltering: FC = (): JSX.Element => {
	const dispatch = useAppDispatch();

	const productsList = useAppSelector(state => state.products.productsList);

	const productsCategories = useAppSelector(
		state => state.products.productsCategories
	);

	useEffect(() => {
		dispatch(filterProducts(productsList));
	}, []);
	return (
		<div className='mb-5 text-end'>
			<Form.Select
				className='sm-max:max-w-[300px] sm-max:text-[15px] p-3 pl-5 rounded-[30px] text-[20px] bg-main-bg border-[1px]'
				onChange={e => {
					if (e.target.value.toLowerCase() === 'all') {
						dispatch(filterProducts(productsList));
					}
					if (e.target.value.toLowerCase() === 'expensive') {
						dispatch(
							filterProducts(
								[...productsList].sort((a, b) => b.price - a.price)
							)
						);
					}
					if (e.target.value.toLowerCase() === 'cheap') {
						dispatch(
							filterProducts(
								[...productsList].sort((a, b) => a.price - b.price)
							)
						);
					}
					productsCategories.map(category => {
						if (e.target.value.toLowerCase() === category.name.toLowerCase()) {
							dispatch(
								filterProducts(
									productsList.filter(
										item =>
											item.category?.name.toLowerCase() ===
											category.name.toLowerCase()
									)
								)
							);
						}
					});
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
