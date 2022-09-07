import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slice/authUser';
import getAdvertReducer from './slice/getAdvert';
import categoryReducer from './slice/getCategories';

// create store
export const store = configureStore({
  reducer: {
    getAdvert: getAdvertReducer,
    userReducer,
    categoryReducer,
  },
});
