import {createSlice} from '@reduxjs/toolkit';

const viewSlice = createSlice({
    name: "view",
    initialState: {
        rotate: { x: 30, y: 30},
        mouseIsDown: false,
        zoom: null
    },
    reducers: {
        setRotate: (state, action) => {
            state.rotate = { x: action.payload.x, y: action.payload.y}
        },
        setZoom: (state, action) => {
            state.zoom = action.payload;
        },
        setMouseIsDown: (state, action) => {
            state.mouseIsDown = action.payload;
        }
    }
});

export const { setRotate, setZoom, setMouseIsDown } = viewSlice.actions;
export default viewSlice.reducer;

