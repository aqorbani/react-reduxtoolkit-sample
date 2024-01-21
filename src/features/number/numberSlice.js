import { createSlice } from "@reduxjs/toolkit";
import { increment as inc } from "../counter/counterSlice";

const initialState = {
  numberValue: 5,
};

const numberSlice = createSlice({
  name: "number",
  initialState,
  reducers: {
    increment: (state) => {
      state.numberValue++;
    },
    decrement: (state) => {
      state.numberValue--;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(inc, (state, action) => {
      state.numberValue++;
    });
  },
});

export default numberSlice.reducer;
export const { increment, decrement } = numberSlice.actions;
