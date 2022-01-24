import { createReducer } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from '../operations/contactsOperations';

export const error = createReducer(null, {
  [fetchContacts.pending]: () => null,
  [fetchContacts.fulfilled]: () => null,
  [fetchContacts.rejected]: (_, { payload }) => payload,
  [addContact.pending]: () => null,
  [addContact.fulfilled]: () => null,
  [addContact.rejected]: (_, { payload }) => payload,
  [deleteContact.pending]: () => null,
  [deleteContact.fulfilled]: () => null,
  [deleteContact.rejected]: (_, { payload }) => payload,
});
