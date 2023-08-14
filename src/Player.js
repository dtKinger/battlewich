import { Gameboard } from "./Gameboard"

export const Player = ((name) => {
  return {
    gameboard: Gameboard(),
    name,
    active: false,
    
    takeTurn(opponentBoard) {
      if (this.active){
        if (this.name === 'Computer'){ // something the average player wouldn't create
          console.log(`It's the ${this.name}'s turn`)
          const coords = generateAtkCoords() // generates and checks them against the Set on other board.
          opponentBoard.receiveAttack(coords)
        } else if (this.name !== 'Computer'){
          console.log(`It's the ${this}'s turn`)
          // Player's version of takeTurn()
        }
        return;
      }
    },

    generateAtkCoords() {
      // Stupidest possible computer AI
      if (this.name !== 'Computer'){
        return;
      }
      // Check the opponents previously bitten squares.
      const a = Math.floor(Math.random() * 10); // Generates a random integer from 0 to 9
      const b = Math.floor(Math.random() * 10); // Generates a random integer from 0 to 9
      const coordinates = [a, b]
      if (player1.gameboard.bittenCoordinates.has(JSON.stringify(coordinates))) {
        this.generateAtkCoords() // recursive call until open coordinates found.
        return; // Coordinates have been attacked before, return early
      } else {
        return coordinates;
      }
    }
  }
});
