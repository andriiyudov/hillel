import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import Chat from './chat/Chat';
import {Conversations} from './conversations/conversations';
import {CreateContact} from './create-contact/create-contact';
import {contactsReducer} from '../store/reducers/contactsReducer';
import {messagesReducer} from '../store/reducers/messagesReducer';
import './App.css';

const reducers = combineReducers({
    contacts: contactsReducer,
    messagesObj: messagesReducer,
});

const store = createStore(reducers, composeWithDevTools());

export const App = () => {
    return (
        <div className="app">
            <Provider store={store}>
                <Routes>
                    <Route path="/" element={<Conversations/>}/>
                    <Route path="/conversations/:conversationId" element={<Chat/>}/>
                    <Route path="/contacts/new" element={<CreateContact/>}/>
                </Routes>
            </Provider>
        </div>
    );
}

export default App;
