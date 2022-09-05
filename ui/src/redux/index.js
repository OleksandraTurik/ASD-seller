import { configureStore } from '@reduxjs/toolkit';
import getUserIdReducer from 'redux/slice/getUserId';

// create store
export const store = configureStore({
  reducer: {
    getUserIdReducer,
  },
});
