import {combineReducers} from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'

import {contactsReducer} from './reducers/contactsReducer';
import {messagesReducer} from './reducers/messagesReducer';

const reducer = combineReducers({
    contacts: contactsReducer,
    messagesObj: messagesReducer,
});

export type State = ReturnType<typeof reducer>;

export const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(thunk),
    devTools: {
        name: 'chat-react-redux'
    }
})
