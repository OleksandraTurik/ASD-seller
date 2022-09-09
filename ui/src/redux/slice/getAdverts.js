import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import advertServices from 'services/advertServices';

const initialState = {
  advertInfo: [],
  loading: false,
  error: null,
};

export const getAdvertsThunk = createAsyncThunk(
  'getAdvert/getAdvertsThunk',
  async () => {
    const result = await advertServices.getAdverts();
    const data = await result.data.results;
    return data;
  },
);

const getAdvertsReducer = createSlice({
  name: 'getAdvert',
  initialState,
  extraReducers: {
    [getAdvertsThunk.pending]: (state) => {
      state.loading = true;
    },
    [getAdvertsThunk.fulfilled]: (state, action) => {
      state.loading = false;
      state.advertInfo = action.payload;
    },
    [getAdvertsThunk.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message && 'Something went wrong';
    },
  },
});

export default getAdvertsReducer.reducer;
