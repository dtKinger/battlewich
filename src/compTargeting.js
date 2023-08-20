import { player1, computer, p1Gameboard, p1Board, compGameboard, compBoard } from "./playerCreation";

export function compTargeting () {
  
  if (computer.nextHitQueue.length > 0){
    return getValidCoords(); // Recursive, but if it exhausts the Q, it will generate random anyway
  } else {
    return computer.generateAtkCoords(p1Gameboard);
  }
  
}

function getValidCoords () {
  console.log(`Try to read p1Gameboard.bittenCoordinates`)
  if (!p1Gameboard.bittenCoordinates.has(computer.nextHitQueue[0])){
    let qItem = computer.nextHitQueue.shift()
    return qItem; 
  } else {
    computer.nextHitQueue.shift() // Toss it in the garbage.
  };

  while (computer.nextHitQueue.length > 0){
    return getValidCoords();
  }

  return computer.generateAtkCoords(p1Gameboard);
}