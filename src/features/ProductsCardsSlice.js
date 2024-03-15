import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllCards } from "../Services/CardsServices";

const initialState = {
  cards: [],
  status: "idle",
  error: null,
};

export const fetchCards = createAsyncThunk("/cards/fetchCards", async () => {
  const response = await getAllCards();
  return response.data;
});

const ProductCardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCards.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(fetchCards.fulfilled, (state, action) => {
        state.status = "completed";
        state.cards = action.payload;
      })
      .addCase(fetchCards.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default ProductCardsSlice.reducer;
export const selectCards = (state) => state.cards.cards;
export const selectCardsStatus = (state) => state.cards.status;
