// Library Imports
import { createSlice } from "@reduxjs/toolkit";

// creating a redux slice with slice name, initial value object and reducer functions
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartList: [],
    total: 0,
  },
  reducers: {
    // reducer to add products in to the cart and update total price
    add(state, action) {
      const updatedCartList = state.cartList.concat(action.payload); //concatenating the existing cartList array with the array provided in action.payload.
      const total = state.total + action.payload.price; // updating the total value property
      return { ...state, total: total, cartList: updatedCartList }; // returning the updatedCartList and Total value
    },
    // reducer to remove products in to the cart and update total price
    remove(state, action) {
      // removing the products which are removed from the cart into updatedCartList
      const updatedCartList = state.cartList.filter(
        (item) => item.id !== action.payload.id
      );
      const total = state.total - action.payload.price; // updating the total price after removing a product
      return { ...state, total: total, cartList: updatedCartList }; // returning the updatedCartList and Total value
    },
  },
});

// exporting the add and remove action creators from the cartSlice.actions object
export const { add, remove } = cartSlice.actions;

//exporting the reducer function created by createSlice from cartSlice module.
export const cartReducer = cartSlice.reducer;
