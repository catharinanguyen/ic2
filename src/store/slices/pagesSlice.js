import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

import { GRID_POSITIONS, LAYOUT_TYPES, WIDGET_TYPES } from '@/constants/constants';

const DEFAULT_PAGE = {
  layout: LAYOUT_TYPES.ONE_COL_TWO_CELLS,
  widgets: {
    [GRID_POSITIONS.FULL_COLUMN_1]: WIDGET_TYPES.MAP,
    [GRID_POSITIONS.CELL_1_2]: WIDGET_TYPES.AGENDA,
    [GRID_POSITIONS.CELL_2_2]: WIDGET_TYPES.MUSIC,
  }
}

const initialState = {
  allPages: [
    {
      ...DEFAULT_PAGE,
    },
  ],
  totalPages: 1,
};

export const pagesSlice = createSlice({
  name: "pages",
  initialState,
  reducers: {
    addPage: (state, action) => {
      state.allPages = [...state.allPages, { ...DEFAULT_PAGE }];
      state.totalPages += 1;
    },
    removePage: (state, action) => {
      const { pageNo } = action.payload;
      const subPagesFront = state.allPages.slice(0, pageNo - 1);
      const subPagesBehind = state.allPages.slice(pageNo);
      state.allPages = [...subPagesFront, ...subPagesBehind];
      state.totalPages -= 1;
    },
    updatePageLayout: (state, action) => {
      const { pageNo, layout } = action.payload;
      const page = state.allPages[pageNo - 1];
      page.layout = layout;
      state.allPages = [...state.allPages];
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

export const { addPage, removePage, updatePageLayout } = pagesSlice.actions;
export const selectPageInfo = (pageNo) => (state) =>
  state.pages.allPages[pageNo - 1];
export const selectAllPages = (state) => state.pages.allPages;
export const selectTotalPages = (state) => state.pages.totalPages;
export default pagesSlice.reducer;
