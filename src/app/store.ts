import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { stagesFillReducer } from './slices/stagesFillSlice';
import { correctWordReducer } from './slices/correctWordSlice';
import { stagesWordsReducer } from './slices/stagesWordsSlice';
import { winReducer } from './slices/winSlice';
import { matchedLetterReducer } from './slices/matchedLetterSlice';
import { allWordsReducer } from './slices/allWordsSlice';
import { infoAppearReducer } from './slices/infoAppearSlice';

export const store = configureStore({
  reducer: {
    stagesFill: stagesFillReducer,
    correctWord: correctWordReducer,
    stagesWords: stagesWordsReducer,
    win: winReducer,
    matchedLetter: matchedLetterReducer,
    allWords: allWordsReducer,
    infoAppear: infoAppearReducer,

  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
