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
      delivery: 0,
      contact: {
        address: '',
        contactName: '',
        contactDni: '',
        typeDelivery: '',
        method_payment: '',
      }
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
      local(state.cartItems,state.cartTotalQuantity, state.cartTotalAmount);
    },
    restartShoppingCart(state) {
      state.cartItems =[];
      state.cartTotalQuantity = 0;
      state.cartTotalAmount = 0;
      local(state.cartItems,state.cartTotalQuantity, state.cartTotalAmount);
    },
    saveContact(state, {payload}) {
      if(payload.typeDelivery === "delivery") {
        state.contact = {
          ...state.contact,
          address: payload.address,
          contactName: payload.contact,
          contactDni: payload.nroDocument,
          typeDelivery: 'bbb7dafa-45f6-4ec3-87d7-520624f58770' 
        };
        state.delivery = 20;
      } else {
        state.contact = {
          ...state.contact,
          contactName: payload.contact,
          contactDni: payload.nroDocument,
          address: '',
          typeDelivery: '0c209139-9381-4a4e-b4de-7b9135c3006d'
        }
        state.delivery = 0;
      }
    },
    saveMethodPayment(state, {payload}) {
      if(payload === 'tarjeta') {
        state.contact = {
        ...state.contact,
        method_payment : 'caa5ad1e-5c83-440b-a232-80fb6b01f28c'
        }
      } else {
        state.contact = {
          ...state.contact,
          method_payment : "918121ee-551b-4618-b0c9-0f9cf46898ec"
        }
      }
    }
  }
});

export const {addToCart, aumentQuantity, decrementQuantity, deleteProduct, restartShoppingCart, saveContact, saveMethodPayment} = shoppingCartSlice.actions;