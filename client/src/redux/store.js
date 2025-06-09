// src/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import foodpandaReducer from './slice/foodpandaSlice';
import userReducer from './slice/userSlice';
import grabReducer from './slice/grabSlice';
const store = configureStore({
  reducer: {
    foodpanda: foodpandaReducer,
    grab: grabReducer,
    users: userReducer
  }
});

export default store;
