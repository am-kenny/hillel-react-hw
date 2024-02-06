import {configureStore} from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice.jsx";
import cartReducer from "./slices/cartSlice.jsx";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        cart: cartReducer
    }
})