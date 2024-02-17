import { createSlice } from "@reduxjs/toolkit";
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
    setFilters: (state, action) => {
      state.filters = action.payload;
      state.adverts = [];
      console.log(state.filters);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdverts.fulfilled, (state, action) => {
        state.status = defaultStatus.fulfilled;
        state.adverts = action.payload;
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
export const { setFilters } = advertsSlice.actions;
export const advertReducer = advertsSlice.reducer;
