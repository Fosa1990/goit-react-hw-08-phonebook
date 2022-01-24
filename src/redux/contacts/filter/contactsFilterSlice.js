import { createSlice } from '@reduxjs/toolkit';
import initialState from '../state/contactsState';

export const contactsFilterSlice = createSlice({
  name: 'filter',
  initialState: initialState.contacts.filter,
  reducers: {
    addFilter: (_, { payload }) => payload,
  },
});

export const filter = contactsFilterSlice.reducer;
export const { addFilter } = contactsFilterSlice.actions;
