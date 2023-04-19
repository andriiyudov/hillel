import {createReducer} from '@reduxjs/toolkit'

import {
    addContact,
    setContactsLoading,
    setContactsSuccess,
    setContactsFailure
} from '../actions/contactsActions';

const INITIAL_STATE = {
    contacts: [],
    error: false,
    loading: false,
};

export const contactsReducer = createReducer(INITIAL_STATE, builder =>
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
        .addCase(setContactsFailure, (state, payload) => {
            state.loading = false;
            state.error = payload;
        })
        .addDefaultCase(state => state)
);
