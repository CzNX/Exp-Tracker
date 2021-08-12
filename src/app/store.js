import { configureStore } from '@reduxjs/toolkit';
import transReducer from './transSlice';

export const store = configureStore({
  reducer: {
    trans: transReducer,
  },
});
