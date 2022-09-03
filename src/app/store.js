import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "../Slicer/dataSlice";
import { apiSlice } from "../api/apiSlice";

export const store = configureStore({
  reducer: {
    dataslic: dataReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
