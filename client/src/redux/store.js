import { configureStore } from '@reduxjs/toolkit'
import productReducer from './productSlice.js'
import cartReducer from './cartSlice.js'
import uiReducer from './uiSlice.js'
import authReducer from './authSlice.js'

export const store = configureStore({
    reducer: {
        product: productReducer,
        cart: cartReducer,
        ui: uiReducer,
        auth: authReducer
    },
})