import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slice/authUser';
import categoryReducer from './slice/getCategories';

// create store
export const store = configureStore({
  reducer: {
    userReducer,
    categoryReducer,
  },
});
