import { configureStore } from '@reduxjs/toolkit';
import moviesSlice from './features/moviesSlices';
import { createWrapper } from 'next-redux-wrapper';

const makeStore = () => configureStore({
  reducer: {
    movies: moviesSlice,
  },
});

export const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = ReturnType<typeof makeStore>;

export const wrapper = createWrapper<AppStore>(makeStore, { debug: true });