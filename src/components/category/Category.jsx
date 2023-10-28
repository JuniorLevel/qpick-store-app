import { useSelector } from 'react-redux';

import Card from './card/Card';
const Category = ({ title }) => {
	const productsList = useSelector(state => state.products.productsList);
	const favoritesList = useSelector(state => state.products.favoritesList);
	const cartList = useSelector(state => state.products.cartList);
	const isLoading = useSelector(state => state.products.isLoading);

	return (
		<section className='mt-9'>
			<h2 className='mb-5 text-title-color font-bold'>{title}</h2>
			<div className='grid grid-cols-3 gap-10'>
				{isLoading ? (
					<div>Loading...</div>
				) : (
					productsList.map(product => (
						<Card
							key={product.id}
							isSale={false}
							product={product}
							isFavorite={
								localStorage.getItem(`isFavoriteProduct${product.id}id`)
									? true
									: false
							}
							isCart={
								localStorage.getItem(`isCartProduct${product.id}id`)
									? true
									: false
							}
						/>
					))
				)}
			</div>
		</section>
	);
};

export default Category;
