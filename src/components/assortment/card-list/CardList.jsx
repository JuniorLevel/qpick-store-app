import Card from './../card/Card';
const CardList = ({ products }) => {
	return (
		<div className='sm-max:grid-cols-1 md:grid-cols-2 md-max:gap-5 lg:grid-cols-3 lg:gap-2 grid grid-cols-3 gap-5'>
			{products.map(product => (
				<Card key={product.id} product={product} />
			))}
		</div>
	);
};

export default CardList;
