import { configureStore } from '@reduxjs/toolkit';
import { charactersApi } from './tlotr-api';

export const tlotrStore = configureStore({
  reducer: {
    [charactersApi.reducerPath]: charactersApi.reducer,
  },
  middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(charactersApi.middleware),
});
