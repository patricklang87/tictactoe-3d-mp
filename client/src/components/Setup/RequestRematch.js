import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { resetGame, setRematchRequested } from '../../redux/gameSlice';
import { useSocket } from '../../contexts/socketProvider';

export default function RequestRematch() {
    const dispatch = useDispatch();
    const socket = useSocket();

    const handleClick = () => {
        dispatch(resetGame());
        socket.emit('requestRematch');
    }

    useEffect(() => {
        socket.on('proposeRematch', () => {
            dispatch(setRematchRequested(true));
        });

        return () => socket.off('proposeRematch');
    }, [dispatch, socket]);


    return (
        <button onClick={handleClick}>Propose Rematch</button>
    )
}
