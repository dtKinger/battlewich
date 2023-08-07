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
const player1Board = Gameboard('player1')
try {
// player1Board.placeSubmarine([1,0])
player1Board.placeFrench([9,3]) // Can't place it in 7th row or higher number???
player1Board.placeReuben([4, 2])
player1Board.placeHotDog([4,7], 'y')
} catch {
  console.log('Something illegal happened')
}
console.log(player1Board.board)