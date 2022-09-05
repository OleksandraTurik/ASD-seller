import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import advertServices from 'sevices/advertServices';

const initialState = {
  advertInfo: null,
  loading: false,
  error: null,
};

export const getAdvertThunk = createAsyncThunk(
  'getAdvert/getAdvertThunk',
  async (id) => {
    const result = await advertServices.getAdvert(id);
    return result.data;
  },
);

const getAdvertReducer = createSlice({
  name: 'getAdvert',
  initialState,
  extraReducers: {
    [getAdvertThunk.pending]: (state) => {
      state.loading = true;
    },
    [getAdvertThunk.fulfilled]: (state, action) => {
      state.loading = false;
      state.advertInfo = action.payload;
    },
    [getAdvertThunk.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message && 'Something went wrong';
    },
  },
});

export default getAdvertReducer.reducer;
