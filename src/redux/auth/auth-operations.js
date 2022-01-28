import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

// body: { name, email, password }
const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    token.set(data.token);
    toast.success('Successfully registered');
    return data;
  } catch (error) {
    toast.error('Successfully registered');
    throw new Error(error);
  }
});

// body: { email, password }
const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    token.set(data.token);
    toast.success('Successfully logged in');
    return data;
  } catch (error) {
    toast.error('An error has occurred, check the entered data');
    throw new Error(error);
  }
});

// headers: Authorization: Bearer token
const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');
    token.unset();
    toast.success('Successfully logged out');
  } catch (error) {
    toast.error('An unknown error occurred');
    throw new Error(error);
  }
});

// headers: Authorization: Bearer token
const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      throw new Error(error);
    }
  },
);

const clearError = createAsyncThunk('auth/clearError', () => {
  return null;
});

const operations = {
  register,
  logOut,
  logIn,
  fetchCurrentUser,
  clearError,
};
export default operations;
