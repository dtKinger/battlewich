import { makeWich } from "./wichFactory"

export const Gameboard = ( (player) => {
  return {
    player,
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

    placeSubmarine (anchorArr, axis) { // helper function to lock in name and length
      const submarine = makeWich('submarine', 5, anchorArr, axis) // create the boat in memory
      // if (this.checkSpace () == true) {}// compare to physical space
      this.placeIt(submarine, anchorArr, axis);
      return submarine;
    },
    
    placeFrench (anchorArr, axis) { // helper function to lock in name and length
      const french = makeWich('french', 4, anchorArr, axis)
      this.placeIt(french, anchorArr, axis);
      return french;
    },

    placeClub (anchorArr, axis) { // helper function to lock in name and length
      const club = makeWich('club', 3, anchorArr, axis)
      this.placeIt(club, anchorArr, axis);
    },

    placeReuben (anchorArr, axis) { // helper function to lock in name and length
      const reuben = makeWich('reuben', 3, anchorArr, axis)
      this.placeIt(reuben, anchorArr, axis);
    },

    placeHotDog (anchorArr, axis) { // helper function to lock in name and length
      const hotDog = makeWich('hot dog', 2, anchorArr, axis)
      this.placeIt(hotDog, anchorArr, axis);
    },

    checkYSpaces (sandwich, anchorArr, axis) {
      
        for (let i = 0; i < sandwich.length; i += 1){
          // Check the spaces
          if (this.board[anchorArr[0] - i][anchorArr[1]] !== ''){
            console.log('Conflict detected')
            return false; // Break out
          }
          return true;
        }
      
    },

    checkXSpaces (sandwich, anchorArr, axis) {
      for (let i = 0; i < sandwich.length; i += 1){
        // Check the spaces
        if (this.board[anchorArr[0] + i][anchorArr[1]] !== ''){
          console.log('Conflict detected')
          return false; // Break out
        }
        return true;
      }
    },

    placeIt (sandwich, anchorArr, axis) {
      if (axis === 'y'){
        if (this.checkYSpaces(sandwich, anchorArr, 'y') != false){
          for (let i = 0; i < sandwich.length; i += 1){
            this.board[anchorArr[0] - i][anchorArr[1]] = sandwich.description.charAt(0)
          }
        }
      } else if (axis === 'x'){
        if (this.checkXSpaces(sandwich, anchorArr, 'x') != false){
          for (let i = 0; i < sandwich.length; i += 1){
            this.board[anchorArr[0]][anchorArr[1] + i] = sandwich.description.charAt(0)
          }
        }
      }
    }
  }
})