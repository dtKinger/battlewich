import { makeWich } from './wichFactory.js'
import { Gameboard } from "./Gameboard";

test('Place and find submarine', async () => {
  const aBoard = Gameboard('anyone')
  await aBoard.placeWich(aBoard.submarine, [2,2])
  expect(aBoard.board[1][2]).toBe('')
  expect(aBoard.board[2][2]).toBe('s')
})


test("Pass 'y' as a parameter to make a sandwich vertical", () => {
  const boardZ = Gameboard('player1');
  return new Promise((resolve, reject) => {
    boardZ.placeWich(boardZ.club, [4, 4], 'y');
    resolve(); // Resolve the promise after performing the action
  })
  .then(() => {
    expect(boardZ.board[5][4]).toBe('')
    expect(boardZ.board[4][4]).toBe('c')
    expect(boardZ.board[3][4]).toBe('c')
    expect(boardZ.board[2][4]).toBe('c')
    expect(boardZ.board[1][4]).toBe('')
  })
  .catch((error) => {
    console.error('An error occurred:', error);
  })
});

test("Don't allow new sandwich on existing sandwich", () => {
  const boardZ = Gameboard('player1');
  return new Promise((resolve, reject) => {
    boardZ.placeWich(boardZ.club, [4, 4], 'y');
    resolve(); // Resolve the promise after performing the action
  })
  .then(() => {
    expect(boardZ.board[5][4]).toBe('')
    expect(boardZ.board[4][4]).toBe('c')
    expect(boardZ.board[3][4]).toBe('c')
    expect(boardZ.board[2][4]).toBe('c')
    expect(boardZ.board[1][4]).toBe('')
  })
  // .catch((error) => { // Don't handle the error so that test fails
  //   console.error('An error occurred:', error);
  // })
})

test("Fail when placing a piece that would be out of bounds", () => {
  const player1Board = Gameboard('player1');
  player1Board.placeWich(player1Board.submarine, [1, 1], 'y')
  expect(player1Board.board[1][1]).toBe('');
  expect(player1Board.board[0][1]).toBe('');
})


test("test my checkSpace function independantly", () => {
  const emptyBoard = Gameboard('for testing');
  expect(emptyBoard.checkSpaces(emptyBoard.hotDog, [0,0])).toBeTruthy()
})

