import { Gameboard } from "./Gameboard"

export const Player = ((name, role) => {
  return {
    gameboard: Gameboard(),
    name,
    role,
    active: false,
    
    async takeTurn(opponentBoard) {
      if (this.role === 'player2') {
        // NOT USED IN PLAYERS1 SETTING
        // console.log(opponentBoard)
        // const coordinates = this.generateAtkCoords();
        // opponentBoard.receiveAttack(coordinates);
      } else if (this.role === 'player1') {
        console.log('this.role === player1')
        return new Promise((resolve) => {
          const boardContainer = document.querySelector('.gameboard-container');
          
          // Define the click handler function
          const clickHandler = (e) => {
            if (e.target.getAttribute('disabled') !== 'true'){
              const biteAttempt = e.target.dataset.id;
              if (biteAttempt) {
                const a = biteAttempt[1];
                const b = biteAttempt[3];
                const chosenCoordinates = [a, b];
                // Remove the event listener to prevent further clicks during this turn
                boardContainer.removeEventListener("click", clickHandler);
                // Resolve the Promise with the chosen coordinates
                resolve(chosenCoordinates);
              }
            }
          };
          
          // Register the click event listener immediately
          boardContainer.addEventListener("click", clickHandler);
        });
      }
    },

    generateAtkCoords(opponentBoard) {
      // Call this with player1.gameboard as the argument
      // Stupidest possible computer AI
      if (this.role !== 'player2'){
        return;
      }
      // Check the opponents previously bitten squares.
      const a = Math.floor(Math.random() * 10); // Generates a random integer from 0 to 9
      const b = Math.floor(Math.random() * 10); // Generates a random integer from 0 to 9
      const coordinates = [a, b]
      if (opponentBoard.bittenCoordinates.has(JSON.stringify(coordinates))) {

        // If all coordinates are bitten, stop the recursion
        if (opponentBoard.bittenCoordinates.size >= 100) {
          return null; 
        }

        return this.generateAtkCoords();// recursive call until open coordinates found.

      } else {
        return coordinates;
      }
    }
  }
});
