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
            state.cartTotalAmount = Math.round((state.cartTotalAmount + payload.total) * 100)/100;
        },
        aumentQuantity(state, {payload}) {
            const itemId = state.cartItems.findIndex(item => item.id === payload.id);
            state.cartItems[itemId].quantity += 1;
            state.cartItems[itemId].total += state.cartItems[itemId].price;
            state.cartTotalQuantity += 1;
            state.cartTotalAmount = Math.round((state.cartTotalAmount + state.cartItems[itemId].price)*100)/100;
        },
        decrementQuantity(state, {payload}) {
            const itemId = state.cartItems.findIndex(item => item.id === payload.id);
            if(state.cartItems[itemId].quantity === 1) return;
            state.cartItems[itemId].quantity -= 1;
            state.cartItems[itemId].total -= state.cartItems[itemId].price;
            state.cartTotalQuantity -=1;
            state.cartTotalAmount = Math.round((state.cartTotalAmount - state.cartItems[itemId].price)*100)/100;
        },
        deleteProduct(state, {payload}) {
            const itemId = state.cartItems.findIndex(item => item.id === payload.id);
            state.cartTotalQuantity -= state.cartItems[itemId].quantity;
            state.cartTotalAmount = Math.round((state.cartTotalAmount - state.cartItems[itemId].total) * 100)/100;
            const newCartItems = state.cartItems.filter((item, index) => index !== itemId);
            state.cartItems = newCartItems;
            // console.log(JSON.parse(JSON.stringify(newCartItems)));
        }
    }
});

export const {addToCart, aumentQuantity, decrementQuantity, deleteProduct} = shoppingCartSlice.actions;