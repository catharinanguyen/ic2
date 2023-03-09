import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
  currentPage: 1,
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
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
      };
    },
  },
});

export const { nextPage, setPage } = appStatusSlice.actions;
export const selectCurrentPage = (state) => state.appStatus.currentPage;
export default appStatusSlice.reducer;
