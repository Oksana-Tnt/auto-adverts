import { createSlice } from '@reduxjs/toolkit';

import { initialState } from './initialState';
import {
  fetchAdverts
 
} from './advertsOperations';

const defaultStatus = {
  pending: 'pending',
  fulfilled: 'fulfilled',
  rejected: 'rejected',
};


export const advertsSlice = createSlice({
  name: 'adverts',
  initialState,
  reducers: {
   
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAdverts.fulfilled, (state, { payload }) => {
        state.status = defaultStatus.fulfilled;   
        state.adverts=payload;        
        state.error = '';
      })
      .addCase(fetchAdverts.pending, (state, { payload }) => {
        state.status = defaultStatus.pending;
      })
      .addCase(fetchAdverts.rejected, (state, { payload }) => {
        state.status = defaultStatus.rejected;
        state.error = payload;
      })
  },
});

export const advertReducer =advertsSlice.reducer;

