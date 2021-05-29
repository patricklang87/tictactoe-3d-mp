import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { resetGame, setRematchRequested } from '../../redux/gameSlice';
import { useSocket } from '../../contexts/socketProvider';

export default function RequestRematch() {
    const dispatch = useDispatch();
    const socket = useSocket();
    const roomName = useSelector(state => state.game.roomName);

    const handleClick = () => {  
        socket.emit('requestRematch', roomName);
        dispatch(resetGame());
    }




    return (
        <button onClick={handleClick}>Propose Rematch</button>
    )
}
