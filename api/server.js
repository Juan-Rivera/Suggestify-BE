const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

const authRouter = require('./auth/authRouter');
const songRouter = require('./savedSongs/savedSongsRouter');

server.use('/api/auth', authRouter);
server.use('/api/songs', songRouter);

server.get('/', (req, res) => {
    res.send('Server is running');
})
module.exports = server;