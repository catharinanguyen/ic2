import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

import { COLOR_KEYS, THEME_KEYS } from "@/constants/constants";

const initialState = {
  theme: THEME_KEYS.SOPHISTICATED,
  currentPage: 1,
  fullWidget: null,
  color: COLOR_KEYS.SOPHISTICATED_GREEN,
};

export const appStatusSlice = createSlice({
  name: "appStatus",
  initialState,
  reducers: {
    nextPage: (state, action) => {
      state.currentPage = state.currentPage + 1;
    },
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    setFullWidget: (state, action) => {
      state.fullWidget = action.payload;
    },
    resetFullWidget: (state, action) => {
      state.fullWidget = null;
    },
    setColor: (state, action) => {
      state.color = action.payload;
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
  nextPage,
  setPage,
  setTheme,
  setColor,
  setFullWidget,
  resetFullWidget,
} = appStatusSlice.actions;
export const selectCurrentPage = (state) => state.appStatus.currentPage;
export const selectCurrentTheme = (state) => state.appStatus.theme;
export const selectFullWidget = (state) => state.appStatus.fullWidget;
export const selectCurrentColor = (state) => state.appStatus.color;
export default appStatusSlice.reducer;
