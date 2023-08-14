/* Imports */
import './meyer-reset.css'
import './style.css'
import { updateDomMessage } from './updateDomMessage';
import { buildHTMLBoards } from "./buildHTMLBoards"
import { player1, computer } from "./playerCreation";
import { addListeners } from "./gameLoopEvents"
import { renderComputerBoard, renderPlayerWiches, updatePlayerBoard, renderGame } from './renderBoard';
import { checkWinner } from "./checkWinner"

/* Memory allocation */

// Gameboard alias creations
export const p1Gameboard = player1.gameboard; // alias for gameboard
export const p1Board = p1Gameboard.board; // alias for the board
export const compGameboard = computer.gameboard; // alias for gameboard
export const compBoard = compGameboard.board; // alias for the board
const startButton = document.querySelector('.start-btn')

// all After Game Sign-in stage.
// Generate HTML and CSS for two gameboards. Note: Does not render sandwiches
buildHTMLBoards();

// Game Set up Stage.
console.log("Welcome to Battle 'Wich!")

p1Gameboard.placeWich(p1Gameboard.submarine, [0,0])
p1Gameboard.placeWich(p1Gameboard.french, [1,0])
p1Gameboard.placeWich(p1Gameboard.reuben, [2,0])
p1Gameboard.placeWich(p1Gameboard.club, [3,0])
p1Gameboard.placeWich(p1Gameboard.hotDog, [4,0])

compGameboard.placeWich(compGameboard.submarine, [0,0])
compGameboard.placeWich(compGameboard.french, [1,0])
compGameboard.placeWich(compGameboard.reuben, [2,0])
compGameboard.placeWich(compGameboard.club, [3,0])
compGameboard.placeWich(compGameboard.hotDog, [4,0])

/* Event listeners */
renderPlayerWiches();
addListeners();

/* Application */


// Game Play stage

// Game Loop
async function gameLoop() {
  if (p1Gameboard.everythingIsEaten || compBoard.everythingIsEaten) {
    // Game over condition, stop the loop
    return;
  }
  if (player1.active === false && computer.active === false){ // new game? P1's turn
    player1.active = true;
  }

  if (player1.active) {
    // Human player's turn
    console.log("Human player's turn");
    const playerCoordinates = await player1.takeTurn(compGameboard);
    compGameboard.receiveAttack(playerCoordinates);
    renderComputerBoard()//
    
    compGameboard.isEverythingConsumed();
    console.log('consumption checked')
    checkWinner();
    console.log('winner checked')
  } else if (computer.active) {
    // Computer's turn
    console.log("Computer's turn");
    const computerCoordinates = computer.generateAtkCoords(); 
    p1Gameboard.receiveAttack(computerCoordinates);
    p1Gameboard.isEverythingConsumed();
    checkWinner();
  }
  // Flip the turn switch
  player1.active = !player1.active;
  computer.active = !computer.active;
  setTimeout(gameLoop, 2000); // Re-start the game loop
}

startButton.addEventListener('click', () => {
  // Prevent multiple loops running at once
  if (player1.active === false && computer.active === false) {
    gameLoop()
  }
})
