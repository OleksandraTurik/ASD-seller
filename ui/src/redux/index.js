import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slice/authUser';
import getAdvertReducer from './slice/getAdvert';
import categoryReducer from './slice/getCategories';
import userAdvertInfoReducer from './slice/getAdvertInfo';
import getAdvertsReducer from './slice/getAdverts';

// create store
export const store = configureStore({
  reducer: {
    getAdverts: getAdvertsReducer,
    getAdvert: getAdvertReducer,
    userReducer,
    categoryReducer,
    userAdvertInfoReducer,
  },
});
