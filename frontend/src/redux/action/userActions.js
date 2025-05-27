import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { authenticate, logoutFunc } from '../../utils/helper';

const VITE_APP_URL = import.meta.env.VITE_APP_URL;
const VITE_INTEGRATION_URL = import.meta.env.VITE_INTEGRATION_URL;
export const login = createAsyncThunk(
    'user/login',
    async (req, thunkAPI) => {
        
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'X-Forwarded-For': '::1'
            },
        }
        try {
            
            const response = await axios.post(`${VITE_APP_URL}/api/v1/foodpanda/login`,req, config);
            authenticate(response.data, () => { });
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const logout = createAsyncThunk(
    'user/logout',
    async (_, thunkAPI) => {
        try {
            logoutFunc();
            return null;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)