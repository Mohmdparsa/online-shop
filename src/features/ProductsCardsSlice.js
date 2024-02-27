import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cards: [
    { id: 1, title: "کالای دیجیتال" },
    { id: 2, title: "خانه و آشپزخانه" },
    { id: 3, title: "خدمات" },
    { id: 4, title: "وسایل شخصی" },
    { id: 5, title: "سرگرمی و فراغت" },
    { id: 6, title: "اجتماعی" },
    { id: 7, title: "تجهیزات  و صنعتی" },
    { id: 8, title: "وسایل نقلیه" },
  ],
};
const ProductCardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {},
});

export default ProductCardsSlice.reducer;
export const selectCards = (state) => state.cards.cards;
