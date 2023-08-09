/* Imports */
import './meyer-reset.css'
import './style.css'
import './dom.js'  
import { makeWich } from './wichFactory.js'
import { Gameboard } from "./Gameboard";
// import { attackBtn, attackRow, attackCol } from './attack'

// const attackBtn = document.querySelector('.attack-btn');
// const attackRow = document.querySelector('#row-coords');
// const attackCol = document.querySelector('#col-coords');

/* Memory allocation */


/* Application */
console.log("Welcome to Battle 'Wich!")
export const aBoard = Gameboard('anyone')


aBoard.placeWich(aBoard.submarine, [1, 1]) // Add 'y' axis to throw error but doesn't break the app
aBoard.placeWich(aBoard.french, [3,3])
// .then(aBoard.receiveAttack([3,3])) // This works, but I can initiate attacks
// from the UI now.
aBoard.placeWich(aBoard.reuben, [6,6])


console.log(aBoard.board)
console.log(aBoard.french)
console.log(aBoard.submarine)
console.log(aBoard.reuben)

