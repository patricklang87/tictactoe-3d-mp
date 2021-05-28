import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSocket } from '../../contexts/socketProvider';
import { setPlayerNumber, setPlayerTurn, setRoomName } from '../../redux/gameSlice';

export default function JoinGame() {
    const dispatch = useDispatch();
    const socket = useSocket();
    const [currentGameCode, setCurrentGameCode] = useState('');
    const [failedJoinMsg, setFailedJoinMsg] = useState('');

    const handleChange = (e) => {
        setCurrentGameCode(e.target.value);
    }

    const handleClick = () => {
        socket.emit('joinRoomName', currentGameCode);
        dispatch(setPlayerNumber(2));
    }

    useEffect(() => {
        if (socket == null) return;
        socket.on('confirmJoin', ({playerOneTurn, roomName}) => {
            dispatch(setPlayerTurn(playerOneTurn));
            dispatch(setRoomName(roomName));
            setFailedJoinMsg('');

            return () => {
                socket.off('confirmJoin');
            }
        });

        socket.on('roomFull', (roomName) => {
            setFailedJoinMsg(`Room ${roomName} already has two players.`);

            return () => {
                socket.off('roomFull');
            }
        });

        socket.on('noSuchRoom', (roomName) => {
            setFailedJoinMsg(`Room "${roomName}" does not exist.`);

            return () => {
                socket.off('noSuchRoom');
            }
        });

        
    }, [socket, dispatch]);

    return (
        <div>
            <input
                onChange={(e) => handleChange(e)}
                value={currentGameCode}
                type="text"
                placeholder="Room Code"
            />
            <br />
            <button onClick={handleClick}>Join A Game</button>
            {failedJoinMsg !== '' && <p>{failedJoinMsg}</p>}
        </div>
    )
}
