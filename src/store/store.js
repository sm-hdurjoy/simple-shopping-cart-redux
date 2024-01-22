// Library Imports
import { configureStore } from "@reduxjs/toolkit";

// Component Imports
import { cartReducer } from "./cartSlice";

// function to create the Redux store with the cartState reducer.
export const store = configureStore({
  reducer: {
    cartState: cartReducer,
  },
});
