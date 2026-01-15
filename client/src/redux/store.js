import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartSlice.js'
import uiReducer from './uiSlice.js'
import authReducer from './authSlice.js'

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        ui: uiReducer,
        auth: authReducer
    },
})