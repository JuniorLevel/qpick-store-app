import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	totalPrice: 0,
};

export const pricesSlice = createSlice({
	name: 'prices',
	initialState,
	reducers: {
		addTotalPrice: (state, action) => {
			state.totalPrice += action.payload;
		},
		addDeliveryPrice: (state, action) => {
			state.totalPrice += action.payload;
		},
		subDeliveryPrice: (state, action) => {
			state.totalPrice -= action.payload;
		},
		subTotalPrice: (state, action) => {
			state.totalPrice -= action.payload;
		},
	},
});

export const {
	addTotalPrice,
	subTotalPrice,
	subDeliveryPrice,
	addDeliveryPrice,
} = pricesSlice.actions;
export default pricesSlice.reducer;
