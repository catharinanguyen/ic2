import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
  currentPage: 1,
  totalPages: 2,
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

    // Special reducer for hydrating the state
    extraReducers: {
      [HYDRATE]: (state, action) => {
        return {
          ...state,
        };
      },
    },
  },
});

export const { nextPage, setPage } = appStatusSlice.actions;
// export const selectComments = (state) => state.comments.value;
export default appStatusSlice.reducer;
