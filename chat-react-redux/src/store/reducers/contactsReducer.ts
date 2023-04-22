import {createReducer} from '@reduxjs/toolkit'

import {
    addContact,
    setContactsLoading,
    setContactsSuccess,
    setContactsFailure
} from '../actions/contactsActions';
import type {ContactType} from '../../typedef';

const INITIAL_STATE = {
    contacts: [],
    error: false,
    loading: false,
};

type State = {
    contacts: ContactType[],
    error: boolean,
    loading: boolean,
}

export const contactsReducer = createReducer<State>(INITIAL_STATE, builder =>
    builder
        .addCase(addContact, (state, action) => {
            const contact = action.payload;

            state.contacts.push({...contact, id: crypto.randomUUID(), avatarUrl: contact.avatarUrl || undefined});
        })
        .addCase(setContactsLoading, state => {
            state.loading = true;
        })
        .addCase(setContactsSuccess, (state, action) => {
            state.loading = false;
            state.contacts = action.payload;
        })
        .addCase(setContactsFailure, state => {
            state.loading = false;
            state.error = true;
        })
        .addDefaultCase(state => state)
);
