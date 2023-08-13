import { p1Board, compBoard } from "./index"

export function renderComputerBoard() {
  // const cell = computerGameBoard.querySelector(`[data-id="[${row},${col}]"]`);
  
}

export function renderPlayerBoard() {
  const playerGameBoard = document.querySelector('.gameboard-player');

  for (let row = 0; row < 10; row += 1) {
    for (let col = 0; col < 10; col += 1) {
      const cell = playerGameBoard.querySelector(`[data-id="[${row},${col}]"]`);

      if (cell !== null && p1Board[row][col] !== '') {
        console.log(`E.T. It's selecting!!`)
        cell.textContent = p1Board[row][col];
      }
    }
  }
}

export function renderGame() {
  renderComputerBoard()
  renderPlayerBoard()
}