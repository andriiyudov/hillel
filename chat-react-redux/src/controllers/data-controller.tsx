import {useEffect} from 'react';
import {useContacts} from '../hooks/useContacts';
import {useMessages} from '../hooks/useMessages';

import type {FC, ReactElement} from 'react';

type Props = {
    children: ReactElement
}

export const DataController: FC<Props> = ({children}) => {
    const {getContacts} = useContacts();
    const {getMessages} = useMessages();

    useEffect(() => {
        getContacts();
        getMessages();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return children;
}

