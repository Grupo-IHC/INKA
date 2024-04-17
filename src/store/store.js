import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { shoppingCartSlice } from "./product/shoppingCartSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    shoppingCart: shoppingCartSlice.reducer

  },
})