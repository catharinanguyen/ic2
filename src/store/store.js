import { createWrapper } from 'next-redux-wrapper';
import { configureStore } from '@reduxjs/toolkit';

import { pagesSlice } from './slices/pagesSlice';
import { appStatusSlice } from './slices/appStatusSlice';
import { userSlice } from './slices/userSlice';

const makeStore = () =>
  configureStore({
    reducer: {
      [userSlice.name]: userSlice.reducer,
      [pagesSlice.name]: pagesSlice.reducer,
      [appStatusSlice.name]: appStatusSlice.reducer,
    },
    devTools: true,
  });

export const wrapper = createWrapper(makeStore);
