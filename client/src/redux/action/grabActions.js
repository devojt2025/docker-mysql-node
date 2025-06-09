import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const VITE_APP_URL = import.meta.env.VITE_APP_URL;

export const getOrders = createAsyncThunk(
    'order/getOrders',
    async(query, thunkAPI) => {
        const config = {
            headers: {
                'X-Forwarded-For': '::1'
            },
        }
        try {
           
            const response = await axios.get(`${VITE_APP_URL}/api/v1/grab/orders/raw`, config);
            return response.data;
        }catch (error){
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)
