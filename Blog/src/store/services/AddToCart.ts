import { createSlice } from "@reduxjs/toolkit";


const InitialState = {
  toggleAddToCartSidebar: false,
  productCards: [{ id: "", name: "", price: "" }]
};

const addToCart = createSlice({
  name: "addtocart",
  initialState: InitialState,
  reducers: {
    toggleAddToCartSidebarAction(state, action) {
      const { newStatus } = action.payload;
      state.toggleAddToCartSidebar = newStatus;
    },
    productCardsAddition(state, action) {
      const { product } = action.payload;
      const productExist = state.productCards.some((val) => val.id === product.id)
      if (state.productCards.some((val) => val.id === "")) {
        state.productCards = [product]
      } else {
        if (!productExist) {
          state.productCards = [...state.productCards, product]
        }
      }

    }
  },
});

export const { toggleAddToCartSidebarAction, productCardsAddition } = addToCart.actions;
export default addToCart.reducer;


// types for this slice
export type Product = { id: number, name: string, price: number }
export interface IAddToCartState {
  addtocartSlice: {
    toggleAddToCartSidebar: boolean,
    productCards: [Product] | null
  }
}