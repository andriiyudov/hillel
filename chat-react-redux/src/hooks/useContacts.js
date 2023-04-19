import {useCallback} from 'react';
import axios from 'axios';
import {URL} from '../components/constants';
import {addContact, setContactsSuccess, setContactsFailure, setContactsLoading} from '../store/actions/contactsActions';

export const useContacts = () => {
    const getContacts = useCallback(() => dispatch => {
        dispatch(setContactsFailure());
        axios.get(`${URL}/contacts`)
            .then(res => dispatch(setContactsSuccess(res.data)))
            .catch(error => dispatch(setContactsLoading(error)));
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
