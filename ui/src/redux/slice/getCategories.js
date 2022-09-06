import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import categoriesServices from 'services/categoriesServices';

const initialState = {
  data: [],
  loading: false,
  error: false,
};

export const getCategories = createAsyncThunk(
  'categories/getCategories',
  async (_, { rejectWithValue }) => {
    try {
      const { data: { categoryList } } = await categoriesServices.getCategories();
      return categoryList;
    } catch (e) {
      return rejectWithValue(e.response.data);
    }
  },
);

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        getCategories.fulfilled,
        (state, action) => {
          state.data = action.payload;
          state.loading = false;
        },
      )
      .addCase(
        getCategories.pending,
        (state, _) => {
          state.loading = true;
          state.error = false;
        },
      )
      .addCase(
        getCategories.rejected,
        (state, action) => {
          state.error = action.payload;
          state.loading = false;
        },
      );
  },
});

export default categoriesSlice.reducer;
