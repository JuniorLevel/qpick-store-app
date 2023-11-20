import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CardDetail from '../components/assortment/card/card-detail/CardDetail';
import Layout from '../components/layout/Layout';
import Loader from './../components/loader/Loader';
import Error from './../components/ui/error/Error';
import { getProductById } from './../features/products/products.slice.js';

const ProductInfo = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const isLoading = useSelector(state => state.products.isLoading);
	const error = useSelector(state => state.products.error);

	useEffect(() => {
		if (!id) return;
		dispatch(getProductById(id));
	}, [id]);

	return (
		<Layout>
			{isLoading ? (
				<div className='sm-max:top-[20%] md:top-[25%] lg-min:top-[30%] left-[50%] absolute'>
					<Loader />
				</div>
			) : (
				<>{error ? <Error error={error} /> : <CardDetail />}</>
			)}
		</Layout>
	);
};

export default ProductInfo;
