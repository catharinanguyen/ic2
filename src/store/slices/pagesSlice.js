import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
  allPages: [],
};

export const pagesSlice = createSlice({
  name: 'pages',
  initialState,
  reducers: {
    addPage: (state, action) => {
      state.allPages = [...state.allPages, action.payload];
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

export const { nextPage, setPage } = pagesSlice.actions;
// export const selectComments = (state) => state.comments.value;
export default pagesSlice.reducer;
