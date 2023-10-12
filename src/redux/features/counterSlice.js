import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  baseValue: 0,
};

export const counter = createSlice({
  name: "counter",
  initialState,
  reducers: {
    reset: () => initialState,
    setBase: (state, action) => {
      state.baseValue = action.payload;
    },
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByValue: (state, action) => {
      state.value += parseInt(action.payload);
    },
    decrementByValue: (state, action) => {
      state.value -= parseInt(action.payload);
    },
  },
});

export const {
  reset,
  increment,
  decrement,
  incrementByValue,
  decrementByValue,
  setBase
} = counter.actions;

export default counter.reducer;
