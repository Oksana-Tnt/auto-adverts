import { configureStore } from "@reduxjs/toolkit";

import { advertReducer } from "./adverts/advertsSlice";

export const store = configureStore({
  reducer: {
    adverts: advertReducer,
  },
});
