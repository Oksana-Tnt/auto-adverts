import { bindActionCreators, createSlice } from "@reduxjs/toolkit";

import { initialState } from "./initialState";
import { fetchAdverts } from "./advertsOperations";

const defaultStatus = {
  pending: "pending",
  fulfilled: "fulfilled",
  rejected: "rejected",
};

export const advertsSlice = createSlice({
  name: "adverts",
  initialState,
  reducers: {
    setAdverts: (state, action) => {
      state.adverts = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdverts.fulfilled, (state, action) => {
        state.adverts = action.payload;
        state.status = defaultStatus.fulfilled;
        state.error = null;
      })
      .addCase(fetchAdverts.pending, (state, { payload }) => {
        state.status = defaultStatus.pending;
      })
      .addCase(fetchAdverts.rejected, (state, { payload }) => {
        state.status = defaultStatus.rejected;
        state.error = payload;
      });
  },
});

export const { setAdverts } = advertsSlice.actions;
export const advertReducer = advertsSlice.reducer;
