const express = require('express');

const popRouter = require('../pops/popsRouter.js');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome!'});
});

server.use('/api', popRouter);

module.exports = server;