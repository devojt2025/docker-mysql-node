// src/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import orderReducer from './slice/orderSlice';

const store = configureStore({
  reducer: {
    orders: orderReducer
  }
});

export default store;
