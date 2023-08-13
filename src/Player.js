import { Gameboard } from "./Gameboard"

export const Player = ((name) => {
  return {
    gameboard: Gameboard(),
    name,
    active: true,
    takeTurn(opponentBoard) {
      if (this.active){
        // bite the enemy
        opponentBoard.receiveAttack(getCoordinates())
        
        // I can call gameboard.receiveAttack() here
      }
    },
  }
});
