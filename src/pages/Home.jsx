import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Assortment from '../components/assortment/Assortment';
import Banner from '../components/banner/Banner';
import Layout from '../components/layout/Layout';
import { setIsSuccess } from '../features/products/products.slice';

const Home = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(setIsSuccess(false));
	}, []);
	return (
		<Layout>
			<Banner />
			<Assortment />
		</Layout>
	);
};

export default Home;
