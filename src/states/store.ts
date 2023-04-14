import { configureStore } from '@reduxjs/toolkit';
import { charactersApi } from './tlotr-api';
import pieReducer from './pie-slice';

export const tlotrStore = configureStore({
  reducer: {
    [charactersApi.reducerPath]: charactersApi.reducer,
    pie: pieReducer,
  },
  middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(charactersApi.middleware),
});

export type RootState = ReturnType<typeof tlotrStore.getState>;

// export type AppDispatch = typeof tlotrStore.selector // you can use this Dispatch type in your thunks
// export const useAppDispatch = () => useDispatch<AppDispatch>() // Export a hook that can be reused to resolve types
