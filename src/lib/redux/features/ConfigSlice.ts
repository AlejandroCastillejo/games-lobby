"use client";

import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";

//TODO: Define the state type
// export interface ConfigState {}

const initialState = {};
export const ConfigSlice = createSlice({
  name: "config",
  initialState,
  reducers: {},
});
// Action creators are generated for each case reducer function
export default ConfigSlice.reducer;
