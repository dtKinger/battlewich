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

    placeSubmarine (anchorArr, axis = this.axis) { // helper function to lock in name and length
      const submarine = makeWich('submarine', 5) // create the boat in memory
      // if (this.checkSpace () == true) {}// compare to physical space
      this.placeIt(submarine, anchorArr, axis);
      return submarine;
    },
    
    placeFrench (anchorArr, axis = this.axis) { // helper function to lock in name and length
      const french = makeWich('french', 4)
      this.placeIt(french, anchorArr, axis);
      return french;
    },

    placeClub (anchorArr, axis = this.axis) { // helper function to lock in name and length
      const club = makeWich('club', 3)
      this.placeIt(club, anchorArr, axis);
    },

    placeReuben (anchorArr, axis = this.axis) { // helper function to lock in name and length
      const reuben = makeWich('reuben', 3)
      this.placeIt(reuben, anchorArr, axis);
    },

    placeHotDog (anchorArr, axis = this.axis) { // helper function to lock in name and length
      const hotDog = makeWich('hot dog', 2)
      this.placeIt(hotDog, anchorArr, axis);
    },


    // Two helpers for placeIt, but run it independentantly on mouseOver event
    // during the set up stage. Red-light the affected squares
    checkYSpaces (sandwich, anchorArr) {
      
      for (let i = 0; i < sandwich.length; i += 1){
        // Check the spaces
        if (this.board[anchorArr[0] - i][anchorArr[1]] === undefined){
          console.log("Can't play out of bounds")
          // Add a pointer event here to make it red / unavailable
          return false; // Break out if some are undefined.
        } else if (this.board[anchorArr[0] - i][anchorArr[1]] !== ''){
          console.log("Can't play on top of existing wich")
          // Add a pointer event here to make it red / unavailable
          return false; // Break out if they're not all empty.
        } else {
          // don't return true here. It will allow part of a ship to be played on the
          // board illegally.
        }
      }
    },

    checkXSpaces (sandwich, anchorArr) {
      for (let i = 0; i < sandwich.length; i += 1){
        // Check the spaces
        if (this.board[anchorArr[0]][anchorArr[1] + i] === undefined){
          console.log("Can't play out of bounds")
          return false; // Break out if some are undefined.
        } else if (this.board[anchorArr[0]][anchorArr[1] + 1] !== ''){
          console.log("Can't play on top of existing wich")
          return false; // Break out if they're not all empty.
        }
      }
    },

    placeIt (sandwich, anchorArr, axis) {
      if (this.axis === 'y'){
        if (this.checkYSpaces(sandwich, anchorArr) != false){
          // place the ship
          for (let i = 0; i < sandwich.length; i += 1){
            this.board[anchorArr[0] - i][anchorArr[1]] = sandwich.name.charAt(0)
          }
        }
      } else if (this.axis === 'x'){
        if (this.checkXSpaces(sandwich, anchorArr) != false){
          // place the ship
          for (let i = 0; i < sandwich.length; i += 1){
            this.board[anchorArr[0]][anchorArr[1] + i] = sandwich.name.charAt(0)
          }
        }
      }
    }
  }
})
