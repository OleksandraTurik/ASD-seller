import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userServices from 'services/userServices';

const initialState = {
  data: {},
  loading: false,
  error: null,
};

export const getExactUserInfoThunk = createAsyncThunk(
  'getExactUserInfo/getExactUserInfoThunk',
  async (id) => {
    const result = await userServices.fetchInfoExactUser(id);
    return result.data;
  },
);

const exactUserInfoSlice = createSlice({
  name: 'ExactUserInfo',
  initialState,
  reducers: {
    addToFavorites(state, action) {
      state.data.favorites.unshift(action.payload);
    },
    removeFromFavorites(state, action) {
      state.data.favorites = state.data.favorites.filter(e => e !== action.payload);
    },
    updateUserInfo(state, action) {
      state.data = { ...state.data, ...action.payload };
    },
  },
  extraReducers: {
    [getExactUserInfoThunk.pending]: (state) => {
      state.loading = true;
    },
    [getExactUserInfoThunk.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [getExactUserInfoThunk.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message && 'Something went wrong';
    },
  },
});

export const { addToFavorites, removeFromFavorites, updateUserInfo } = exactUserInfoSlice.actions;

export default exactUserInfoSlice.reducer;
