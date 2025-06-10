// src/store/exampleSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { getOrders } from '../action/grabActions';

const grabSlice = createSlice({
  name: 'grab',
  initialState: {
    orders: [],
    count: 0,
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
        state.count = action.payload.count;
    })
    .addCase(getOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload
    })
  }
});

export const { resetError } = grabSlice.actions;
export default grabSlice.reducer;
