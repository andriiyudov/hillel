import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {Provider} from 'react-redux';

import Chat from './chat/Chat';
import {Conversations} from './conversations/conversations';
import {CreateContact} from './create-contact/create-contact';
import {DataController} from '../controllers/data-controller';
import {store} from '../store';
import './App.css';


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
