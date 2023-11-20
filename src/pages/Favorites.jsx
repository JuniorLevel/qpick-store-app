import { useSelector } from 'react-redux';
import Layout from '../components/layout/Layout';
import EmptyItem from '../components/ui/empty-item/EmptyItem';
import Card from './../components/assortment/card/Card';
import Title from './../components/ui/title/Title';
const Favorites = () => {
	const favoritesList = useSelector(state => state.products.favoritesList);

	return (
		<Layout>
			<section>
				<Title title='Избранное' />
				{favoritesList.length ? (
					<div className='sm-max:grid-cols-1 md:grid-cols-2 grid gap-5 grid-cols-3'>
						{favoritesList.map(product => (
							<Card key={product.id} product={product} />
						))}
					</div>
				) : (
					<EmptyItem title='Избранные товары отсутствуют' />
				)}
			</section>
		</Layout>
	);
};

export default Favorites;
