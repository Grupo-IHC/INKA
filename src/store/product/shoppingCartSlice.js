import { createSlice } from '@reduxjs/toolkit';

export const shoppingCartSlice = createSlice({
    name: 'shoppingCart',
    initialState: {
        cartItems: [],
        cartTotalQuantity: 0,
        cartTotalAmount: 0,
    },
    reducers: {
        addToCart(state, {payload}) {
            const itemId = state.cartItems.findIndex(item => item.id === payload.id);

            if(itemId >= 0) {
                state.cartItems[itemId].quantity += payload.quantity;
                state.cartItems[itemId].total += payload.total;
            } else {
                state.cartItems = [...state.cartItems, payload];
            }
            state.cartTotalQuantity += payload.quantity;
            state.cartTotalAmount += payload.total;
        }
    }
});

export const {addToCart} = shoppingCartSlice.actions;