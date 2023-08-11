/* Imports */
import './meyer-reset.css'
import './style.css'
import './dom.js'  
import { makeWich } from './wichFactory.js'
import { Gameboard } from "./Gameboard";
import { attackBtn, attackRow, attackCol } from './attack'
import { Player } from "./Player"

/* Memory allocation */


/* Application */
console.log("Welcome to Battle 'Wich!")

export const player = Player('Player 1');
export const computer = Player('Robot');


console.log(player.gameboard.axis)
console.log(computer.gameboard.board)


// Game Loop
function gameLoop() {
  // Implement the game loop logic here
  // Example: while (!player.gameboard.areAllShipsSunk() && !computer.gameboard.areAllShipsSunk()) {
  //    player.takeTurn();
  //    computer.takeTurn();
  // }
}

gameLoop(); // Start the game loop

// Create Player1

  /// Create playerBoard


// Create Computer

  /// Create computerBoard