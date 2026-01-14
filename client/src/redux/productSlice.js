import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

export const getProducts = createAsyncThunk('products/get', async () => {
    const response = await axios.get('http://localhost:3000/api/product/', {
        withCredentials: true
    })
    return response.data.products;
})

const initialState = {
    items: [],
    status: 'idle'
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state) => {
            state.status = 'loading'
        })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.status = 'succeed';
                state.items = action.payload;
            })
            .addCase(getProducts.rejected, (state) => {
                state.status = 'failed'
            })
    }
})



export default productSlice.reducer