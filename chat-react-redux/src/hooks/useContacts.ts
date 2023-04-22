import {useCallback} from 'react';
import axios from 'axios';
import {URL} from '../components/constants';
import {addContact, setContactsSuccess, setContactsFailure, setContactsLoading} from '../store/actions/contactsActions';
import {useDispatch} from 'react-redux';

import type {ContactType} from '../typedef';


export const useContacts = () => {
    const dispatch = useDispatch();

    const getContacts = useCallback(() => {
        dispatch(setContactsFailure());
        axios.get<ContactType[]>(`${URL}/contacts`)
            .then(res => dispatch(setContactsSuccess(res.data)))
            .catch(error => dispatch(setContactsLoading(error)));
    }, [dispatch]);

    const saveContact = useCallback((contact: ContactType) => {
        axios.post(`${URL}/contacts`, contact)
            .then(res => {
                if (res.status === 200) {
                    dispatch(addContact(contact));
                }
            })
    }, [dispatch]);

    return {getContacts, saveContact}
}
