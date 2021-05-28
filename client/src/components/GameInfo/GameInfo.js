import React from 'react';
import { useSelector } from 'react-redux';
import './GameInfo.css';


export default function GameInfo() {
    const playerOneTurn = useSelector(state => state.game.playerOneTurn);
    const roomName = useSelector(state => state.game.roomName);
    const winner = useSelector(state => state.game.winner);

    let indicatorCubeColor = "rgba(252, 252, 142)";
    if (winner === 0 && playerOneTurn != null) {
        if (playerOneTurn === true) indicatorCubeColor = "hotpink";
        else indicatorCubeColor = "limegreen";
    }

    const indicatorCubeSide = (<div className="indicatorCubeSide" style={{backgroundColor: indicatorCubeColor}}></div>);
    let indicatorCube = [];
    for (let x = 0; x < 6; x++) {
        indicatorCube.push(indicatorCubeSide);
    }

    return (
        <div className="GameInfo">
            <div className="indicatorCubeDiv">
                <div className="indicatorCubeWrapper" >
                    <div className="indicatorCube">{indicatorCube}</div>
                </div>
            </div>
            {playerOneTurn == null &&
            (<div className="awaitingOpponent">
                <p>... Awaiting Opponent. Room Name: {roomName} ...</p>
            </div>) }
            
        </div>
          
    )
}
