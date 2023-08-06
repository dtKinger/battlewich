/* Imports */
import './meyer-reset.css'
import './style.css'
import './dom.js'  
import { makeWich } from './wichFactory.js'
import { Gameboard } from './Gameboard' 
// import Icon from './icon.png';  // these don't exist
// import Data from './data.xml';
// import Notes from './data.csv';

/* Memory allocation */
// const pageHeader = document.querySelector('.header')

/* Application */
console.log('Welcome to Battle Sandwich!')
const player1Board = Gameboard('Player1')
const computerBoard = Gameboard('Computer')
console.log(player1Board.player)
console.log(computerBoard.player);

player1Board.board[8][5] = 's'
player1Board.board[7][5] = 's'
player1Board.board[6][5] = 's'
player1Board.board[5][5] = 's'
player1Board.board[4][5] = 's'
console.log(player1Board.board)


