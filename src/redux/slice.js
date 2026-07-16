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
        (item) =>
          item.id === action.payload.id && item.size === action.payload.size,
      );

      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }

      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    removeItemFromCart: (state, action) => {
      state.items = state.items.filter(
        (item) =>
          !(item.id === action.payload.id && item.size === action.payload.size),
      );

      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    clearCart: (state) => {
      state.items = [];
    },
    updateQuantity: (state, action) => {
      const { id, size, quantity } = action.payload;

      const item = state.items.find((i) => i.id === id && i.size === size);

      if (item) {
        item.quantity = quantity;
      }

      localStorage.setItem("cart", JSON.stringify(state.items));
    },
  },
});

export const { addItemToCart, removeItemFromCart, clearCart, updateQuantity } =
  Cart.actions;
export default Cart.reducer;
