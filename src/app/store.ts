import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { stagesFillReducer } from './slices/stagesFillSlice';
import { correctWordReducer } from './slices/correctWordSlice';
import { stagesWordsReducer } from './slices/stagesWordsSlice';

export const store = configureStore({
  reducer: {
    stagesFill: stagesFillReducer,
    correctWord: correctWordReducer,
    stagesWords: stagesWordsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
