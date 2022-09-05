import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: null,
  loading: false,
  error: null,
};
