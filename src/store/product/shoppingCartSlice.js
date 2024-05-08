import { createSlice } from '@reduxjs/toolkit';

const local = (cart, quantity, total) => {
  localStorage.setItem('cart', JSON.stringify(cart));
  localStorage.setItem('cartTotalQuantity', JSON.stringify(quantity));
  localStorage.setItem('cartTotalAmount', JSON.stringify(total));
}


export const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState: {
      cartItems: JSON.parse(localStorage.getItem('cart')) || [],
      cartTotalQuantity: JSON.parse(localStorage.getItem('cartTotalQuantity')) || 0,
      cartTotalAmount: JSON.parse(localStorage.getItem('cartTotalAmount')) || 0,
  },
  reducers: {
    addToCart(state, {payload}) {
      const itemId = state.cartItems.findIndex(item => item.id === payload.id);
      if(itemId >= 0  && state.cartItems[itemId].design === payload.design) {
        state.cartItems[itemId].quantity += payload.quantity;
        state.cartItems[itemId].total += payload.total;
      } else {
        state.cartItems = [...state.cartItems, payload];
      }
      state.cartTotalQuantity += payload.quantity;
      state.cartTotalAmount = Math.round((state.cartTotalAmount + payload.total) * 100)/100;
      local(state.cartItems,state.cartTotalQuantity, state.cartTotalAmount);
    },
    aumentQuantity(state, {payload}) {
      const itemId = state.cartItems.findIndex(item => item.id === payload.id);
      state.cartItems[itemId].quantity += 1;
      state.cartItems[itemId].total += state.cartItems[itemId].price;
      state.cartTotalQuantity += 1;
      state.cartTotalAmount = Math.round((state.cartTotalAmount + state.cartItems[itemId].price)*100)/100;
      local(state.cartItems,state.cartTotalQuantity, state.cartTotalAmount);
    },
    decrementQuantity(state, {payload}) {
      const itemId = state.cartItems.findIndex(item => item.id === payload.id);
      if(state.cartItems[itemId].quantity === 1) return;
      state.cartItems[itemId].quantity -= 1;
      state.cartItems[itemId].total -= state.cartItems[itemId].price;
      state.cartTotalQuantity -=1;
      state.cartTotalAmount = Math.round((state.cartTotalAmount - state.cartItems[itemId].price)*100)/100;
      local(state.cartItems,state.cartTotalQuantity, state.cartTotalAmount);
    },
    deleteProduct(state, {payload}) {
      const itemId = state.cartItems.findIndex(item => item.id === payload.id);
      state.cartTotalQuantity -= state.cartItems[itemId].quantity;
      state.cartTotalAmount = Math.round((state.cartTotalAmount - state.cartItems[itemId].total) * 100)/100;
      const newCartItems = state.cartItems.filter((item, index) => index !== itemId);
      state.cartItems = newCartItems;
      // console.log(JSON.parse(JSON.stringify(newCartItems)));
      local(state.cartItems,state.cartTotalQuantity, state.cartTotalAmount);
    },
    restartShoppingCart(state) {
      state.cartItems =[];
      state.cartTotalQuantity = 0;
      state.cartTotalAmount = 0;
      local(state.cartItems,state.cartTotalQuantity, state.cartTotalAmount);
    }
  }
});

export const {addToCart, aumentQuantity, decrementQuantity, deleteProduct} = shoppingCartSlice.actions;