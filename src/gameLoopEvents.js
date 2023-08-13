import { player1, computer } from "./playerCreation";

export const addListeners = ( () => {
  
  const boardContainer = document.querySelector('.gameboard-container');
  const p1Board = document.querySelector('.gameboard-player');
  const compBoard = document.querySelector('.gameboard-computer')
  
  p1Board.classList.add('game-loop-hover__player')
  compBoard.classList.add('game-loop-hover__computer')

  boardContainer.addEventListener("click", (e) => {
    if (e.target.getAttribute('disabled') !== 'true'){
      const biteAttempt = e.target.dataset.id
      if (biteAttempt){
        if(e.target.closest('.gameboard').classList.contains('gameboard-player')){
          const parentBoard = player1.gameboard;
          parentBoard.receiveAttack([biteAttempt[1],biteAttempt[3]])
          parentBoard.isEverythingConsumed()
          checkWinner()
        } else if (e.target.closest('.gameboard').classList.contains('gameboard-computer')){
          const parentBoard = computer.gameboard;
          parentBoard.receiveAttack([biteAttempt[1],biteAttempt[3]])
          parentBoard.isEverythingConsumed();
          checkWinner()
        }
      }
    }
  })

  function checkWinner () {
    if (player1.gameboard.everythingIsEaten === true){
      alert(`NOOB! The robot has entirely consumed all your sandwiches, how sad`)
    } else if (computer.gameboard.everythingIsEaten === true){
      alert(`Congratulations! You snarfed up everything the robot had to offer.`)
    }
  }


})


