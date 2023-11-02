import { useSelector } from 'react-redux';
import Loader from './../../components/loader/Loader';
import CardList from './card-list/CardList';
const Category = ({ title }) => {
	const isLoading = useSelector(state => state.products.isLoading);

	return (
		<section className='mt-9'>
			<h2 className='mb-5 text-title-color font-bold'>{title}</h2>
			{isLoading ? <Loader /> : <CardList />}
		</section>
	);
};

export default Category;
