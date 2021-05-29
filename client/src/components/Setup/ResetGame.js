import React from 'react';
import { useSelector } from 'react-redux';
import RequestRematch from './RequestRematch';
import AcceptRematch from './AcceptRematch';
import './ResetGame.css';

export default function ResetGame() {
    const rematchRequested = useSelector(state => state.game.rematchRequested);
    const winner = useSelector(state => state.game.winner);

    return (
        <div className="ResetGame">
            {!rematchRequested && <RequestRematch />}
            {(rematchRequested && winner !== 0) && <AcceptRematch />}
        </div>
    )
}
