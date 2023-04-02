import { createSlice } from "@reduxjs/toolkit";

export const tokenSlice = createSlice({
  name: "token",
  initialState: {
    token: "",
  },
  reducers: {
    updateToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { updateToken } = tokenSlice.actions;
export const token = (state) => state.token;

export default tokenSlice.reducer;
