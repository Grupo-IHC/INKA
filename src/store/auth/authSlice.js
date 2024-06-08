import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'not-authenticated',
        id: null,
        user:null,
        email: null,
        message: null,
    },
    reducers: {
      login: (state, {payload}) => {
        state.status = 'authenticated';
        state.user = payload.user;
        state.id = payload.id;
        state.email = payload.email;
        state.message = payload.confirmation;
      },
      logout: (state) => {
        state.status = 'not-authenticated';
        state.id = null;
        state.user = null;
        state.email = null;
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