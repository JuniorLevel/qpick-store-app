import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	totalPrice: localStorage.getItem('totalPrice')
		? Number(localStorage.getItem('totalPrice'))
		: 0,
};

export const pricesSlice = createSlice({
	name: 'prices',
	initialState,
	reducers: {
		addTotalPrice: (state, action) => {
			state.totalPrice += action.payload;
			localStorage.setItem('totalPrice', state.totalPrice);
		},
		subTotalPrice: (state, action) => {
			state.totalPrice -= action.payload;
			localStorage.setItem('totalPrice', state.totalPrice);
		},
		addDeliveryPrice: (state, action) => {
			state.totalPrice += action.payload;
			localStorage.setItem('totalPrice', state.totalPrice);
		},
		subDeliveryPrice: (state, action) => {
			state.totalPrice -= action.payload;
			localStorage.setItem('totalPrice', state.totalPrice);
		},
		cancelTotalPrice: (state, action) => {
			state.totalPrice = action.payload;
			localStorage.setItem('totalPrice', state.totalPrice);
		},
	},
});

export const {
	addTotalPrice,
	subTotalPrice,
	subDeliveryPrice,
	addDeliveryPrice,
	cancelTotalPrice,
} = pricesSlice.actions;
export default pricesSlice.reducer;
