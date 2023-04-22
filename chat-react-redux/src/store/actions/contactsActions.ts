import {createAction} from '@reduxjs/toolkit'
import type {ContactType} from '../../typedef';

export const addContact = createAction<ContactType>('ADD_CONTACT');

export const setContactsLoading = createAction('GET_CONTACTS_LOADING');
export const setContactsSuccess = createAction<ContactType[]>('GET_CONTACTS_SUCCESS');
export const setContactsFailure = createAction('GET_CONTACTS_FAILURE');

