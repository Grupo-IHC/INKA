import { createSlice } from '@reduxjs/toolkit';

export const registerSlice = createSlice({
    name: 'register',
    initialState: {
        ok: false,
        status: null,
        message: null,
    },
    reducers: {
      successfulRegister: (state, {payload}) => {
          state.ok = true;
          state.status = payload.status;
          state.message = payload.msg;
      },
      failedRegister: (state, {payload}) => {
          state.ok = true;
          state.status = payload.status;
          state.message = payload.msg;
      },
    }
});

export const { successfulRegister, failedRegister } = registerSlice.actions;