import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userServices from 'sevices/userServices';

const initialState = {
  data: {},
  loading: false,
  error: null,
};

const modulePrefix = 'users/adverts';

export const getAdvertsInfo = createAsyncThunk(
  `${modulePrefix}/getAdvertsInfo`,
  async () => {
    const result = await userServices.getAdvertsListUser();
    return result;
  },
);

const avdertsInfoSlice = createSlice({
  name: 'user adverts list',
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

export default avdertsInfoSlice.reducer;
