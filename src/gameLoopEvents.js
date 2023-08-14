import { player1, computer } from "./playerCreation";

export const addListeners = ( () => {
  
  const boardContainer = document.querySelector('.gameboard-container');
  const p1Board = document.querySelector('.gameboard-player');
  const compBoard = document.querySelector('.gameboard-computer')
  p1Board.classList.add('game-loop-hover__player')
  compBoard.classList.add('game-loop-hover__computer')

})