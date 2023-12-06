import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { ICategory, IProduct } from '../../interfaces/interfaces'

interface IDefaultState {
	searchProduct: string;
	productsList: IProduct[];
	productsCategories: ICategory[]
	filteredProducts: IProduct[] 
	favoritesList: IProduct[]
	cartList: IProduct[]
	productById: IProduct | null
	isLoading: boolean;
	isSuccess: boolean;
	error: null | object
}

const initialState :IDefaultState = {
	searchProduct: '',
	productsList: [],
	productsCategories: [],
	filteredProducts: [],
	favoritesList: localStorage.getItem('favoritesList')
		? JSON.parse(<string>localStorage.getItem('favoritesList'))
		: [],
	cartList: localStorage.getItem('cartList')
		? JSON.parse(<string>localStorage.getItem('cartList'))
		: [],
	productById: null,
	isLoading: false,
	isSuccess: false,
	error: null,
};

export const getProducts = createAsyncThunk(
	'products/getProducts',
	async () => {
		const res = await axios.get('https://api.escuelajs.co/api/v1/products');
		return res.data;
	}
);

export const getProductById = createAsyncThunk(
	'products/getProductById',
	async (id:number) => {
		const res = await axios.get(
			`https://api.escuelajs.co/api/v1/products/${id}`
		);
		return res.data;
	}
);

export const getProductsCategories = createAsyncThunk(
	'products/getProductsCategories',
	async () => {
		const res = await axios.get(`https://api.escuelajs.co/api/v1/categories`);
		return res.data;
	}
);

export const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		setIsLoading: (state, action:PayloadAction<boolean>) => {
			state.isLoading = action.payload;
		},
		setIsSuccess: (state, action:PayloadAction<boolean>) => {
			state.isSuccess = action.payload;
		},
		addToFavorite: (state, action:PayloadAction<IProduct>) => {
			state.favoritesList.push(action.payload);
			localStorage.setItem(
				'favoritesList',
				JSON.stringify(state.favoritesList)
			);
		},
		removeFromFavorite: (state, action:PayloadAction<IProduct>) => {
			state.favoritesList = state.favoritesList.filter(
				item => item.id !== action.payload.id
			);
			localStorage.setItem(
				'favoritesList',
				JSON.stringify(state.favoritesList)
			);
		},
		addToCart: (state, action:PayloadAction<IProduct>) => {
			state.cartList.push(action.payload);
			localStorage.setItem('cartList', JSON.stringify(state.cartList));
		},
		removeFromCart: (state, action:PayloadAction<IProduct>) => {
			state.cartList = state.cartList.filter(
				item => item.id !== action.payload.id
			);
			localStorage.setItem('cartList', JSON.stringify(state.cartList));
		},
		clearCartList: (state, action: PayloadAction<IProduct[]>) => {
			state.cartList = action.payload;
		},
		searchProductByTitle: (state, action:PayloadAction<string>) => {
			state.searchProduct = action.payload;
		},
		filterProducts: (state, action: PayloadAction<IProduct[]>) => {
			state.filteredProducts = action.payload;
		},
	},
	extraReducers: builder => {
		builder
			.addCase(getProducts.pending, state => {
				state.isLoading = true;
			})
			.addCase(getProducts.fulfilled, (state, action: PayloadAction<IProduct[]>) => {
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
			.addCase(getProductById.fulfilled, (state, action: PayloadAction<IProduct>) => {
				state.isLoading = false;
				state.productById = action.payload;
			})
			.addCase(getProductById.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.error;
			});
		builder
			.addCase(getProductsCategories.pending, () => {})
			.addCase(getProductsCategories.fulfilled, (state, action: PayloadAction<ICategory[]>) => {
				state.productsCategories = action.payload;
			})
			.addCase(getProductsCategories.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.error;
			});
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
