import express from 'express';
import cors from 'cors';

import {CONTACTS, MESSAGES} from './data.js';

const port = process.env.PORT || 3005;
const server = express();

server.use(express.json());
server.use(cors());

server.get('/contacts', (req, res) => {
    res.send(CONTACTS);
});

server.post('/contacts', (req, res) => {
    const contact = req.body;
    CONTACTS.push(contact);

    res.sendStatus(200);
});

server.get('/messages', (req, res) => {
    res.send(MESSAGES)
});

server.post('/messages', (req, res) => {
    const {message, conversationId} = req.body;
    const prevMessages = MESSAGES[conversationId] || [];

    MESSAGES[conversationId] = [...prevMessages, message];

    res.sendStatus(200);
});

server.post('/messages/delete', (req, res) => {
    const {id, conversationId} = req.body;
    const prevMessages = MESSAGES[conversationId];
    MESSAGES[conversationId] = prevMessages.filter(message => message.id !== id);

    res.sendStatus(200);
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
