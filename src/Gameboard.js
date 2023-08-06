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
      const submarine = makeWich('submarine', 5, anchorArr, axis)
      return submarine;
    },
    
    placeFrench (anchorArr, axis) { // helper function to lock in name and length
      const french = makeWich('french', 4, anchorArr, axis)
    },

    placeClub (anchorArr, axis) { // helper function to lock in name and length
      const club = makeWich('club', 3, anchorArr, axis)
    },

    placeReuben (anchorArr, axis) { // helper function to lock in name and length
      const reuben = makeWich('reuben', 3, anchorArr, axis)
    },

    placeHotDog (anchorArr, axis) { // helper function to lock in name and length
      const hotDog = makeWich('hot dog', 2, anchorArr, axis)
    }
  }
})
