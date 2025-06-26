// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/allDataSlice'
export const store = configureStore({
  reducer: {
    data: counterReducer,
  },
});
