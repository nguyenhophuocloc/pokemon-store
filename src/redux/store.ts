import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";


const rootReducer = {
  /*products: productsReducer,*/
  cart: cartSlice
};

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>

export default store
