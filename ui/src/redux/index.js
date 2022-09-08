import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slice/authUser';
import getAdvertReducer from './slice/getAdvert';
import categoryReducer from './slice/getCategories';
import userAdvertInfoReducer from './slice/getAdvertInfo';

// create store
export const store = configureStore({
  reducer: {
    getAdvert: getAdvertReducer,
    userReducer,
    categoryReducer,
    userAdvertInfoReducer,
  },
});
