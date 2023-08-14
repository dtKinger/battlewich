import { player1, computer } from "./playerCreation"

export function checkWinner () {
  if (player1.gameboard.everythingIsEaten === true){
    alert(`NOOB! The robot has entirely consumed all your sandwiches, how sad`)
  } else if (computer.gameboard.everythingIsEaten === true){
    alert(`Congratulations! You snarfed up everything the robot had to offer.`)
  }
}