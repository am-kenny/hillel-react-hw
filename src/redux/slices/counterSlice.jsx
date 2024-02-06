import {createSlice} from "@reduxjs/toolkit";

const initialState = 0;

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => state + 1,
        decrement: (state) => state - 1,
        reset: () => initialState,
        incrementByAmount: (state, {payload}) => state + payload,
        decrementByAmount: (state, {payload}) => state - payload
    }
})

export const {
    increment,
    decrement,
    reset,
    incrementByAmount,
    decrementByAmount
} = counterSlice.actions;

export default counterSlice.reducer;