import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: JSON.parse(localStorage.getItem("cart")) || [],
  user: JSON.parse(localStorage.getItem("user")) || null,
  isLoggedIn: JSON.parse(localStorage.getItem("isLoggedIn")) || false,
};

const Auth = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;

      localStorage.setItem("user", JSON.stringify(action.payload));
      localStorage.setItem("isLoggedIn", JSON.stringify(true));
    },

    logout: (state) => {
      state.user = null;
      state.isLoggedIn = false;

      localStorage.removeItem("user");
      localStorage.removeItem("isLoggedIn");
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  updateQuantity,
  clearCart,
  login,
  logout,
} = Auth.actions;
export default Auth.reducer;
