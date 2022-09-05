import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userServices from 'sevices/userServices';

const initialState = {
  title: null,
  loading: false,
  error: null,
};

const modulePrefix = 'user';

export const getAdvertsInfo = createAsyncThunk(
  `${modulePrefix}/getAdvertsInfo`,
  async () => {
    const result = await userServices.getAdvertsListUser();
    return result;
  },
);

const getUserIdReducer = createSlice({
  name: 'adverts list',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(
        getAdvertsInfo.fulfilled,
        (state, action) => {
          state.user = action.payload;
          state.loading = false;
        },
      )
      .addCase(
        getAdvertsInfo.pending,
        (state) => {
          state.loading = true;
          state.error = false;
        },
      )
      .addCase(
        getAdvertsInfo.rejected,
        (state) => {
          state.error = true;
          state.loading = false;
        },
      );
  },
});

export default getAdvertsInfo.reducer;
