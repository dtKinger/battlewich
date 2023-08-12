import { makeWich } from "./wichFactory"
import Player from "./Player"

export const Gameboard = ( () => {
  return {
    axis: 'x',
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

    async placeWich(sandwich, anchorArr, axis = this.axis) {
      return this.checkSpaces(sandwich, anchorArr, axis)
      .then(() => {
        if (axis === 'y') {
          return this.placeSandwichVertically(sandwich, anchorArr);
        } else if (axis === 'x') {
          return this.placeSandwichHorizontally(sandwich, anchorArr);
        }
      })
      .catch((error) => {
        console.error(`Error placing ${sandwich.name}:`, error.message);
      });
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
      return new Promise( (resolve, reject) => {
        let allClear = 0;
        if (axis === 'x'){
          for (let i = 0; i < sandwich.length; i += 1){
            // Check for out-of-bounds
            if (anchorArr[1] + i >= this.board[0].length) {
              reject(new Error('Sandwich placement is out of bounds'));
              return;
            }
            // Check if the space is empty
            if (this.board[anchorArr[0]][anchorArr[1] + i] === '') {
              allClear += 1;
            }
          }
          // If all spaces are both empty and in bounds
          if (allClear === sandwich.length) {
            resolve(); // Placement is valid, resolve the promise
          } else {
            reject(new Error('Invalid sandwich placement'));
          }
        } else if (axis === 'y'){
          for (let i = 0; i < sandwich.length; i += 1){
            // Check for out-of-bounds
            if (anchorArr[0] - i < 0) {
              reject(new Error('Sandwich placement is out of bounds'));
              return;
            }
            // Check if the space is empty
            if (this.board[anchorArr[0] - i][anchorArr[1]] === '') {
              allClear += 1;
            }
          }
          // If all spaces are both empty and in bounds
          if (allClear === sandwich.length) {
            resolve(); // Placement is valid, resolve the promise
          } else {
            reject(new Error('Invalid sandwich placement'));
          }
        }
      })
    },

    receiveAttack(coordinates) {
      return Promise.resolve().then(async () => {
        console.log(typeof coordinates[0])
        if (coordinates[0] < 0
          || coordinates[0] > 9
          || coordinates[1] < 0
          || coordinates[1] > 9){
          console.log("Please attack in bounds! (0-9 for both row and col)")
          return; // Out of bounds? Return early
        }
        if (this.bittenCoordinates.has(JSON.stringify(coordinates))) {
          console.log("You've already bitten these coordinates.");
          return; // Coordinates have been attacked before, return early
        }
    
        this.bittenCoordinates.add(JSON.stringify(coordinates)); // Add coordinates to Set
        console.log(this.bittenCoordinates)
        const sandwichRegex = /[sfrch]/i;
        const row = coordinates[0];
        const col = coordinates[1];
        
        let squareStatus = this.board[row][col];
        if (squareStatus === '') {
          // If it's a miss, mark the board with an x
          this.board[row][col] = 'x';
          // renderBoard();
          console.log(`Your bite hits nothing but other teeth. Ouch!`);
        } else if (squareStatus.match(sandwichRegex)) {
          this.board[row][col] = 'b';
          console.log(`Your teeth sink heavily into the flour, the flesh, the forbidden!`);
          switch (squareStatus) {
            case 's':
              await this.submarine.bite();
              await this.submarine.isEaten();
              break;
            case 'f':
              await this.french.bite();
              await this.french.isEaten();
              console.log(this.french)
              break;
            case 'r':
              await this.reuben.bite();
              await this.reuben.isEaten();
              break;
            case 'c':
              await this.club.bite();
              await this.club.isEaten();
              break;
            case 'h':
              await this.hotDog.bite();
              await this.hotDog.isEaten();
              break;
          }
        }
      });  
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
