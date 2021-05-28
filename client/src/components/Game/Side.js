import React, { useEffect } from 'react';
import './Side.css';
import { useDispatch, useSelector } from 'react-redux';
import { setGameState } from '../../redux/gameSlice';
import { useSocket } from '../../contexts/socketProvider';

export default function Side({ positionValues }) {
    const dispatch = useDispatch();
    const socket = useSocket();
    const playerOneTurn = useSelector(state => state.game.playerOneTurn);
    const playerNumber = useSelector(state => state.game.playerNumber);
    const roomName = useSelector(state => state.game.roomName);
    const winner = useSelector(state => state.game.winner)

    const x = positionValues.x;
    const y = positionValues.y;
    const z = positionValues.z;

    const controlledBy = useSelector(state => state.game.gameState[x][y][z]);

    let backgroundColor = "rgba(252, 252, 142, 0.671)";
    if (controlledBy === 1 ) backgroundColor = "hotpink";
    if (controlledBy === 2) backgroundColor = "limegreen";

    const yourTurn = (playerOneTurn && playerNumber === 1) || (!playerOneTurn && playerNumber === 2);

    const handleClick = () => {
        if (controlledBy === 0 && winner === 0 && yourTurn) {
            socket.emit('squareClicked', {positionValues, roomName});
            
            
        }
    }

 


    return (
        <div className="Side" onClick={handleClick} style={{"backgroundColor": `${backgroundColor}`}} >
        </div>
    )
}
