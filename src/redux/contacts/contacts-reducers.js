import { createReducer, combineReducers } from '@reduxjs/toolkit';
import addFilter from './contacts-actions';
import {
  addContact,
  deleteContact,
  fetchContacts,
} from './contacts-operations';
import initialState from 'redux/initialState';

const { items, filter, loading, error } = initialState.contacts;

const itemsReducer = createReducer(items, {
  [fetchContacts.fulfilled]: (_, { payload }) => payload,
  [addContact.fulfilled]: (state, { payload }) => [payload, ...state],
  [deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const filterReducer = createReducer(filter, {
  [addFilter]: (_, { payload }) => payload,
});

const loadingReducer = createReducer(loading, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,
  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
});

const errorReducer = createReducer(error, {
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

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  loading: loadingReducer,
  error: errorReducer,
});
