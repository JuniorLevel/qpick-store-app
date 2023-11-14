import Card from './../card/Card';

const CardList = ({ products }) => {
	return (
		//grid grid-cols-3 gap-10
		<div className='grid grid-cols-3 gap-5 sm:grid-cols-1 sm:gap-5 md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-2'>
			{products.map(product => (
				<Card key={product.id} isSale={false} product={product} />
			))}
		</div>
	);
};

export default CardList;
