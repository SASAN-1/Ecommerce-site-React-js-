import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./product.js";
import cartReducer from "./slice.js";
import AuthReducer from "./auth.js";

const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
    auth: AuthReducer,
  },
});

export default store;
