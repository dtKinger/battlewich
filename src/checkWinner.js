import { player1, computer } from "./playerCreation"
import { updateDomMessage } from "./updateDomMessage";

export function checkWinner () {
  if (player1.gameboard.everythingIsEaten === true){
    updateDomMessage(`Oh no!! The computer ate all sandwiches. Play again?`)
    return true; // => Go to game over screen
  } else if (computer.gameboard.everythingIsEaten === true){
    updateDomMessage(`Congratulations! You snarfed up everything the robot had to offer. Play again?`)
    return true; // => Go to game over screen
  }
}