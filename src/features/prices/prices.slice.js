import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	totalPrice: localStorage.getItem('totalPrice')
		? JSON.parse(localStorage.getItem('totalPrice'))
		: 0,
};

export const pricesSlice = createSlice({
	name: 'prices',
	initialState,
	reducers: {
		addTotalPrice: (state, action) => {
			state.totalPrice += action.payload;
			localStorage.setItem('totalPrice', JSON.stringify(state.totalPrice));
		},
		subTotalPrice: (state, action) => {
			state.totalPrice -= action.payload;
			localStorage.setItem('totalPrice', JSON.stringify(state.totalPrice));
		},
		addDeliveryPrice: (state, action) => {
			state.totalPrice += action.payload;
		},
		subDeliveryPrice: (state, action) => {
			state.totalPrice -= action.payload;
			localStorage.setItem('totalPrice', JSON.stringify(state.totalPrice));
		},
		cancelTotalPrice: (state, action) => {
			state.totalPrice = action.payload;
			localStorage.setItem('totalPrice', JSON.stringify(state.totalPrice));
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
