import React from 'react';
import './Cube.css';
import Side from './Side';

export default function Cube({ positionValues }) {
    const sides = [];
    for (let i = 0; i < 6; i++) {
        let key = positionValues.x + positionValues.y + positionValues.z + i;
        sides.push(<Side positionValues={positionValues} key={key} />)
    }
    return (
        <div className="Cube">
            {sides}
        </div>
    )
}
