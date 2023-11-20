import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
	searchProduct: '',
	productsList: [],
	productsCategories: [],
	filteredProducts: [],
	favoritesList: localStorage.getItem('favoritesList')
		? JSON.parse(localStorage.getItem('favoritesList'))
		: [],
	cartList: localStorage.getItem('cartList')
		? JSON.parse(localStorage.getItem('cartList'))
		: [],
	productById: {},
	isLoading: false,
	isSuccess: false,
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

export const getProductsCategories = createAsyncThunk(
	'products/getProductsCategories',
	async id => {
		const res = await axios.get(`https://api.escuelajs.co/api/v1/categories`);
		return res.data.splice(0, 5);
	}
);

export const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		setIsLoading: (state, action) => {
			state.isLoading = action.payload;
		},
		setIsSuccess: (state, action) => {
			state.isSuccess = action.payload;
		},
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
		clearCartList: (state, action) => {
			state.cartList = action.payload;
		},
		searchProductByTitle: (state, action) => {
			state.searchProduct = action.payload;
		},
		filterProducts: (state, action) => {
			state.filteredProducts = action.payload;
		},
	},
	extraReducers: builder => {
		builder
			.addCase(getProducts.pending, state => {
				state.isLoading = true;
			})
			.addCase(getProducts.fulfilled, (state, action) => {
				state.isLoading = false;
				state.productsList = action.payload;
			})
			.addCase(getProducts.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.error;
			});
		builder
			.addCase(getProductById.pending, state => {
				state.isLoading = true;
			})
			.addCase(getProductById.fulfilled, (state, action) => {
				state.isLoading = false;
				state.productById = action.payload;
			})
			.addCase(getProductById.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.error;
			});
		builder
			.addCase(getProductsCategories.pending, () => {})
			.addCase(getProductsCategories.fulfilled, (state, action) => {
				state.productsCategories = action.payload;
			})
			.addCase(getProductsCategories.rejected, (state, action) => {});
	},
});

export const {
	setIsLoading,
	setIsSuccess,
	addToFavorite,
	removeFromFavorite,
	addToCart,
	removeFromCart,
	clearCartList,
	searchProductByTitle,
	filterProducts,
} = productsSlice.actions;
export default productsSlice.reducer;
