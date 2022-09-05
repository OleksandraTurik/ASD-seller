import { configureStore } from '@reduxjs/toolkit';
import getAdvertReducer from './slice/getAdvert';

// create store
export const store = configureStore({
  reducer: {
    getAdvert: getAdvertReducer,
  },
});
