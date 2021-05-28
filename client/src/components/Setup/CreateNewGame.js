import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setRoomName, setPlayerNumber } from '../../redux/gameSlice';
import { useSocket } from '../../contexts/socketProvider';

export default function CreateNewGame() {
    const dispatch = useDispatch();
    const socket = useSocket();

    const handleClick = () => {
        socket.emit('newGame');
        dispatch(setPlayerNumber(1));
    }

    useEffect(() => {
        if (socket == null) return;
        socket.on('issueRoomName', (roomName) => {
            
            dispatch(setRoomName(roomName));

            return () => {socket.off('issueRoomName')};
        });

    }, [socket, dispatch])

    return (
        <div>
            <button onClick={handleClick}>Create A New Game</button>
        </div>
    )
}
