import { createSlice } from "@reduxjs/toolkit";

const cartStore = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.filter((item) => {
        return item !== action.payload;
      });
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export default cartStore.reducer;
export const { addItem, removeItem, clearCart } = cartStore.actions;
