import { createSlice } from '@reduxjs/toolkit';

const gameSlice = createSlice({
    name: "game",
    initialState: {
        playerOneTurn: null,
        playerNumber: null,
        roomName: '',
        winner: 0,
        gameState: [
            [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
            [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
            [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
        ],
        rematchRequested: false
    },
    reducers: {
        setPlayerNumber: (state, action) => {
            state.playerNumber = action.payload;
        },
        setPlayerTurn: (state, action) => {
            state.playerOneTurn = action.payload;
        },
        setRoomName: (state, action) => {
            state.roomName = action.payload;
        },
        setGameState: (state, action) => {
            const x = action.payload.x;
            const y = action.payload.y;
            const z = action.payload.z;
            const currentPlayer = state.playerOneTurn ? 1 : 2;
            state.gameState[x][y][z] = currentPlayer;
            state.playerOneTurn = !state.playerOneTurn;
        },
        setWinner: (state, action) => {
            state.winner = action.payload;
        },
        resetGame: (state) => {
            state.playerOneTurn = null;
            state.winner = 0; 
            state.gameState = [
            [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
            [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
            [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
            ]
        },
        setRematchRequested: (state, action) => {
            state.rematchRequested = action.payload;
        }
    }
});

export const { setPlayerNumber, setPlayerTurn, setRoomName, setGameState, setWinner, resetGame, setRematchRequested } = gameSlice.actions;
export default gameSlice.reducer;