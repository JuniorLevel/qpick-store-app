import { configureStore } from '@reduxjs/toolkit';
import pricesSlice from '../features/prices/prices.slice';
import productsSlice from '../features/products/products.slice';

export const store = configureStore({
	reducer: {
		products: productsSlice,
		prices: pricesSlice,
	},
});
