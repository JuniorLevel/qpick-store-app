import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CardDetail from '../components/assortment/card/card-detail/CardDetail.js';
import Layout from '../components/layout/Layout.js';
import Loader from '../components/loader/Loader.js';
import Error from '../components/ui/error/Error.js';
import { getProductById } from '../features/products/products.slice.js';
import { useAppDispatch, useAppSelector } from './../hooks/useStore';

const ProductInfo: FC = (): JSX.Element => {
	const { id } = useParams();
	const dispatch = useAppDispatch();
	const isLoading = useAppSelector(state => state.products.isLoading);
	const error = useAppSelector(state => state.products.error);

	useEffect(() => {
		if (!id) return;
		dispatch(getProductById(Number(id)));
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
