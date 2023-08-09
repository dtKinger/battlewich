/* Imports */
import './meyer-reset.css'
import './style.css'
import './dom.js'  
import { makeWich } from './wichFactory.js'
import { Gameboard } from "./Gameboard";

/* Memory allocation */

/* Application */
console.log("Welcome to Battle 'Wich!")
const aBoard = Gameboard('anyone')


aBoard.placeWich(aBoard.submarine, [1, 1], 'y') // This throws error but doesn't break the app



aBoard.placeWich(aBoard.french, [3,3])
.then(aBoard.receiveAttack([3,3]))
.then(aBoard.receiveAttack([3,3]))

aBoard.placeWich(aBoard.reuben, [6,6])
console.log(aBoard.board[3])





console.log(aBoard.board)
console.log(aBoard.french)
console.log(aBoard.submarine)

aBoard.reuben.bite()
aBoard.reuben.bite()
aBoard.reuben.bite()
aBoard.reuben.isEaten()
console.log(aBoard.reuben)

