import { combineReducers } from '@reduxjs/toolkit';
import { items } from './items/contactsItemsReducer';
import { filter } from './filter/contactsFilterReducer';
import { loading } from './loading/contactsLoadingReducer';
import { error } from './error/contactsErrorReducer';

export default combineReducers({
  items,
  filter,
  loading,
  error,
});
