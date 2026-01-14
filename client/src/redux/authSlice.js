import { createSlice } from "@reduxjs/toolkit";


// redux/authSlice.js
const initialState = {
    isAuthenticated: false,
    user: null,
    loading: true, // 👈 VERY IMPORTANT
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuth(state, action) {
            state.isAuthenticated = true;
            state.user = action.payload;
            state.loading = false;
        },
        clearAuth(state) {
            state.isAuthenticated = false;
            state.user = null;
            state.loading = false;
        },
        setLoading(state) {
            state.loading = true;
        },
        removeAddress(state) {
            if (state.user) {
                delete state.user.address;
            }
        },
        saveAddress(state, action) {
            if (state.user) {
                state.user.address = action.payload
            }
        },
    },
});

export const { setAuth, clearAuth, setLoading, removeAddress, saveAddress } = authSlice.actions;
export default authSlice.reducer;








// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// export const updateUser = createAsyncThunk("auth/updateUser", async (_, { rejectWithValue }) => {
//     try {
//         const response = await axios.get(
//             "http://localhost:3000/api/user/me",
//             { withCredentials: true }
//         );
//         return response.data.user; // ✅ return data only
//     } catch (error) {
//         return rejectWithValue("Failed to get updateed stat of user");
//     }
// }
// );


// const initialState = {
//     isAuthenticated: false,
//     user: null,
//     loading: true,
// };

// const authSlice = createSlice({
//     name: "auth",
//     initialState,
//     reducers: {
//         clearAuth(state) {
//             state.isAuthenticated = false;
//             state.user = null;
//             state.loading = false;
//         },
//     },
//     extraReducers: (builder) => {
//         builder
//             .addCase(updateUser.pending, (state) => {
//                 state.loading = true;
//             })
//             .addCase(updateUser.fulfilled, (state, action) => {
//                 state.isAuthenticated = true;
//                 state.user = action.payload;
//                 state.loading = false;
//             })
//             .addCase(updateUser.rejected, (state) => {
//                 state.isAuthenticated = false;
//                 state.user = null;
//                 state.loading = false;
//             });
//     },
// });

// export const { clearAuth } = authSlice.actions;
// export default authSlice.reducer;









