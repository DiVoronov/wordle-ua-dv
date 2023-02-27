import React from "react";
import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  first: string,
  second: string,
  third: string,
  fourth: string,
  fifth: string,
  sixth: string,
}

const initialState: IInitialState = {
  first: '',
  second: '',
  third: '',
  fourth: '',
  fifth: '',
  sixth: '',
};

const stagesWordsSlice = createSlice({
  name: "stagesWords",
  initialState,
  reducers: {
    setFirstWord (state, action) {
      state.first = action.payload;
      return state;
    },
    setSecondWord (state, action) {
      state.second = action.payload;
      return state;
    },
    setThirdWord (state, action) {
      state.third = action.payload;
      return state;
    },
    setFourthWord (state, action) {
      state.fourth = action.payload;
      return state;
    },
    setFifthWord (state, action) {
      state.fifth = action.payload;
      return state;
    },
    setSixthWord (state, action) {
      state.sixth = action.payload;
      return state;
    },
  }
});

export const { 
  setFirstWord, 
  setSecondWord, 
  setThirdWord, 
  setFourthWord, 
  setFifthWord, 
  setSixthWord 
} = stagesWordsSlice.actions;

export const stagesWordsReducer = stagesWordsSlice.reducer;