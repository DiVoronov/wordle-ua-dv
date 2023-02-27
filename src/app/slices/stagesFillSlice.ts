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

const stagesFillSlice = createSlice({
  name: "stagesFill",
  initialState,
  reducers: {
    setFirstStatus (state, action) {
      state.first = action.payload;
      return state;
    },
    setSecondStatus (state, action) {
      state.second = action.payload;
      return state;
    },
    setThirdStatus (state, action) {
      state.third = action.payload;
      return state;
    },
    setFourthStatus (state, action) {
      state.fourth = action.payload;
      return state;
    },
    setFifthStatus (state, action) {
      state.fifth = action.payload;
      return state;
    },
    setSixthStatus (state, action) {
      state.sixth = action.payload;
      return state;
    },
  }
});

export const { 
  setFirstStatus, 
  setSecondStatus, 
  setThirdStatus, 
  setFourthStatus, 
  setFifthStatus, 
  setSixthStatus 
} = stagesFillSlice.actions;

export const stagesFillReducer = stagesFillSlice.reducer;