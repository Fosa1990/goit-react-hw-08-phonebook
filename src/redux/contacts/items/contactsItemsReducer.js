import { createReducer } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  fetchContacts,
} from '../operations/contactsOperations';

export const items = createReducer([], {
  [fetchContacts.fulfilled]: (_, { payload }) => payload,
  [addContact.fulfilled]: (state, { payload }) => [payload, ...state],
  [deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});
