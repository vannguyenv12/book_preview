import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: {
    email: "",
    phone: "",
    fullName: "",
    role: "",
    avatar: "",
    id: "",
  },
};

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    doLoginAction: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    doFetchAction: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { doLoginAction, doFetchAction } = accountSlice.actions;

export default accountSlice.reducer;
