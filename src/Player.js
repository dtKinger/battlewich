import { Gameboard } from "./Gameboard"

export const Player = ((name) => {
  return {
    gameboard: Gameboard(),
    name,
    active: false,
    takeTurn: function() {
      if (this.active){
        // bite the enemy
        
        // I can call gameboard.receiveAttack() here
      }

      if (this.active){
        this.active = false;

        if (this === player){
          computer.active = true;
        } else if (this === computer){
          player.active = true;
        }
      }
    },
  }
});
