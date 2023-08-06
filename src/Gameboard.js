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
      return makeWich('submarine', 5, anchorArr, axis)
    },
    
    placeFrench (anchorArr, axis) { // helper function to lock in name and length
      return makeWich('french', 4, anchorArr, axis)
    },

    placeClub (anchorArr, axis) { // helper function to lock in name and length
      return makeWich('club', 3, anchorArr, axis)
    },

    placeReuben (anchorArr, axis) { // helper function to lock in name and length
      return makeWich('reuben', 3, anchorArr, axis)
    },

    placeHotDog (anchorArr, axis) { // helper function to lock in name and length
      return makeWich('hot dog', 2, anchorArr, axis)
    }
  }
})
