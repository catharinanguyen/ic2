import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { capitalize } from "lodash";

import { TEXT_TYPES, THEMES, THEME_KEYS } from "@/constants/constants";

const initialState = {
  theme: THEME_KEYS.SOPHISTICATED,
  currentPage: 1,
  fullWidget: null,
  primaryColor: THEMES[THEME_KEYS.SOPHISTICATED].colorPalette.primaryColors[0],
  textType: capitalize(TEXT_TYPES.COMPACT),
};

console.log(TEXT_TYPES.COMPACT);

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
    setPrimaryColor: (state, action) => {
      state.primaryColor = action.payload;
    },
    setTextType: (state, action) => {
      state.textType = action.payload;
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
  setTextType,
  setPrimaryColor,
  setFullWidget,
  resetFullWidget,
} = appStatusSlice.actions;
export const selectCurrentPage = (state) => state.appStatus.currentPage;
export const selectCurrentTheme = (state) => state.appStatus.theme;
export const selectFullWidget = (state) => state.appStatus.fullWidget;
export const selectPrimaryColor = (state) => state.appStatus.primaryColor;
export const selectTextType = (state) => state.appStatus.textType;
export default appStatusSlice.reducer;
