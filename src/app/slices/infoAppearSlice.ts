import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const infoAppearSlice = createSlice({
  name: "infoAppear",
  initialState: false,
  reducers: {
    setInfoModuleAppear (state, action) {
      state = action.payload;
      return state;
    },
  }
});

export const { setInfoModuleAppear } = infoAppearSlice.actions;
export const infoAppearReducer = infoAppearSlice.reducer;