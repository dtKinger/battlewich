import { makeWich } from './wichFactory.js'
import { Gameboard } from "./Gameboard";
import { buildHTMLBoards } from "./buildHTMLBoards.js"
// import { addListeners } from './gameLoopEvents.js';
// import { updateDomMessage } from './updateDomMessage.js';

test('', () => {
  
})

test('Place and find submarine', () => {
  const aBoard = Gameboard('anyone')
  aBoard.placeWich(aBoard.submarine, [2,2])
  expect(aBoard.board[1][2]).toBe('')
  expect(aBoard.board[2][2]).toBe('s')
})


test("Pass 'y' as a parameter to make a sandwich vertical", () => {
  const boardZ = Gameboard('Player 1');
  
  boardZ.placeWich(boardZ.club, [4, 4], 'y');
  
  expect(boardZ.board[5][4]).toBe('');
  expect(boardZ.board[4][4]).toBe('c');
  expect(boardZ.board[3][4]).toBe('c');
  expect(boardZ.board[2][4]).toBe('c');
  expect(boardZ.board[1][4]).toBe('');
});


test("Don't allow new sandwich on existing sandwich", () => {
  const boardZ = Gameboard('Player 1');
  
  boardZ.placeWich(boardZ.club, [4, 4], 'y');
  
  expect(boardZ.board[5][4]).toBe('');
  expect(boardZ.board[4][4]).toBe('c');
  expect(boardZ.board[3][4]).toBe('c');
  expect(boardZ.board[2][4]).toBe('c');
  expect(boardZ.board[1][4]).toBe('');
});


test("test my checkSpace function independantly", () => {
  const emptyBoard = Gameboard('for testing');
  expect(emptyBoard.checkSpaces(emptyBoard.hotDog, [0,0])).toBeTruthy()
})

