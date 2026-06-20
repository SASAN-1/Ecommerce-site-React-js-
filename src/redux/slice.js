import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  items: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
};

const Cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id,
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    removeItemFromCart: (state, action) => {
      const cartData = state.items.filter(
        (cartItem) => cartItem.id != action.payload.id,
      );
      state.items = cartData;
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    clearCart: (state) => {
      state.items = [];
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find((i) => i.id === id);
      if (item) item.quantity = quantity;
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
  },
});

export const { addItemToCart, removeItemFromCart, clearCart, updateQuantity } =
  Cart.actions;
export default Cart.reducer;
