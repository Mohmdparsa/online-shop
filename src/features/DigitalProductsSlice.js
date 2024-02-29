import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCategory: null,
};

const DigitalProductsSlice = createSlice({
  name: "digitalProducts",
  initialState,
  reducers: {
    setSelectedCategory(state, action) {
      state.selectedCategory = action.payload;
    },
  },
});

export default DigitalProductsSlice.reducer
export const {setSelectedCategory} = DigitalProductsSlice.actions
