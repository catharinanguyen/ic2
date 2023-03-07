import { createWrapper } from 'next-redux-wrapper';
import { configureStore } from '@reduxjs/toolkit';

import { pagesSlice } from './slices/pagesSlice';
import { appStatusSlice } from './slices/appStatusSlice';

const makeStore = () =>
  configureStore({
    reducer: {
      [pagesSlice.name]: pagesSlice.reducer,
      [appStatusSlice.name]: appStatusSlice.reducer,
    },
    devTools: true,
  });

export const wrapper = createWrapper(makeStore);
