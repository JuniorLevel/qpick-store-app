import Card from './../card/Card';

const CardList = ({ products }) => {
	return (
		<div className='grid grid-cols-3 gap-10'>
			{products.map(product => (
				<Card key={product.id} isSale={false} product={product} />
			))}
		</div>
	);
};

export default CardList;
