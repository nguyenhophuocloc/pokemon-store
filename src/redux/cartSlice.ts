import { createSlice } from "@reduxjs/toolkit";
import { CartState } from "./../interface";

//Defining our initialState's type
type initialStateType = {
  cartList: CartState[];
};

const cartList: CartState[] = [];

const initialState: initialStateType = {
  cartList,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const exist = state.cartList.findIndex(
        (x: CartState) => x.product.id === action.payload.detail.id
      );
      if (exist >= 0) {
        state.cartList[exist].quantity += 1;
      } else {
        state.cartList.push({ product: action.payload.detail, quantity: 1 });
      }
    },

    deleteItem(state, action) {
      const exist = state.cartList.findIndex(
        (x) => x.product.id === action.payload.detail.id
      );

      if (state.cartList[exist].quantity > 1) {
        state.cartList[exist].quantity -= 1;
      } else {
        state.cartList.splice(exist, 1);
      }
    },
  },
});

export const { addItem, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;
