import { createSlice } from '@reduxjs/toolkit';

export const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    modalIsOpen: false,
    typeModal: '',
  },
  reducers: {
    openModal: (state, /* action */ ) => {
      state.modalIsOpen = true;
    },
    closeModal: (state) => {
      state.modalIsOpen = false;
      state.typeModal = '';
    },
    selectTypeModal: (state, {payload}) => {
      state.typeModal = payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { openModal, closeModal, selectTypeModal } = modalSlice.actions;