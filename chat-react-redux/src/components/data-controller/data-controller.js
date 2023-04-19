import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {useContacts} from '../../hooks/useContacts';
import {useMessages} from '../../hooks/useMessages';

export const DataController = ({children}) => {
    const dispatch = useDispatch();
    const {getContacts} = useContacts();
    const {getMessages} = useMessages();

    useEffect(() => {
        dispatch(getContacts());
        dispatch(getMessages());
    }, []);

    return children;
}

