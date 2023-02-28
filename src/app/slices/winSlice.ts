import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const winSlice = createSlice({
  name: "win",
  initialState: false,
  reducers: {
    setWinStatus (state, action) {
      state = action.payload;
      return state;
    },
  }
});

export const { setWinStatus } = winSlice.actions;
export const winReducer = winSlice.reducer;