import { configureStore } from '@reduxjs/toolkit';
import productsSlice from '../features/products/products.slice';

export const store = configureStore({
	reducer: {
		products: productsSlice,
	},
});
