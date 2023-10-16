import Card from './card/Card';
const Category = ({ title }) => {
	return (
		<section className='mt-9'>
			<h2 className='mb-5 text-title-color font-bold'>{title}</h2>
			<div className='grid grid-cols-3 gap-10'>
				<Card isSale={false} />
				<Card isSale={true} />
				<Card isSale={false} />
			</div>
		</section>
	);
};

export default Category;
