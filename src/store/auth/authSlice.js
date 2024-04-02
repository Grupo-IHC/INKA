import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'not-authenticated',
        // id: null,
        email: null,
        name: null,
        lastName: null,
        errorMessage: null,
    },
    reducers: {
      login: (state, {payload}) => {
        state.status = 'authenticated';
        state.id = payload.user;
        state.email = payload.email;
        state.name = payload.first_name;
        state.lastName = payload.last_name;
        state.errorMessage = payload.errorMessage;
      },
      logout: (state, {payload}) => {
        state.status = 'not-authenticated';
        state.id = null;
        state.email = null;
        state.name = null;
        state.lastName = null;
        // state.errorMessage = payload.errorMessage;
      },
      checkingCredentials: (state) => {
        state.status = 'checking';
      }
    }
});

export const { login, logout, checkingCredentials } = authSlice.actions;