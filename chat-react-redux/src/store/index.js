import {applyMiddleware, combineReducers, createStore} from 'redux';
import {contactsReducer} from './reducers/contactsReducer';
import {messagesReducer} from './reducers/messagesReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import {thunk} from './middleware/redux-thunk';

const reducers = combineReducers({
    contacts: contactsReducer,
    messagesObj: messagesReducer,
});

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));


