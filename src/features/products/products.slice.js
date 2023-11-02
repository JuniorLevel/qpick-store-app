import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
	searchProduct: '',
	productsList: [],
	favoritesList: localStorage.getItem('favoritesList')
		? JSON.parse(localStorage.getItem('favoritesList'))
		: [],
	cartList: localStorage.getItem('cartList')
		? JSON.parse(localStorage.getItem('cartList'))
		: [],
	productById: {},
	isLoading: false,
	error: null,
};

export const getProducts = createAsyncThunk(
	'products/getProducts',
	async () => {
		const res = await axios.get('https://api.escuelajs.co/api/v1/products');
		return res.data.splice(0, 180);
	}
);

export const getProductById = createAsyncThunk(
	'products/getProductById',
	async id => {
		const res = await axios.get(
			`https://api.escuelajs.co/api/v1/products/${id}`
		);
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
		searchProductByTitle: (state, action) => {
			state.searchProduct = action.payload;
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
		builder
			.addCase(getProductById.pending, state => {
				console.log('work pend');
				state.isLoading = true;
			})
			.addCase(getProductById.fulfilled, (state, action) => {
				console.log('work ful');
				state.isLoading = false;
				state.productById = action.payload;
			})
			.addCase(getProductById.rejected, (state, action) => {
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
	searchProductByTitle,
} = productsSlice.actions;
export default productsSlice.reducer;
