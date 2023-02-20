import express from 'express';
import cors from 'cors';

import {USERS} from './data.js';

const port = process.env.PORT || 3000;
const server = express();

server.use(express.json());
server.use(cors());

server.get('/users', (req, res) => {
    res.send(USERS);
});

server.post('/users', (req, res) => {
    const user = req.body;
    console.log(req.body)
    USERS.push(user);
    res.sendStatus(200);
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});


// const http = require('http');
//
//
// const server = http.createServer((request, response) => {
//     if (request.url === '/') {
//         response.statusCode = 200;
//         response.setHeader('Content-Type', 'text/plain');
//         response.end('Hello World\n');
//     } else if (request.url === '/users') {
//         response.statusCode = 200;
//         response.setHeader('Content-Type', 'application/json');
//         response.end(JSON.stringify([{user: 'nanm'}]))
//     }
//     console.log(request.url)
// });
//
// server.listen(port, () => {
//     console.log(`Server running on port ${port}`);
// });
