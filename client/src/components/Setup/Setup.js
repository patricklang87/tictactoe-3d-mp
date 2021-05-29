import React from 'react';
import CreateNewGame from './CreateNewGame';
import JoinGame from './JoinGame';
import IndicatorCube from '../GameInfo/IndicatorCube';
import './Setup.css';

export default function Setup() {
    return (
        <div className="Setup">
            <IndicatorCube />
            <div className="setupOptions">
                <CreateNewGame />
                <div>- OR -</div>
                <JoinGame />
            </div>  
        </div>
    )
}
