import { createSlice } from "@reduxjs/toolkit";

export const userDataSlice = createSlice({
  name: "userData",
  initialState: {},
  reducers: {
    userDetails: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { userDetails } = userDataSlice.actions;
export const userData = (state) => state.userData;

export default userDataSlice.reducer;
