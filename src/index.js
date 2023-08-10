/* Imports */
import './meyer-reset.css'
import './style.css'
import './dom.js'  
import { makeWich } from './wichFactory.js'
import { Gameboard } from "./Gameboard";
import { attackBtn, attackRow, attackCol } from './attack'

/* Memory allocation */


/* Application */
console.log("Welcome to Battle 'Wich!")
export const computerBoard = Gameboard('Computer')

computerBoard.placeWich(computerBoard.submarine, [0,0])
computerBoard.placeWich(computerBoard.french, [3,9], 'y')
computerBoard.placeWich(computerBoard.reuben, [8,1])
computerBoard.placeWich(computerBoard.club, [7,2], 'y')
computerBoard.placeWich(computerBoard.hotDog, [2,2])

await console.log(computerBoard.board)
  
await computerBoard.receiveAttack([0,0])
await computerBoard.receiveAttack([0,1])
await computerBoard.receiveAttack([0,2])
await computerBoard.receiveAttack([0,3])
await computerBoard.receiveAttack([0,4])
await console.log(computerBoard.submarine.eatenStatus)
await computerBoard.receiveAttack([3,9])
await computerBoard.receiveAttack([2,9])
await computerBoard.receiveAttack([1,9])
await computerBoard.receiveAttack([0,9])
await console.log(computerBoard.french.eatenStatus)
await computerBoard.receiveAttack([8,1])
await computerBoard.receiveAttack([8,2])
await computerBoard.receiveAttack([8,3])
await console.log(computerBoard.reuben.eatenStatus)
await computerBoard.receiveAttack([7,2])
await computerBoard.receiveAttack([6,2])
await computerBoard.receiveAttack([5,2])
await console.log(computerBoard.club.eatenStatus)
await computerBoard.receiveAttack([2,2])
await console.log(computerBoard.hotDog.eatenStatus)
await console.log('I bet if you attack [2,3] you can beat the computer!')




// computerBoard.placeWich(computerBoard.submarine, [1, 1]) // Add 'y' axis to throw error but doesn't break the app
// computerBoard.placeWich(computerBoard.french, [3,3])
// // .then(computerBoard.receiveAttack([3,3])) // This works, but I can initiate attacks
// // from the UI now.
// computerBoard.placeWich(computerBoard.reuben, [6,6])

// await console.log(computerBoard.board)
// computerBoard.receiveAttack([1,2])