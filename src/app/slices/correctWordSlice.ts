import React from "react";
import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  first: boolean,
  second: boolean,
  third: boolean,
  fourth: boolean,
  fifth: boolean,
  sixth: boolean,
}

const initialState: IInitialState = {
  first: false,
  second: false,
  third: false,
  fourth: false,
  fifth: false,
  sixth: false,
};

const correctWordSlice = createSlice({
  name: "correctWord",
  initialState: '',
  reducers: {
    setCorrectWord (state, action) {
      state = action.payload;
      return state;
    },
  }
});

export const { 
  setCorrectWord, 
} = correctWordSlice.actions;
export const correctWordReducer = correctWordSlice.reducer;