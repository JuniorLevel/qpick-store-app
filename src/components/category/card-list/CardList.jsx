import { useSelector } from 'react-redux';
import Card from './../card/Card';

const CardList = () => {
	const productsList = useSelector(state => state.products.productsList);

	return (
		<div className='grid grid-cols-3 gap-10'>
			{productsList.map(product => (
				<Card key={product.id} isSale={false} product={product} />
			))}
		</div>
	);
};

export default CardList;
