import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
	productsList: [],
	favoritesList: localStorage.getItem('favoritesList')
		? JSON.parse(localStorage.getItem('favoritesList'))
		: [],
	cartList: localStorage.getItem('cartList')
		? JSON.parse(localStorage.getItem('cartList'))
		: [],
	isLoading: false,
	error: null,
};

export const getProducts = createAsyncThunk(
	'products/getProducts',
	async () => {
		const res = await axios.get('https://api.escuelajs.co/api/v1/products');
		return res.data;
	}
);

export const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		addToFavorite: (state, action) => {
			state.favoritesList.push(action.payload);
			localStorage.setItem(
				'favoritesList',
				JSON.stringify(state.favoritesList)
			);
		},
		removeFromFavorite: (state, action) => {
			state.favoritesList = state.favoritesList.filter(
				item => item.id !== action.payload.id
			);
			localStorage.setItem(
				'favoritesList',
				JSON.stringify(state.favoritesList)
			);
		},
		addToCart: (state, action) => {
			state.cartList.push(action.payload);
			localStorage.setItem('cartList', JSON.stringify(state.cartList));
		},
		removeFromCart: (state, action) => {
			state.cartList = state.cartList.filter(
				item => item.id !== action.payload.id
			);
			localStorage.setItem('cartList', JSON.stringify(state.cartList));
		},
	},
	extraReducers: builder => {
		builder
			.addCase(getProducts.pending, state => {
				console.log('work pend');
				state.isLoading = true;
			})
			.addCase(getProducts.fulfilled, (state, action) => {
				console.log('work ful');
				state.isLoading = false;
				state.productsList = action.payload;
			})
			.addCase(getProducts.rejected, (state, action) => {
				console.log('work reject');
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

export const {
	addToFavorite,
	removeFromFavorite,
	addToCart,
	removeFromCart,
	getTotalPrice,
} = productsSlice.actions;
export default productsSlice.reducer;
