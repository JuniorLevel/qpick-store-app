import { useSelector } from 'react-redux';
import Loader from './../../components/loader/Loader';
import Card from './card/Card';
const Category = ({ title }) => {
	const productsList = useSelector(state => state.products.productsList);
	const isLoading = useSelector(state => state.products.isLoading);

	return (
		<section className='mt-9'>
			<h2 className='mb-5 text-title-color font-bold'>{title}</h2>
			<div className='grid grid-cols-3 gap-10'>
				{isLoading ? (
					<Loader />
				) : (
					productsList.map(product => (
						<Card key={product.id} isSale={false} product={product} />
					))
				)}
			</div>
		</section>
	);
};

export default Category;
