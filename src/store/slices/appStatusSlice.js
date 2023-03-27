import { isEmpty } from "lodash";
import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

import { THEMES, THEME_KEYS } from "@/constants/constants";

const initialState = {
  theme: THEME_KEYS.SOPHISTICATED,
  currentPage: 1,
  fullWidget: null,
  primaryColor: THEMES[THEME_KEYS.SOPHISTICATED].colorPalette.primaryColors[0],
  backgroundImage: null,
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
      state.theme = theme;
      if (isEmpty(state.backgroundImage)) {
        const primaryColor = THEMES[theme].colorPalette.primaryColors[0];
        state.primaryColor = primaryColor;
      }
    },
    setFullWidget: (state, action) => {
      state.fullWidget = action.payload;
    },
    resetFullWidget: (state, action) => {
      state.fullWidget = null;
    },
    setPrimaryColor: (state, action) => {
      state.primaryColor = action.payload;
    },
    setBackgroundImage: (state, action) => {
      state.backgroundImage = action.payload;
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
  setPrimaryColor,
  setBackgroundImage,
  setFullWidget,
  resetFullWidget,
} = appStatusSlice.actions;
export const selectCurrentPage = (state) => state.appStatus.currentPage;
export const selectCurrentTheme = (state) => state.appStatus.theme;
export const selectFullWidget = (state) => state.appStatus.fullWidget;
export const selectPrimaryColor = (state) => state.appStatus.primaryColor;
export const selectBackgroundImage = (state) => state.appStatus.backgroundImage;
export default appStatusSlice.reducer;
