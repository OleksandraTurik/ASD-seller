import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userServices from 'sevices/userServices';

const initialState = {
  data: {},
  loading: false,
  error: null,
};

export const getAdvertsInfo = createAsyncThunk(
  'advertsList/getAdvertsInfo',
  async () => {
    const result = await userServices.getAdvertsListUser();
    return result;
  },
);

const avdertsInfoSlice = createSlice({
  name: 'advertsList',
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
