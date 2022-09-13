import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from 'services/authServices';
import { tokenService } from 'services/tokenService';

const initialState = {
  user: tokenService.getUserInfo(),
  loading: false,
  error: null,
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
    return res;
  },
);

export const logout = createAsyncThunk(
  `${modulePrefix}/logout`,
  async (userData) => {
    await api.logout();
  },
);

export const registration = createAsyncThunk(
  `${modulePrefix}/registration`,
  async (userData) => {
    const res = await api.registration({
      email: userData.email,
      password: userData.password,
    });
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
        (state, action) => {
          state.error = action.error;
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
          state.registrationSuccess = false;
        },
      )
      .addCase(
        registration.rejected,
        (state) => {
          state.loading = false;
          state.error = true;
          state.registrationSuccess = false;
        },
      )
      .addCase(
        logout.fulfilled,
        (state) => {
          state.loading = false;
          state.error = false;
          state.registrationSuccess = true;
        },
      )
      .addCase(
        logout.pending,
        (state) => {
          state.loading = true;
          state.error = false;
          state.registrationSuccess = false;
        },
      )
      .addCase(
        logout.rejected,
        (state) => {
          state.loading = false;
          state.error = true;
          state.registrationSuccess = false;
        },
      );
  },
});

export default userSlice.reducer;

// state = initialState
