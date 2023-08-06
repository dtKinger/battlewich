/* Imports */
import './meyer-reset.css'
import './style.css'
import './dom.js'  
import { makeWich } from './wichFactory.js'
import { Gameboard } from "./Gameboard";
// import Icon from './icon.png';  // these don't exist
// import Data from './data.xml';
// import Notes from './data.csv';

/* Memory allocation */
// const pageHeader = document.querySelector('.header')

/* Application */
console.log("Welcome to Battle 'Wich!")
export const player1Board = Gameboard('Player1')
export const computerBoard = Gameboard('Computer')
  player1Board.placeReuben([5,3], 'x')
  player1Board.placeClub([5,3], 'y')

  try {
    player1Board.placeSubmarine([1,1], 'y') // change x to y to fail it
  } catch {
    console.log("Can't play out of bounds")
  }

console.info(player1Board.board)


