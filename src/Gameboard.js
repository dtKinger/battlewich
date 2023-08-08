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

    placeWich (sandwich, anchorArr) {
      if (this.checkSpaces(sandwich, anchorArr)){
        if (this.axis === 'y'){ 
          // place the ship
          for (let i = 0; i < sandwich.length; i += 1){
            // count down x (row) to build up y.
            this.board[anchorArr[0] - i][anchorArr[1]] = sandwich.name.charAt(0)
          }
        } else if (this.axis === 'x'){
          // place the ship
          for (let i = 0; i < sandwich.length; i += 1){
            // Increment Y column to build up x.
            this.board[anchorArr[0]][anchorArr[1] + i] = sandwich.name.charAt(0)
          }
        }
      }
    },

    // Condensed function to check available space
    // run it independentantly on mouseOver event
    // during the set up stage. Red-light the affected squares.
    checkSpaces(sandwich, anchorArr, axis = this.axis) {
      let allClear = 0;
      if (this.axis === 'x'){
        for (let i = 0; i < sandwich.length; i += 1){
          if (this.board[anchorArr[0]][anchorArr[1] + i] === ''){
            allClear += 1;
          }
        }
        if (allClear === sandwich.length) return true;
      } else if (this.axis === 'y'){
        for (let i = 0; i < sandwich.length; i += 1){
          if (this.board[anchorArr[0] - i][anchorArr[1]] === ''){
            allClear += 1;
          }
        }
        if (allClear === sandwich.length) return true;
      }
    },

  }
})
