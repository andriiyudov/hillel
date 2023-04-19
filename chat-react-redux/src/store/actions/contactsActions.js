export const ADD_CONTACT = 'ADD_CONTACT';
export const GET_CONTACTS_LOADING = 'GET_CONTACTS_LOADING';
export const GET_CONTACTS_SUCCESS = 'GET_CONTACTS_SUCCESS';
export const GET_CONTACTS_FAILURE = 'GET_CONTACTS_FAILURE';

export const addContact = contact => ({type: ADD_CONTACT, payload: contact})
export const setContacts = contacts => ({type: GET_CONTACTS_SUCCESS, payload: contacts})


