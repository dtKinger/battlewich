import { Gameboard } from "./Gameboard"

export const Player = ((name, role) => {
  return {
    gameboard: Gameboard(name),
    name,
    role,
    active: false,
    nextHitQueue: [],
    nextHitOptions: [
      [-1, 0], [0, 1], [1, 0], [0, -1]
    ],
    lastHit: null,
    

    async takeTurn(opponentBoard) {
      if (this.role === 'player2') {
        // NOT USED IN PLAYERS1 SETTING
        // const coordinates = this.generateAtkCoords();
        // opponentBoard.receiveAttack(coordinates);
      } else if (this.role === 'player1') {
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
              e.target.setAttribute('disabled', 'true')
            }
          };
          
          // Register the click event listener immediately
          boardContainer.addEventListener("click", clickHandler);
        });
      }
    },

    generateAtkCoords(opponentBoard) {
      if (this.role !== 'player2') {
        return;
      }
      let attempts = 0;
      const maxAttempts = 10; // Maximum number of attempts before giving up
    
      const tryGenerateCoordinates = () => {
        const a = Math.floor(Math.random() * 10);
        const b = Math.floor(Math.random() * 10);
        const coordinates = [`${a}`, `${b}`];
    
        if (opponentBoard.bittenCoordinates.has(JSON.stringify(coordinates))) {
          if (opponentBoard.bittenCoordinates.size >= 100) {
            console.warn(`That took too many randoms!`);
            return null;
          }
          return tryGenerateCoordinates(); // Recursive call to try generating new coordinates
        } else {
          return coordinates;
        }
      };
    
      while (attempts < maxAttempts) {
        try {
          return tryGenerateCoordinates();
        } catch (error) {
          console.error(`Error generating coordinates: ${error}`);
          attempts += 1;
        }
      }
    
      console.error(`Failed to generate coordinates after ${maxAttempts} attempts`);
      return null; // Give up and return null
    }
    
  }
});
