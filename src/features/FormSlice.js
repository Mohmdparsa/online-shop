import { createSlice } from "@reduxjs/toolkit";

const LoginSlice = createSlice({
  name: "formData",
  initialState: { fullname: "" },
  reducers: {
    updateFormData: (state, action) => {
      state.fullname = action.payload;
    },
  },
});

export default LoginSlice.reducer;
export const { updateFormData } = LoginSlice.actions;
