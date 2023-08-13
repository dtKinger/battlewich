import { player1, computer } from "./index"

function renderGame() {
  renderComputerBoard()
  renderPlayerBoard()
}

function renderComputerBoard() {
  for (let row = 0; row < template2DArr.length; row += 1){
    for (let col = 0; col < template2DArr.length; col += 1){

    }
  }
}

function renderPlayerBoard() {
  for (let row = 0; row < template2DArr.length; row += 1){
    for (let col = 0; col < template2DArr.length; col += 1){
      if (player1.gameboard.board[row][col] !== ''){
        (p1Board[row][col]).textContent = player1.gameboard.board[row][col];
      }
    }
  }
}
renderPlayerBoard()