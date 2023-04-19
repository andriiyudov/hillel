import {useCallback} from 'react';
import axios from 'axios';
import {URL} from '../components/constants';
import {addContact, GET_CONTACTS_FAILURE, GET_CONTACTS_LOADING, setContacts} from '../store/actions/contactsActions';

export const useContacts = () => {
    const getContacts = useCallback(() => dispatch => {
        dispatch({type: GET_CONTACTS_LOADING});
        axios.get(`${URL}/contacts`)
            .then(res => dispatch(setContacts(res.data)))
            .catch(error => dispatch({type: GET_CONTACTS_FAILURE, payload: error}));
    }, []);

    const saveContact = useCallback(contact => dispatch => {
        axios.post(`${URL}/contacts`, contact)
            .then(res => {
                if (res.status === 200) {
                    dispatch(addContact(contact));
                }
            })
    }, []);

    return {getContacts, saveContact}
}
