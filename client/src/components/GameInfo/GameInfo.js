import React from 'react';
import { useSelector } from 'react-redux';
import IndicatorCube from './IndicatorCube';
import './GameInfo.css';


export default function GameInfo() {
    const playerOneTurn = useSelector(state => state.game.playerOneTurn);
    const rematchRequested = useSelector(state => state.game.rematchRequested);
    const roomName = useSelector(state => state.game.roomName);
    const winner = useSelector(state => state.game.winner);
    const playerNumber = useSelector(state => state.game.playerNumber);


    const awaitMessage = rematchRequested ? "Awaiting Accept Rematch..." : `Room Name: ${roomName}. Awaiting Opponent...`

    return (
        <div className="GameInfo">
            <IndicatorCube />
            {(winner === 0 && ((playerOneTurn && playerNumber === 1) || (!playerOneTurn && playerNumber === 2))) && <p>Your Play</p>}
            {playerOneTurn == null &&
            (<div className="awaitingOpponent">
                <p>{awaitMessage}</p>
            </div>) }
            
        </div>
          
    )
}
