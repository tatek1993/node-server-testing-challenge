const express = require('express');

const popRouter = require('../pops/popsRouter.js');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.send('<h1> The API is running! </h1>');
});

server.use('/pop', popRouter);

module.exports = server;