import React from 'react';
import CreateNewGame from './CreateNewGame';
import JoinGame from './JoinGame';
import './Setup.css';

export default function Setup() {
    return (
        <div className="Setup">
            <CreateNewGame />
            <div>- OR -</div>
            <JoinGame />
        </div>
    )
}
