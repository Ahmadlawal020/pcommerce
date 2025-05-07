import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  step: 1, // 1: Customer Info, 2: Products, 3: Delivery
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setStep: (state, action) => {
      state.step = action.payload;
    },
    nextStep: (state) => {
      state.step += 1;
    },
    prevStep: (state) => {
      state.step -= 1;
    },
    resetOrderSteps: () => initialState,
  },
});

export const { setStep, nextStep, prevStep, resetOrderSteps } =
  orderSlice.actions;

export default orderSlice.reducer;
