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
      if (this.checkSpaces()){
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
        return { board }
      }
    },

    // Condensed function to check available space
    checkSpaces(sandwich, anchorArr) {
      if (this.axis === 'x'){

      } else if (this.axis === 'y'){

      }
    },


    // Two helpers for placeIt, but run it independentantly on mouseOver event
    // during the set up stage. Red-light the affected squares
    // checkYSpaces (sandwich, anchorArr, axis = this.axis) {
      
    //   for (let i = 0; i < sandwich.length; i += 1){
    //     // Check the spaces
    //     if (this.board[anchorArr[0] - i][anchorArr[1]] === undefined){
    //       console.log("Can't play out of bounds")
    //       // Add a pointer event here to make it red / unavailable
    //       return false; // Break out if some are undefined.
    //     } else if (this.board[anchorArr[0] - i][anchorArr[1]] !== ''){
    //       console.log("Can't play on top of existing wich")
    //       // Add a pointer event here to make it red / unavailable
    //       return false; // Break out if they're not all empty.
    //     } else {
    //       // don't return true here. It will allow part of a ship to be played on the
    //       // board illegally.
    //     }
    //   }
    // },

    // checkXSpaces (sandwich, anchorArr, axis = this.axis) {
    //   for (let i = 0; i < sandwich.length; i += 1){
    //     // Check the spaces
    //     if (this.board[anchorArr[0]][anchorArr[1] + i] === undefined){
    //       console.log("Can't play out of bounds")
    //       return false; // Break out if some are undefined.
    //     } else if (this.board[anchorArr[0]][anchorArr[1] + 1] !== ''){
    //       console.log("Can't play on top of existing wich")
    //       return false; // Break out if they're not all empty.
    //     }
    //   }
    //   return { sandwich, anchorArr }
    // },

  }
})
