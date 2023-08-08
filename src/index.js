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
player1Board.placeWich(player1Board.submarine, [1,1], 'y')
console.log(player1Board.board)