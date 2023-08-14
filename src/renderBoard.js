import { player1, computer } from "./playerCreation"

const p1Board = player1.gameboard.board
const compBoard = computer.gameboard.board

export function renderComputerBoard() {
  const span = document.createElement('span');
  const computerGameBoard = document.querySelector('.gameboard-computer')
  for (let row = 0; row < 10; row += 1) {
    for (let col = 0; col < 10; col += 1) {
      const cell = computerGameBoard.querySelector(`[data-id="[${row},${col}]"]`);
      if (cell !== null && compBoard[row][col].charAt(1) === 'b') {  // If the 2nd character is b, it's bitten.
        // cell.style.backgroundColor = 'blue';
        cell.classList.add('bitten')
        // }
      } else if (cell !== null && compBoard[row][col] === 'x'){
        if (cell.hasChildNodes() === false){ // This is a bug fix. Prevents misses from 
          // appending a span every time after the first miss is applied to a cell.
          // I can probably find a better solution later.
          const missMarker = span;
          missMarker.classList = 'miss-dot';
          cell.appendChild(missMarker);
        }
      }
    }
  }
}

export function renderPlayerWiches() {
  const playerGameBoard = document.querySelector('.gameboard-player');

  for (let row = 0; row < 10; row += 1) {
    for (let col = 0; col < 10; col += 1) {
      const cell = playerGameBoard.querySelector(`[data-id="[${row},${col}]"]`);

      if (cell !== null && p1Board[row][col] !== '') {
        cell.textContent = p1Board[row][col];
      }
    }
  }
}

export function updatePlayerBoard() {
  
}

export function renderGame() {
  renderComputerBoard()
  renderPlayerBoard()
}