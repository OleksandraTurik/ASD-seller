import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slice/authUser';
import categoryReducer from './slice/getCategories';
import userAdvertInfoReducer from './slice/getAdvertInfo';

// create store
export const store = configureStore({
  reducer: {
    userReducer,
    categoryReducer,
    userAdvertInfoReducer,
  },
});
