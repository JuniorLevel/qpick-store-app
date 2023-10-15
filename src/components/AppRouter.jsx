import { Route, Routes } from 'react-router-dom';
import {
	CART_ROUTE,
	CONTACTS_ROUTE,
	FAVORITES_ROUTE,
	HOME_ROUTE,
	NOT_FOUND_ROUTE,
	ORDER_ROUTE,
	PRODUCT_ROUTE,
	SERVICES_ROUTE,
} from '../utils/consts';
import Cart from './../pages/Cart';
import Contacts from './../pages/Contacts';
import Favorites from './../pages/Favorites';
import Home from './../pages/Home.jsx';
import NotFound from './../pages/NotFound';
import Order from './../pages/Order';
import Product from './../pages/Product';
import ProductInfo from './../pages/ProductInfo';
import Services from './../pages/Services';
const AppRouter = () => {
	return (
		<Routes>
			<Route path={HOME_ROUTE} element={<Home />}></Route>
			<Route path={CART_ROUTE} element={<Cart />}></Route>
			<Route path={CONTACTS_ROUTE} element={<Contacts />}></Route>
			<Route path={FAVORITES_ROUTE} element={<Favorites />}></Route>
			<Route path={ORDER_ROUTE} element={<Order />}></Route>
			<Route path={PRODUCT_ROUTE} element={<Product />}></Route>
			<Route path={PRODUCT_ROUTE + '/:id'} element={<ProductInfo />}></Route>
			<Route path={SERVICES_ROUTE} element={<Services />}></Route>
			<Route path={NOT_FOUND_ROUTE} element={<NotFound />}></Route>
		</Routes>
	);
};

export default AppRouter;
