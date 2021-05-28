import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Game from './Game/Game';
import Setup from './Setup/Setup';
import './App.css';

import { addViewControls } from './viewControls2';

function App() {
  addViewControls();

  const roomName = useSelector(state => state.game.roomName);
  const winner = useSelector(state => state.game.winner);

  useEffect(() => {
    let HTML = document.getElementsByTagName('HTML')[0];
    if (winner === 2) HTML.style.backgroundColor = "green";
    if (winner === 1) HTML.style.backgroundColor = "hotpink";
  }, [winner])
  

 

  return (
    <div >
      {roomName === '' ? <Setup /> : <Game />}
    </div>
  );
}

export default App;
