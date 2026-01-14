import { createSlice } from '@reduxjs/toolkit'

const savedCart = JSON.parse(localStorage.getItem("cart"));
const initialState = {
    cartItems: savedCart?.cartValue || [],
    tempItems: [],
    totalPrice: savedCart?.cartTotalValue || 0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.cartItems.find((item) => item._id === action.payload._id)
            if (existingItem) {
                existingItem.quantity += 1
            } else {
                state.cartItems.push({ ...action.payload, quantity: 1 })
            }

            state.totalPrice = state.cartItems.reduce((sum, item) => {
                return sum + item.price * item.quantity
            }, 0)

            localStorage.setItem("cart", JSON.stringify({
                cartValue: state.cartItems,
                cartTotalValue: state.totalPrice
            }));
        },

        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter((item) => item._id !== action.payload._id)
            state.totalPrice = state.cartItems.reduce((sum, item) => {
                return sum + item.price * item.quantity
            }, 0)

            localStorage.setItem("cart", JSON.stringify({
                cartValue: state.cartItems,
                cartTotalValue: state.totalPrice
            }));
        }
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions

export default cartSlice.reducer