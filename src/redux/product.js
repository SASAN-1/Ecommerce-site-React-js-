import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Fetches products from api
export const fetchProducts = createAsyncThunk("products", async (endPoint) => {
  const res = await axios.get(`http://localhost:3000/${endPoint}`);
  return res.data;
});

const initialState = {
  items: [],
  status: undefined,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    // Stores the products in items
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
        state.items = [];
      })

      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = "success";
      });
  },
});

export default productSlice.reducer;
