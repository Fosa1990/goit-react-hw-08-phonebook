import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';

axios.defaults.baseURL = 'https://61e6b687ce3a2d001735938f.mockapi.io/api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetch',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/contacts');
      toast.success('Contacts loaded.');
      return data;
    } catch (error) {
      toast.error(`${error}`);
      return rejectWithValue(error);
    }
  },
);

export const addContact = createAsyncThunk(
  'contacts/add',
  async (person, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/contacts', person);
      toast.success('Contact successfully added!');
      return data;
    } catch (error) {
      toast.error(`${error}`);
      return rejectWithValue(error);
    }
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/delete',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`/contacts/${id}`);
      toast.success('Contact successfully deleted!');
      return id;
    } catch (error) {
      toast.error(`${error}`);
      return rejectWithValue(error);
    }
  },
);
