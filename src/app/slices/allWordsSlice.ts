import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const initialState: string[] = [];

const allWordsSlice = createSlice({
  name: "allWords",
  initialState,
  reducers: {
    setWordsList (state, action) {
      state = action.payload;
      return state;
    },
  }
});

export const { setWordsList } = allWordsSlice.actions;
export const allWordsReducer = allWordsSlice.reducer;