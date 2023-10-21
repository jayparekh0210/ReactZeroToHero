import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../Helper/CartSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export default store;
