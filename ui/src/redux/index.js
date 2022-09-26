import { configureStore } from '@reduxjs/toolkit';

// Reducers
import userReducer from 'redux/slice/authUser';
// import getAdvertReducer from 'redux/slice/getAdvert';
// import categoryReducer from 'redux/slice/getCategories';
// import userAdvertInfoReducer from 'redux/slice/getAdvertInfo';
// import getAdvertsReducer from 'redux/slice/getAdverts';
import exactUserInfoSlice from 'redux/slice/getInfoExactUser';

// create store
export const store = configureStore({
  reducer: {
    // getAdverts: getAdvertsReducer,
    // getAdvert: getAdvertReducer,
    userReducer,
    // categoryReducer,
    // userAdvertInfoReducer,
    exactUserInfoSlice,
  },
});
