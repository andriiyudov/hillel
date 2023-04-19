import {combineReducers} from 'redux';
import { configureStore } from '@reduxjs/toolkit'

import {contactsReducer} from './reducers/contactsReducer';
import {messagesReducer} from './reducers/messagesReducer';
import {thunk} from './middleware/redux-thunk';

const reducers = combineReducers({
    contacts: contactsReducer,
    messagesObj: messagesReducer,
});


export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(thunk),
    devTools: {
        name: 'chat-react-redux'
    }
})
