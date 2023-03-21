import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

import { COLOR_KEYS, THEMES, THEME_KEYS } from "@/constants/constants";

const initialState = {
  theme: THEME_KEYS.SOPHISTICATED,
  currentPage: 1,
  fullWidget: null,
  color: COLOR_KEYS.SOPHISTICATED_GREEN,
  primaryColor: THEMES[THEME_KEYS.SOPHISTICATED].colorPalette.primaryColors[0],
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
      const theme = action.payload;
      const primaryColor = THEMES[theme].colorPalette.primaryColors[0];
      state.theme = theme;
      state.primaryColor = primaryColor;
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
    setPrimaryColor: (state, action) => {
      state.primaryColor = action.payload;
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
  setPrimaryColor,
  setFullWidget,
  resetFullWidget,
} = appStatusSlice.actions;
export const selectCurrentPage = (state) => state.appStatus.currentPage;
export const selectCurrentTheme = (state) => state.appStatus.theme;
export const selectFullWidget = (state) => state.appStatus.fullWidget;
export const selectCurrentColor = (state) => state.appStatus.color;
export const selectPrimaryColor = (state) => state.appStatus.primaryColor;
export default appStatusSlice.reducer;
