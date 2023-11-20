import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Assortment from '../components/assortment/Assortment';
import Banner from '../components/banner/Banner';
import Layout from '../components/layout/Layout';
import { cancelTotalPrice } from '../features/prices/prices.slice';
import {
	getProducts,
	getProductsCategories,
	setIsSuccess,
} from '../features/products/products.slice';
import Error from './../components/ui/error/Error';

const Home = () => {
	const dispatch = useDispatch();
	const cartList = useSelector(state => state.products.cartList);
	const error = useSelector(state => state.products.error);

	useEffect(() => {
		dispatch(getProducts());
		dispatch(getProductsCategories());
		dispatch(setIsSuccess(false));
	}, []);

	useEffect(() => {
		if (!cartList.length) {
			dispatch(cancelTotalPrice(0));
			localStorage.removeItem('selectReceiving');
		}
	}, [cartList]);

	return (
		<Layout>
			{error ? (
				<Error error={error} />
			) : (
				<>
					<Banner />
					<Assortment />
				</>
			)}
		</Layout>
	);
};

export default Home;
