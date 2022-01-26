import { createSlice } from '@reduxjs/toolkit';
import initialState from 'redux/initialState';
import authOperations from './auth-operations';

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState.auth,
  extraReducers: {
    [authOperations.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.error = null;
    },
    [authOperations.logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.error = null;
    },
    [authOperations.logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.error = null;
    },
    [authOperations.fetchCurrentUser.pending](state) {
      state.isFetchingUser = true;
      state.error = null;
    },
    [authOperations.fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isFetchingUser = false;
    },
    [authOperations.fetchCurrentUser.rejected](state, action) {
      state.user = { name: null, email: null };
      state.isLoggedIn = false;
      state.error = action.error;
      state.isFetchingUser = false;
      state.token = null;
    },
    [authOperations.logIn.rejected](state, action) {
      state.user = { name: null, email: null };
      state.isLoggedIn = false;
      state.error = action.error;
      state.token = null;
    },
    [authOperations.register.rejected](state, action) {
      state.user = { name: null, email: null };
      state.isLoggedIn = false;
      state.error = action.error;
      state.token = null;
    },
    [authOperations.fetchCurrentUser.rejected](state) {
      state.user = { name: null, email: null };
      state.isLoggedIn = false;
      state.isFetchingUser = false;
      state.token = null;
    },
  },
});

export default authSlice.reducer;
