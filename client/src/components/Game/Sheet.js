import React from 'react'
import Cube from './Cube';
import './Sheet.css';

export default function Sheet({ zValue }) {
    let cubes = [];
    for (let y = 0; y < 3; y++) {
        for (let x = 0; x < 3; x++) {
            const key = x + y + zValue
            const positionValues = {x, y, z: zValue}
            cubes.push(<Cube positionValues={positionValues} key={key} />)
        } 
    }

    return (
        <div className="Sheet">
            {cubes}
        </div>
    )
}
