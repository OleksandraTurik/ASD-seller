import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from 'services/authServices';

const initialState = {
  user: {
    email: '',
    id: '',
    isActivated: false,
  },
  loading: false,
  error: false,
};

const modulePrefix = 'user';

export const login = createAsyncThunk(
  `${modulePrefix}/login`,
  async (userData) => {
    const res = await api.login({
      email: userData.email,
      password: userData.password,
    });
    localStorage.setItem('token', res.data.accessToken);
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
      );
    // .addCase(logout.fulfilled, (state) => {
    //   localStorage.removeItem('user');
    //   state.user = null;
    //   state.username = '';
    //   state.password = '';
    //   state.success = false;
    //   state.error = false;
    // })
    // .addCase(deleteUser.pending, (state) => {
    //   state.success = false;
    //   state.error = false;
    // })
    // .addCase(deleteUser.fulfilled, (state) => {
    //   state.success = true;
    // })
    // .addCase(deleteUser.rejected, (state) => {
    //   state.error = true;
    // })
    // .addCase(refreshToken.fulfilled, (state, action) => {
    //   localStorage.setItem('user', JSON.stringify(action.payload));
    //   state.user = action.payload;
    // });
  },
});

export default userSlice.reducer;
