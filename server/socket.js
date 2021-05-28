const clientRooms = {};

const createRoomName = (length) => {
    const standardSymbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let roomName = '';
    for (let x = 0; x < length; x++) {
        let newSymbol = standardSymbols[Math.floor(Math.random() * standardSymbols.length)];
        roomName = roomName + newSymbol;
    }
    return roomName;
}

const coinFlip = () => {
    const coinFlip = Math.floor(Math.random()* 2);
    return coinFlip === 1 ? true : false;
}

const socket = io => {
    io.on('connection', socket => {
        console.log('New Connection');

        const handleNewGame = () => {
            let roomName = createRoomName(5);
            socket.join(roomName);
            clientRooms[roomName] = [socket.id];
            socket.emit('issueRoomName', roomName);
        }

        const handleJoinGame = (roomName) => {
            if (!clientRooms[roomName]) {
                socket.emit('noSuchRoom', roomName);  
                return;
            }
            if (clientRooms[roomName].length > 1) {
                socket.emit('roomFull', roomName);
                return;
            }

            socket.join(roomName);
            clientRooms[roomName].push(socket.id);
            const playerOneTurn = coinFlip();

            io.in(roomName).emit('confirmJoin', {playerOneTurn, roomName});
        }

        const handleRequestRematch = (roomName) => {
            io.in(roomName).emit('proposeRematch');
        }

        const handleAcceptRematch = (roomName) => {
            const playerOneTurn = coinFlip();
            io.in(roomName).emit('confirmRematch', playerOneTurn);
        }

        socket.on('newGame', handleNewGame);
        socket.on('joinRoomName', handleJoinGame);

        socket.on('squareClicked', ({positionValues, roomName}) => {
            io.in(roomName).emit('gameUpdate', positionValues);
        });

        socket.on('requestRematch', roomName => handleRequestRematch(roomName));
        socket.on('requestRematch', roomName => handleAcceptRematch(roomName));
    });
}

module.exports = socket;