import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userServices from 'services/userServices';

const initialState = {
  data: {},
  loading: false,
  error: null,
};

export const getAdvertsInfo = createAsyncThunk(
  'advertsList/getAdvertsInfo',
  async (id, { rejectWithValue }) => {
    try {
      const result = await userServices.getAdvertsListUser(id);
      return result;
    } catch (e) {
      return rejectWithValue(e.response.data);
    }
  },
);

const avdertsInfoSlice = createSlice({
  name: 'advertsList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        getAdvertsInfo.fulfilled,
        (state, action) => {
          state.data = action.payload;
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
