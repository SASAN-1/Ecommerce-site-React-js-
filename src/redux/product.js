import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("products", async () => {
    const res = await fetch("http://localhost:3000/products");
    return await res.json();
});

const initialState ={
    items: [],
    status: undefined,
};

const productSlice = createSlice ({
    name:"products",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state,action) =>{
            ((state.items = action.payload), (state.status="success"));
        });
    },
});

export default productSlice.reducer;