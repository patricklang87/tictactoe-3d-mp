const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const path = require ('path');

cors = require('cors');
const acceptedOrigin = 'http://localhost:3000';

app.use(cors({
    origin: acceptedOrigin
}));

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// app.get('/', (req, res) => {
//     res.send('Welcome to 3dTicTacToe');
// });

const server = app.listen(PORT, () => {
    console.log('Server started on: ' + PORT);
});

const io= require('socket.io')(server, {
    cors: {
        origin: acceptedOrigin
    }
});

require('./socket')(io);