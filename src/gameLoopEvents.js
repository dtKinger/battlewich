export const addListeners = ( () => {
  
  const boardContainer = document.querySelector('.gameboard-container');
  const domBoardPlayer = document.querySelector('.gameboard-player');
  const domBoardComputer = document.querySelector('.gameboard-computer')
  domBoardPlayer.classList.add('game-loop-hover__player')
  domBoardComputer.classList.add('game-loop-hover__computer')

})