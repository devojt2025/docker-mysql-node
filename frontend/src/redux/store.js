// src/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import orderReducer from './slice/orderSlice';
import userReducer from './slice/userSlice';
const store = configureStore({
  reducer: {
    orders: orderReducer,
    users: userReducer
  }
});

export default store;
