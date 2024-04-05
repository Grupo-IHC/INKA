import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'not-authenticated',
        id: null,
        message: null,
    },
    reducers: {
      login: (state, {payload}) => {
        state.status = 'authenticated';
        state.id = payload.user;
        state.message = payload.confirmation;
      },
      logout: (state, {payload}) => {
        state.status = 'not-authenticated';
        state.id = null;
        state.message = payload.detail;
      },
      checkingCredentials: (state) => {
        state.status = 'checking';
      }
    }
});

export const { login, logout, checkingCredentials } = authSlice.actions;