import { updateDomMessage } from "./updateDomMessage"
import { makeWich } from "./wichFactory"

export const Gameboard = ( (name) => {
  return {
    axis: 'x',
    name,
    board: 
      [
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','','']
      ],

    bittenCoordinates: new Set(), // Tracks all hits and misses

    submarine: makeWich('submarine', 5),
    french: makeWich('french', 4),
    reuben: makeWich('reuben', 3),
    club: makeWich('club', 3),
    hotDog: makeWich('hot dog', 2),
    everythingIsEaten: false,

    currentSandwich: 'submarine',
    // End of Sandwich array examples

    placeWich(sandwich, anchorArr, axis = this.axis) {
      const isValidPlacement = this.checkSpaces(sandwich, anchorArr, axis);
      
      if (isValidPlacement) {
        if (axis === 'y') {
          this.placeSandwichVertically(sandwich, anchorArr);
        } else if (axis === 'x') {
          this.placeSandwichHorizontally(sandwich, anchorArr);
        }
      } else {
        console.error(`Invalid placement for ${sandwich.name}`);
      }
    },
    
    placeSandwichVertically(sandwich, anchorArr) {
      for (let i = 0; i < sandwich.length; i += 1) {
        this.board[anchorArr[0] - i][anchorArr[1]] = sandwich.name.charAt(0);
      }
    },
    
    placeSandwichHorizontally(sandwich, anchorArr) {
      for (let i = 0; i < sandwich.length; i += 1) {
        this.board[anchorArr[0]][anchorArr[1] + i] = sandwich.name.charAt(0);
      }
    },

    // Condensed function to check available space
    // run it independentantly on mouseOver event
    // during the set up stage. Red-light the affected squares.
    checkSpaces(sandwich, anchorArr, axis = this.axis) {
      let allClear = 0;
      if (sandwich){ // Because I'm .shifting() sandwiches, there might not be one
        if (axis === 'x') {
          for (let i = 0; i < sandwich.length; i += 1) {
            // Check for out-of-bounds
            if (anchorArr[1] + i >= this.board[0].length) {
              return false;
              // throw new Error('Sandwich placement is out of bounds'); // disable the click
              // another way. checkSpaces being called on hover now.
            }
            // Check if the space is empty
            if (this.board[anchorArr[0]][anchorArr[1] + i] === '') {
              allClear += 1;
            }
          }
        } else if (axis === 'y') {
          for (let i = 0; i < sandwich.length; i += 1) {
            // Check for out-of-bounds
            if (anchorArr[0] - i < 0) {
              return false;
              // throw new Error('Sandwich placement is out of bounds'); // disable the click
              // another way. checkSpaces being called on hover now.
            }
            // Check if the space is empty
            if (this.board[anchorArr[0] - i][anchorArr[1]] === '') {
              allClear += 1;
            }
          }
        }
        
        if (allClear === sandwich.length) {
          return true; // Placement is valid
        } else {
          console.warn('Invalid sandwich placement');
        }
      }
    },
    
    receiveAttack(coordinates) {
      if (
        coordinates[0] < 0 ||
        coordinates[0] > 9 ||
        coordinates[1] < 0 ||
        coordinates[1] > 9
      ) {
        updateDomMessage(`Please bite in bounds! (0-9 for both row and col)`);
        return; // Out of bounds? Return early
      }
      
      if (this.bittenCoordinates.has(JSON.stringify(coordinates))) {
        updateDomMessage(`Those coordinates have already been bitten.`);
        return; // Coordinates have been attacked before, return early
      }
    
      this.bittenCoordinates.add(JSON.stringify(coordinates)); // Add coordinates to Set
      const sandwichRegex = /[sfrch]/i;
      const row = coordinates[0];
      const col = coordinates[1];
    
      let squareStatus = this.board[row][col];
      if (squareStatus === '') {
        // If it's a miss, mark the board with an x
        this.board[row][col] = 'x';
      } else if (squareStatus.match(sandwichRegex)) {
        this.board[row][col] += 'b'; // append a bite to the sandwich square.
    
        updateDomMessage(`NOM NOM NOM! ${this.name} loses a big chunk of sandwich!`);
        switch (squareStatus) {
          case 's':
            this.submarine.bite();
            this.submarine.isEaten();
            break;
          case 'f':
            this.french.bite();
            this.french.isEaten();
            break;
          case 'r':
            this.reuben.bite();
            this.reuben.isEaten();
            break;
          case 'c':
            this.club.bite();
            this.club.isEaten();
            break;
          case 'h':
            this.hotDog.bite();
            this.hotDog.isEaten();
            break;
        }
      }
    },
    
    // Check is all 5 sandwiches have been consumed
    isEverythingConsumed() {
      if (
        this.submarine.eatenStatus === true &&
        this.french.eatenStatus === true && 
        this.reuben.eatenStatus === true &&
        this.club.eatenStatus === true &&
        this.hotDog.eatenStatus === true){
          this.everythingIsEaten = true;
          return true;
        }
      return false;  
    }
  }
})
