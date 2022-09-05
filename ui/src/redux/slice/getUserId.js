import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userServices from 'sevices/userServices';

const initialState = {
  id: null,
  loading: false,
  error: null,
};

export const getUserIdThunk = createAsyncThunk(
  'getUserId/getUserIdThunk',
  async () => {
    const result = await userServices.getUserId();
    return result;
  },
);

const getUserIdReducer = createSlice({
  name: 'getUserId',
  initialState,
  extraReducers: {
    [getUserIdThunk.pending]: (state) => {
      state.loading = true;
    },
    [getUserIdThunk.fulfilled]: (state, action) => {
      state.loading = false;
      state.id = action.payload;
    },
    [getUserIdThunk.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message && 'Something went wrong';
    },
  },
});

export default getUserIdReducer.reducer;
