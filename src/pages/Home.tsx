import { FC, useEffect } from 'react';
import Assortment from '../components/assortment/Assortment';
import Banner from '../components/banner/Banner';
import Layout from '../components/layout/Layout';
import ErrorComponent from '../components/ui/error/ErrorComponent';
import { cancelTotalPrice } from '../features/prices/prices.slice';
import {
  getProducts,
  getProductsCategories,
  setIsSuccess,
} from '../features/products/products.slice';
import { useAppDispatch, useAppSelector } from './../hooks/useStore';

const Home: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const cartList = useAppSelector(state => state.products.cartList);
  const error = useAppSelector(state => state.products.error);

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
        <ErrorComponent error={error} />
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
