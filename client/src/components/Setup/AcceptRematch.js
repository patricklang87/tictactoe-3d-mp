import React, { useEffect } from 'react';
import { useSocket } from '../../contexts/socketProvider';
import { useSelector, useDispatch } from 'react-redux';
import { resetGame, setRematchRequested, setPlayerTurn } from '../../redux/gameSlice';

export default function AcceptRematch() {
    const dispatch = useDispatch();
    const socket = useSocket();
    const roomName = useSelector(state => state.game.roomName);

    const handleClick = () => {
        socket.emit('acceptRematch', roomName);
        dispatch(resetGame());
        
    }




    return (
        <div>
            <button onClick={handleClick}>Accept Rematch</button>
        </div>
    )
}
