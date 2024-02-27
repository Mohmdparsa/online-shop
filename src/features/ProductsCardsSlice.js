import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cards: [
    { id: 1, title: "کالای دیجیتال" , identifier:"card1"},
    { id: 2, title: "خانه و آشپزخانه"  , identifier:"card2" },
    { id: 3, title: "خدمات"  , identifier:"card3" },
    { id: 4, title: "وسایل شخصی"  , identifier:"card4"},
    { id: 5, title: "سرگرمی و فراغت"  , identifier:"card5" },
    { id: 6, title: "اجتماعی"  , identifier:"card6"},
    { id: 7, title: "تجهیزات  و صنعتی"  , identifier:"card7"},
    { id: 8, title: "وسایل نقلیه"  , identifier:"card8"},
  ],
};
const ProductCardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {},
});

export default ProductCardsSlice.reducer;
export const selectCards = (state) => state.cards.cards;
