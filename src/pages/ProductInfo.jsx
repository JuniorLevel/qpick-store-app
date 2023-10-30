import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CardDetail from '../components/category/card/card-detail/CardDetail';
import Layout from '../components/layout/Layout';
import Loader from './../components/loader/Loader';
import { getProductById } from './../features/products/products.slice.js';

const ProductInfo = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const productDetail = useSelector(state => state.products.productById);
	const isLoading = useSelector(state => state.products.isLoading);

	useEffect(() => {
		if (!id) return;
		dispatch(getProductById(id));
	}, [id]);

	return (
		<Layout>
			{isLoading ? <Loader /> : <CardDetail product={productDetail} />}
		</Layout>
	);
};

export default ProductInfo;
