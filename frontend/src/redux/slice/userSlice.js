// src/store/exampleSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { login, logout } from '../action/userActions';


const userSlice = createSlice({
    name: 'users',
    initialState: {
        user: {},
        isLoggedIn: false,
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
            .addCase(login.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload
                state.isLoggedIn = true;
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload
            })
            .addCase(logout.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(logout.fulfilled, (state, action) => {
                state.loading = false;
                state.user = {}
                state.isLoggedIn = false;
            })
            .addCase(logout.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload
            })
    }
});

export const { resetError } = userSlice.actions;
export default userSlice.reducer;
