/* Imports */
import './meyer-reset.css'
import './style.css'
import { buildHTMLBoards } from "./dom"
import { makeWich } from './wichFactory.js'
import { Gameboard } from "./Gameboard";
import { attackBtn, attackRow, attackCol } from './attack'
import { Player } from "./Player"

/* Memory allocation */
export const player1 = Player('Player 1');
export const computer = Player('Robot');
export const p1Gameboard = player1.gameboard; // alias for gameboard
export const p1Board = p1Gameboard.board; // alias for the board
export const compGameboard = computer.gameboard; // alias for gameboard
export const compBoard = compGameboard.board; // alias for the board

/* Application */

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


buildHTMLBoards();
// Game Play stage

// Game Loop
function gameLoop() {
  if (!p1Gameboard.everythingIsEaten && !compBoard.everythingIsEaten) {
    player1.takeTurn()
  }
  if (!p1Gameboard.everythingIsEaten && !compBoard.everythingIsEaten) {
    computer.takeTurn()
  }
  console.log(this.board)
    if (this.isEverythingConsumed()){
      if (this.player === 'Robot'){
        alert(`Noooob. The Robot ate your sandwiches`)
      } else {
        alert(`Stop eating! You did it! You devoured all the oponent's sandwiches.`)
      }
    }
  // Flip the turn switch
  player1.active = !player1.active;
  computer.active = !computer.active;
  gameLoop(); // Start the game loop
  
}



// Create Player1

  /// Create playerBoard


// Create Computer

  /// Create computerBoard