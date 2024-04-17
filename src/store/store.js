import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { shopppingCartSlice } from "./auth/shoppingCartSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    shoppingCart: shopppingCartSlice.reducer,
  },
})