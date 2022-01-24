import { createSlice } from '@reduxjs/toolkit';
import initialState from '../state/contactsState';

export const contactsItemsSlice = createSlice({
  name: 'items',
  initialState: initialState.contacts.items,
  reducers: {
    addContact: (state, { payload }) => [payload, ...state],
    deleteContact: (state, { payload }) =>
      state.filter(contact => contact.id !== payload),
  },
});

export const items = contactsItemsSlice.reducer;
export const { addContact, deleteContact } = contactsItemsSlice.actions;
