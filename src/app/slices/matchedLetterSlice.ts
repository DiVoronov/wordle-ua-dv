import React from "react";
import { createSlice } from "@reduxjs/toolkit";

interface IMatchedLettersInitialState {
  greenLetters: string[],
  yellowLetters: string[]
};

const initialState: IMatchedLettersInitialState = {
  greenLetters: [],
  yellowLetters: []
};


const matchedLetterSlice = createSlice({
  name: "matchedLetter",
  initialState,
  reducers: {
    pushMatchedGreenLettersArray (state, action) {
      state.greenLetters.push(action.payload);
      return state;
    },
    pushMatchedYellowLettersArray (state, action) {
      state.yellowLetters.push(action.payload);
      return state;
    },
  }
});

export const { pushMatchedGreenLettersArray, pushMatchedYellowLettersArray } = matchedLetterSlice.actions;
export const matchedLetterReducer = matchedLetterSlice.reducer;