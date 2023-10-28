import { useSelector } from 'react-redux';
import Layout from '../components/layout/Layout';
import EmptyItem from '../components/ui/empty-item/EmptyItem';
import Card from './../components/category/card/Card';
import Title from './../components/ui/title/Title';

const Favorites = () => {
	const favoritesList = useSelector(state => state.products.favoritesList);
	const cartList = useSelector(state => state.products.cartList);
	const isLoading = useSelector(state => state.products.isLoading);

	return (
		<Layout>
			<section>
				<Title title='Избранное' />
				{favoritesList.length ? (
					<div className='grid grid-cols-3 gap-10'>
						{isLoading ? (
							<div>Loading...</div>
						) : (
							favoritesList.map(product => (
								<Card
									key={product.id}
									isSale={false}
									product={product}
									isFavorite={favoritesList.includes(product)}
									isCart={cartList.includes(product)}
								/>
							))
						)}
					</div>
				) : (
					<EmptyItem title='Избранные товары отсутствуют' />
				)}
			</section>
		</Layout>
	);
};

export default Favorites;
