import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import { THEME_KEYS } from '@/constants/constants';

const initialState = {
  theme: THEME_KEYS.SOPHISTICATED,
  currentPage: 1,
  fullWidget: null,
};

export const appStatusSlice = createSlice({
  name: 'appStatus',
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
  setFullWidget,
  resetFullWidget,
} = appStatusSlice.actions;
export const selectCurrentPage = (state) => state.appStatus.currentPage;
export const selectCurrentTheme = (state) => state.appStatus.theme;
export default appStatusSlice.reducer;
