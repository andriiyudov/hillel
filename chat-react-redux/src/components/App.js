import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {createStore, combineReducers, applyMiddleware} from 'redux'
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import Chat from './chat/Chat';
import {Conversations} from './conversations/conversations';
import {CreateContact} from './create-contact/create-contact';
import {contactsReducer} from '../store/reducers/contactsReducer';
import {messagesReducer} from '../store/reducers/messagesReducer';
import {DataController} from './data-controller/data-controller';
import {thunk} from '../store/middleware/redux-thunk';
import './App.css';

const reducers = combineReducers({
    contacts: contactsReducer,
    messagesObj: messagesReducer,
});

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export const App = () => {
    return (
        <div className="app">
            <Provider store={store}>
                <DataController>
                    <Routes>
                        <Route path="/" element={<Conversations/>}/>
                        <Route path="/conversations/:conversationId" element={<Chat/>}/>
                        <Route path="/contacts/new" element={<CreateContact/>}/>
                    </Routes>
                </DataController>
            </Provider>
        </div>
    );
}

export default App;
