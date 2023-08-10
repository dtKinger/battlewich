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
  zBoard.receiveAttack([0,0])
  zBoard.receiveAttack([0,1])
  zBoard.receiveAttack([0,2])
  zBoard.receiveAttack([0,3])
  zBoard.receiveAttack([0,4])
  console.log(zBoard.submarine.eatenStatus)
  zBoard.receiveAttack([3,9])
  zBoard.receiveAttack([2,9])
  zBoard.receiveAttack([1,9])
  zBoard.receiveAttack([0,9])
  console.log(zBoard.french.eatenStatus)
  zBoard.receiveAttack([8,1])
  zBoard.receiveAttack([8,2])
  zBoard.receiveAttack([8,3])
  console.log(zBoard.reuben.eatenStatus)
  zBoard.receiveAttack([7,2])
  zBoard.receiveAttack([6,2])
  zBoard.receiveAttack([5,2])
  console.log(zBoard.club.eatenStatus)
  console.log(zBoard.board)

