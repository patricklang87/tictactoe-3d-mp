import React from 'react';
import { useSelector } from 'react-redux';
import RequestRematch from './RequestRematch';
import AcceptRematch from './AcceptRematch';

export default function ResetGame() {
    const rematchRequested = useSelector(state => state.game.rematchRequested);

    return (
        <div>
            {rematchRequested ? <RequestRematch /> : <AcceptRematch />}
        </div>
    )
}
