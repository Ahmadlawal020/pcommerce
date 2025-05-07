// store.js
import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "../feautures/order/orderSlice";

export const store = configureStore({
  reducer: {
    order: orderReducer,
  },
});
