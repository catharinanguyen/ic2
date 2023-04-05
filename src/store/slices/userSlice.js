import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state = { ...action.payload };
      return state;
    },
    logout: (state, action) => {
      state = initialState;
      return state;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
      };
    },
  },
});

export const {
  loginSuccess,
  logout,
} = userSlice.actions;
export const selectUser = (state) => state.user;
export default userSlice.reducer;
