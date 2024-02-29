import { createSlice } from "@reduxjs/toolkit";
import DigitalProducts from "../assets/MainPageImage/DigitalProducts.jpg"
import entertainment from "../assets/MainPageImage/entertainmentProducts.jpg"
import houseProducts from "../assets/MainPageImage/houseProducts.png"
import industrialProduct from "../assets/MainPageImage/industerialProduct.jpg"
import transportProducts from "../assets/MainPageImage/transportProducts.jpg"
import sportsProducts from "../assets/MainPageImage/sportsProducts.jpg"
const initialState = {
  cards: [
    { id: 1, title: "کالای دیجیتال" , identifier:"card1" , image: DigitalProducts},
    { id: 2, title: "خانه و آشپزخانه"  , identifier:"card2" ,image: houseProducts},
    { id: 3, title: "سرگرمی و فراغت"  , identifier:"card3" , image: entertainment},
    { id: 4, title: "تجهیزات  و صنعتی"  , identifier:"card4" , image: industrialProduct},
    { id: 5, title: "وسایل نقلیه"  , identifier:"card5" , image: transportProducts},
    { id: 6, title: "وسایله ورزشی"  , identifier:"card6" , image: sportsProducts}
  ],
};
const ProductCardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {},
});

export default ProductCardsSlice.reducer;
export const selectCards = (state) => state.cards.cards;
