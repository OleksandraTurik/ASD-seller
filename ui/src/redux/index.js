import { configureStore } from '@reduxjs/toolkit';
import getAdvertReducer from './slice/getAdverts';

// create store
export const store = configureStore({
  reducer: {
    getAdverts: getAdvertReducer,
  },
});
