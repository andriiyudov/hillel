import React, {createContext, useState} from 'react';
import {Routes, Route} from 'react-router-dom';

import Chat from './chat/Chat';
import {Conversations} from './conversations/conversations';
import {CreateContact} from './create-contact/create-contact';
import './App.css';

export const ContactsContext = createContext({contacts: []});
export const MessagesContext = createContext({messagesObj: {}});

export const App = () => {
    const [messagesObj, setMessagesObj] = useState({});
    const [contacts, setContacts] = useState([]);

    return (
        <div className="app">
            <ContactsContext.Provider value={{contacts, setContacts}}>
                <MessagesContext.Provider value={{messagesObj, setMessagesObj}}>
                    <Routes>
                        <Route path="/" element={<Conversations/>}/>
                        <Route path="/conversations/:conversationId" element={<Chat/>}/>
                        <Route path="/contacts/new" element={<CreateContact/>}/>
                    </Routes>
                </MessagesContext.Provider>
            </ContactsContext.Provider>
        </div>
    );
}

export default App;
