import { player1, computer, p1Gameboard, p1Board, compGameboard, compBoard } from "./playerCreation";

const queuedCoordinates = new Set();

export function compTargeting() {
  if (computer.nextHitQueue.length > 0) {
    return getValidCoords();
  } else {
    let generated = computer.generateAtkCoords(p1Gameboard);
    if (generated) {
      queuedCoordinates.add(JSON.stringify(generated)); // Add to the queuedCoordinates Set
    }
    return generated;
  }
}


function getValidCoords() {
  if (!p1Gameboard.bittenCoordinates.has(computer.nextHitQueue[0])){
    const nextCoord = computer.nextHitQueue.shift();
    return nextCoord;
  } else {
    return computer.generateAtkCoords(p1Gameboard);
  }
}


export function checkIfHit (a, b) {
  if (p1Board[a][b].charAt(1) === 'b'){
    return true;
  } else {
    return false;
  }
}

export function populateHitQueue(a, b) {
  const hitCoords = [a, b];

  computer.nextHitOptions.forEach((option) => {
    let result = [hitCoords[0] + option[0], hitCoords[1] + option[1]];
    if (
      result[0] >= 0 &&
      result[0] <= 9 &&
      result[1] >= 0 &&
      result[1] <= 9 &&
      !queuedCoordinates.has(JSON.stringify(result)) // Check if not already queued
    ) {
      // Serialize result
      result = [`${result[0]}`, `${result[1]}`]
      // Check it again
      if (!queuedCoordinates.has(JSON.stringify(result))){
      computer.nextHitQueue.push(result);
      queuedCoordinates.add(JSON.stringify(result)); // Add to the queuedCoordinates Set
      }
    }
  });
}


