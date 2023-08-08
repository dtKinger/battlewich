import { makeWich } from "./wichFactory"

export const Gameboard = ( (player) => {
  return {
    player,
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

    submarine: makeWich('submarine', 5),
    french: makeWich('french', 4),
    reuben: makeWich('reuben', 3),
    club: makeWich('club', 3),
    hotDog: makeWich('hot dog', 2),
    

    placeWich(sandwich, anchorArr, axis = this.axis) {
      this.checkSpaces(sandwich, anchorArr, axis)
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

  }
})
