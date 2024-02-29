import { configureStore } from "@reduxjs/toolkit";
import formDataSlice from "../features/FormSlice";
import CardsReducer from "../features/ProductsCardsSlice";
import digitalProductsReducer from "../features/DigitalProductsSlice";

const store = configureStore({
  reducer: {
    formData: formDataSlice,
    cards: CardsReducer,
    digitalProducts: digitalProductsReducer,
  },
});

export default store;
