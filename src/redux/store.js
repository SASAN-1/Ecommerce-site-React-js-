import { configureStore } from '@reduxjs/toolkit'
import productReducer from "./product.js"
import cartReducer from "./slice.js"

const store = configureStore({
    reducer: {
        product: productReducer,
        cart: cartReducer,
    },
}); 

export default store;