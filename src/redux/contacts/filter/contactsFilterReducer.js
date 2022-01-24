import { createAction, createReducer } from '@reduxjs/toolkit';

export const addFilter = createAction('contacts/addFilter');

export const filter = createReducer('', {
  [addFilter]: (_, { payload }) => payload,
});
