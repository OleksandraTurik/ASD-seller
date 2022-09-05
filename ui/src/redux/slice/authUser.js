import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from 'services/authServices';
import { tokenService } from 'services/tokenService';

const initialState = {
  user: tokenService.getUserInfo(),
  loading: false,
  error: false,
  registrationSuccess: false,
};

const modulePrefix = 'user';

export const login = createAsyncThunk(
  `${modulePrefix}/login`,
  async (userData) => {
    const res = await api.login({
      email: userData.email,
      password: userData.password,
    });
    console.log(res);
    return res;
  },
);

export const registration = createAsyncThunk(
  `${modulePrefix}/registration`,
  async (userData) => {
    const res = await api.registration({
      email: userData.email,
      password: userData.password,
    });
    console.log(res);
    return res;
  },
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        login.fulfilled,
        (state, action) => {
          state.user = action.payload.userDto;
          state.loading = false;
        },
      )
      .addCase(
        login.pending,
        (state) => {
          state.loading = true;
          state.error = false;
        },
      )
      .addCase(
        login.rejected,
        (state) => {
          state.error = true;
          state.loading = false;
        },
      )
      .addCase(
        registration.fulfilled,
        (state) => {
          state.loading = false;
          state.error = false;
          state.registrationSuccess = true;
        },
      )
      .addCase(
        registration.pending,
        (state) => {
          state.loading = true;
          state.error = false;
        },
      )
      .addCase(
        registration.rejected,
        (state) => {
          state.loading = false;
          state.error = true;
        },
      );
  },
});

export default userSlice.reducer;

// state = initialState
