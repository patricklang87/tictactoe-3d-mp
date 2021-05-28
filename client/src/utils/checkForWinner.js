export const checkForWinner = (gameState) => {
    //within single board
    let winner;
    // within a single row
    for (let board of gameState) {
      for (let row of board) {
          if (row[0] !== 0 && row[0] === row[1] && row[0] === row[2]) {
            winner = row[0]
            return winner;
          }
      } 
      //diagonal within a board
      if ((board[0][0] !== 0 && board[0][0] === board[1][1] && board[0][0] === board[2][2]) || (board[0][2] !== 0 && board[0][2] === board[1][1] && board[0][2] === board[2][0])) {
        winner = board[1][1];
        return winner;
      }
      // row down a single board
      for (let x = 0; x < 3; x++) {
        if (board[0][x] !== 0 && board[0][x] === board[1][x] && board[0][x] === board[2][x]) {
          winner = board[0][x];
          return winner;
        } 
      }
      
    }
    // row across 3 boards
    for (let y = 0; y < 3; y++) {
      for (let x = 0; x < 3; x++) {
        if (gameState[0][y][x] !== 0 && gameState[0][y][x] === gameState[1][y][x] && gameState[0][y][x] === gameState[2][y][x]) {
          winner = gameState[0][y][x];
          return winner;
        }
      }
    }  
    for (let x = 0; x < 3; x++) {
      if ((gameState[0][0][x] !== 0 && gameState[0][0][x] === gameState[1][1][x] && gameState[0][0][x] === gameState[2][2][x]) || (gameState[2][0][x] !== 0 && gameState[2][0][x] === gameState[1][1][x] && gameState[2][0][x] === gameState[0][2][x])) {
        winner = gameState[1][1][x]
        return winner;
      }
      if ((gameState[0][x][0] !== 0 && gameState[0][x][0] === gameState[1][x][1] && gameState[0][x][0] === gameState[2][x][2]) || (gameState[2][x][0] !== 0 && gameState[2][x][0] === gameState[1][x][1] && gameState[2][x][0] === gameState[0][x][2])) {
        winner = gameState[1][x][1];
        return winner;
      }
      if ((gameState[0][0][0] !== 0 && gameState[0][0][0] === gameState[1][1][1] && gameState[0][0][0] === gameState[2][2][2]) || (gameState[0][0][2] !== 0 && gameState[0][0][2] === gameState[1][1][1] && gameState[0][0][2] === gameState[2][2][0]) || (gameState[2][0][0] !== 0 && gameState[2][0][0] === gameState[1][1][1] && gameState[2][0][0] === gameState[0][2][2]) || (gameState[2][0][2] !== 0 && gameState[2][0][2] === gameState[1][1][1] && gameState[2][0][0] === gameState[0][2][0]) )  {
        winner = gameState[1][1][1]
        return winner;
      }
    }
    
  }