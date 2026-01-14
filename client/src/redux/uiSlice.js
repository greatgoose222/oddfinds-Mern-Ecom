// store/uiSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isMenuOpen: false,
    isCartOpen: false,
};

const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        openMenu: (state) => {
            state.isMenuOpen = true;
            state.isCartOpen = false; // ✅ close cart
        },
        closeMenu: (state) => {
            state.isMenuOpen = false;
        },

        openCart: (state) => {
            state.isCartOpen = true;
            state.isMenuOpen = false; // ✅ close menu
        },
        closeCart: (state) => {
            state.isCartOpen = false;
        },
        closeAll: (state) => {
            state.isMenuOpen = false;
            state.isCartOpen = false;
        }
    }
});

export const { openMenu, closeMenu, openCart, closeCart, closeAll } = uiSlice.actions;

export default uiSlice.reducer;
