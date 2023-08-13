import { player1, computer } from "./index";



export const addListeners = ( () => {


  const boardContainer = document.querySelector('.gameboard-container');
  boardContainer.addEventListener("click", (e) => {
    const biteAttempt = e.target.dataset.id
    if (biteAttempt){
      if(e.target.closest('.gameboard').classList.contains('gameboard-player')){
        const parentBoard = player1.gameboard;
        parentBoard.receiveAttack([biteAttempt[1],biteAttempt[3]])
      } else if (e.target.closest('.gameboard').classList.contains('gameboard-computer')){
        const parentBoard = computer.gameboard;
        parentBoard.receiveAttack([biteAttempt[1],biteAttempt[3]])
      }
    }
  })
})
