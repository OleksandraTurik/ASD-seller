import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slice/authUser';

// create store
export const store = configureStore({
  reducer: {
    userReducer,
  },
});
