// src/store/exampleSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { getOrders } from '../action/orderActions';

const orderSlice = createSlice({
  name: 'orders',
  initialState: {
    orders: [],
    loading: false,
    error: false
  },
  reducers: {
    resetError: (state) => {
        state.error = false
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(getOrders.pending, (state, action) => {
        state.loading = true;
    })
    .addCase(getOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload.payload
    })
    .addCase(getOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload
    })
  }
});

export const { resetError } = orderSlice.actions;
export default orderSlice.reducer;
