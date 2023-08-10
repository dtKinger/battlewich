/* Imports */
import './meyer-reset.css'
import './style.css'
import './dom.js'  
import { makeWich } from './wichFactory.js'
import { Gameboard } from "./Gameboard";
import { attackBtn, attackRow, attackCol } from './attack'

// const attackBtn = document.querySelector('.attack-btn');
// const attackRow = document.querySelector('#row-coords');
// const attackCol = document.querySelector('#col-coords');

/* Memory allocation */


/* Application */
console.log("Welcome to Battle 'Wich!")
export const aBoard = Gameboard('anyone')

const zBoard = Gameboard('Computer')
  await zBoard.placeWich(zBoard.submarine, [0,0])
  await zBoard.placeWich(zBoard.french, [3,9], 'y')
  await zBoard.placeWich(zBoard.reuben, [8,1])
  await zBoard.placeWich(zBoard.club, [7,2], 'y')
  await zBoard.placeWich(zBoard.hotDog, [2,2])
  await console.log(zBoard.board)
  // await zBoard.receiveAttack([0,0])
  // await zBoard.receiveAttack([0,1])
  // await zBoard.receiveAttack([0,2])
  // await zBoard.receiveAttack([0,3])
  // await zBoard.receiveAttack([0,4])
  // await console.log(zBoard.submarine.eatenStatus)
  // await zBoard.receiveAttack([3,9])
  // await zBoard.receiveAttack([2,9])
  // await zBoard.receiveAttack([1,9])
  // await zBoard.receiveAttack([0,9])
  // await console.log(zBoard.french.eatenStatus)
  // await zBoard.receiveAttack([8,1])
  // await zBoard.receiveAttack([8,2])
  // await zBoard.receiveAttack([8,3])
  // await console.log(zBoard.reuben.eatenStatus)
  // await zBoard.receiveAttack([7,2])
  // await zBoard.receiveAttack([6,2])
  // await zBoard.receiveAttack([5,2])
  // await console.log(zBoard.club.eatenStatus)
  // await zBoard.receiveAttack([2,2])
  // await console.log(zBoard.hotDog.eatenStatus)
  await console.log('I bet if you attack [2,3] you can beat the computer!')

