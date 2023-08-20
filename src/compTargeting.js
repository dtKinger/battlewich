import { player1, computer, p1Gameboard, p1Board, compGameboard, compBoard } from "./playerCreation";

// p1Gameboard.bittencoordinates = player1.gameboard.bittencoordinates
export function compTargeting () {


  return nextTarget;
}

// If there are hits in the queue, use them for targeting
if (computer.nextHitQueue.length > 0) {
  newTarget = computer.nextHitQueue[0].shift();

  // If everything around the hit has been bitten
  if (computer.nextHitQueue[0].length === 0) {
    computer.nextHitQueue.shift();
  }
} else {
  // If queue is empty, generate random coordinates for the first attack
  newTarget = computer.generateAtkCoords(p1Gameboard);
}
