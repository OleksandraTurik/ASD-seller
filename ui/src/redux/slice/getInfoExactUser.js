import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userServices from 'services/userServices';

const initialState = {
  data: [],
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

export default exactUserInfoSlice.reducer;
