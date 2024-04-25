import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'not-authenticated',
        id: null,
        email: null,
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
        state.message = null;
      },
      checkingCredentials: (state) => {
        state.status = 'checking';
      },
      restorePassword: (state, {payload}) => {
        state.email = payload
      }
    }
});

export const { login, logout, checkingCredentials, restorePassword } = authSlice.actions;