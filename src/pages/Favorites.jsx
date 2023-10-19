import Layout from '../components/layout/Layout';
import Card from './../components/category/card/Card';
import Title from './../components/ui/title/Title';

const Favorites = () => {
	return (
		<Layout>
			<section>
				<Title title='Избранное' />
				<Card />
			</section>
		</Layout>
	);
};

export default Favorites;
