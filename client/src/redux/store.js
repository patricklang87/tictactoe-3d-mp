import { configureStore } from '@reduxjs/toolkit';
import gameReducer from './gameSlice';
import viewReducer from './viewSlice';

export default configureStore({
    reducer: {
        game: gameReducer,
        view: viewReducer
    }
});