import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cards: [
    { id: 1, title: "Card1", content: "hello card one" },
    { id: 2, title: "Card2", content: "hello card two" },
    { id: 3, title: "Card3", content: "hello card three" },
    { id: 4, title: "Card4", content: "hello card four" },
    { id: 5, title: "Card5", content: "hello card five" },
    { id: 6, title: "Card6", content: "hello card six" },
  ],
};
const ProductCardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {},
});

export default ProductCardsSlice.reducer;
export const selectCards = (state) => state.cards.cards;
