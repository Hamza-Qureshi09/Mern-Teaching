import { configureStore } from "@reduxjs/toolkit";
import AddToCart from "./services/AddToCart";

export const store = configureStore({
  reducer: {
    addtocartSlice: AddToCart,
  },
});
