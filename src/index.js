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
const aBoard = Gameboard('anyone')
aBoard.placeWich(aBoard.french, [3, 3])
aBoard.placeWich(aBoard.submarine, [1, 1], 'y') // This throws error but doesn't break the app
aBoard.placeWich(aBoard.reuben, [6,6]);

  
console.log(aBoard.board)