import {createAction} from '@reduxjs/toolkit'

export const addContact = createAction('ADD_CONTACT');

export const setContactsLoading = createAction('GET_CONTACTS_LOADING');
export const setContactsSuccess = createAction('GET_CONTACTS_SUCCESS');
export const setContactsFailure = createAction('GET_CONTACTS_FAILURE');

