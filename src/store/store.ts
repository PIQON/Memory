import { configureStore } from '@reduxjs/toolkit';
import { modalSlice } from './slices/modal/modalSlice';
import { gameSlice } from './slices/game/gameSlice';

export const store = configureStore({
  reducer: {
    modal: modalSlice.reducer,
    game: gameSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
