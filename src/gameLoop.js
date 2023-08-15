import { player1, computer } from "./playerCreation";
import { Gameboard } from "./Gameboard";
import { renderComputerBoard, updatePlayerBoard, renderGame  } from "./renderBoard";
import { checkWinner } from "./checkWinner"
import { p1Gameboard, p1Board, compGameboard, compBoard } from "./playerCreation";

// Game Loop
export async function gameLoop() {
  // Base case 1
  if (p1Gameboard.everythingIsEaten || compBoard.everythingIsEaten) {
    // Game over condition, stop the loop
    return;
  }

  if (player1.active) {
    // Human player's turn
    console.log("Human player's turn");
    const playerCoordinates = await player1.takeTurn(compGameboard);
    console.log(playerCoordinates) // they log as string numbers
    compGameboard.receiveAttack(playerCoordinates);
    renderComputerBoard()
    compGameboard.isEverythingConsumed();
    checkWinner();
  } else if (computer.active) {
    // Computer's turn
    console.log("Computer's turn");
    const computerCoordinates = computer.generateAtkCoords(p1Gameboard); 
    console.log(computerCoordinates) // they log as number numbers
    p1Gameboard.receiveAttack(computerCoordinates);
    updatePlayerBoard();
    p1Gameboard.isEverythingConsumed();
    checkWinner();
  }
  // Flip the turn switch
  player1.active = !player1.active;
  computer.active = !computer.active;
  setTimeout(gameLoop, 200); // Re-start the game loop
}
