import React, { useEffect } from 'react';
import Sheet from './Sheet';
import GameInfo from '../GameInfo/GameInfo';
import ResetGame from '../Setup/ResetGame';
import { useSelector, useDispatch } from 'react-redux';
import { setGameState, setWinner } from '../../redux/gameSlice';
import { useSocket } from '../../contexts/socketProvider'
import { checkForWinner } from '../../utils/checkForWinner';
import './Game.css';

export default function Game() {
    const dispatch = useDispatch();
    const socket = useSocket();
    const gameState = useSelector(state => state.game.gameState);
    const winner = useSelector(state => state.game.winner);

    useEffect(() => {
        if (socket == null) return;
        socket.on('gameUpdate', (pVs) => {
            dispatch(setGameState(pVs));        
        });  
        
        return () => {
            socket.off('gameUpdate');
        }
    }, [socket, dispatch]);

    useEffect(() => {
        const winner = checkForWinner(gameState);
        if (winner) dispatch(setWinner(winner));
    }, [dispatch, gameState]);

    let game = [];
    for (let z = 0; z < 3; z++) {
        game.push(<Sheet zValue={z} key={"sheet" + z} />)
    }

    const gameClassName = winner ? "Game winnerRotation" : "Game";

    return (
        <>
            <div className="wrapper">
                <div className={gameClassName}>
                    {game}
                </div>
                
            </div>
            {winner === 0 ? <GameInfo /> : <ResetGame />}
        </>
        
    )
}
