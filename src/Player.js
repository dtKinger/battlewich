import { player1 } from ".";
import { Gameboard } from "./Gameboard"


export const Player = ((name) => {
  return {
    gameboard: Gameboard(),
    name,
    active: true,
    takeTurn(opponentBoard) {
      if (this.active){
        // bite the enemy
        
        // I can call gameboard.receiveAttack() here
      }
    },
  }
});
