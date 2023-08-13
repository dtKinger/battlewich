import { player1, computer } from "./index";
import { Gameboard } from "./Gameboard"; 

export const addListeners = ( () => {

  const boardContainer = document.querySelector('.gameboard-container');
  boardContainer.addEventListener("click", async (e) => {
    const biteAttempt = e.target.dataset.id
    if (biteAttempt){
      if(e.target.closest('.gameboard').classList.contains('gameboard-player')){
        const parentBoard = player1.gameboard;
        await parentBoard.receiveAttack([biteAttempt[1],biteAttempt[3]])
        await parentBoard.isEverythingConsumed()
        await checkWinner()
      } else if (e.target.closest('.gameboard').classList.contains('gameboard-computer')){
        const parentBoard = computer.gameboard;
        await parentBoard.receiveAttack([biteAttempt[1],biteAttempt[3]])
        await parentBoard.isEverythingConsumed();
        await checkWinner()
      }
    }
    
  })

})


export function checkWinner () {
  if (player1.gameboard.everythingIsEaten === true){
    alert(`NOOB! The robot has entirely consumed all your sandwiches, how sad`)
  } else if (computer.gameboard.everythingIsEaten === true){
    alert(`Congratulations! You snarfed up everything the robot had to offer.`)
  }
}