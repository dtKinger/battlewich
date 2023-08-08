import { makeWich } from './wichFactory.js'
import { Gameboard } from "./Gameboard";

test('Place and find submarine', async () => {
  const aBoard = Gameboard('anyone')
  await aBoard.placeWich(aBoard.submarine, [2,2])
  expect(aBoard.board[1][2]).toBe('')
  expect(aBoard.board[2][2]).toBe('s')
})

test('Y-axis sandwich should build north by decrementing i', () => {
//   const player1Boardz = Gameboard('player1');
//   player1Boardz.placeFrench([3,2], 'y')
//   expect(player1Boardz.board[3][2]).toBe('f')
//   expect(player1Boardz.board[2][2]).toBe('f')
//   expect(player1Boardz.board[1][2]).toBe('f')
})

test('Hot Dog is not too big or too small', () => {
  // const computerBoardz = Gameboard('computer')
  // computerBoardz.placeHotDog([4, 3], 'x')
  // expect(computerBoardz.board[4][2]).toBe('')
  // expect(computerBoardz.board[4][3]).toBe('h')
  // expect(computerBoardz.board[4][4]).toBe('h')
  // expect(computerBoardz.board[4][5]).toBe('')
})

test("Don't allow new sandwich on existing sandwich", () => {
  // const aBoard = Gameboard('anyone')
  // aBoard.placeReuben([5,3])
  // aBoard.placeClub([5,3])
  // expect(aBoard.board[5][3]).toBe('r') // r for Reuben should persist in the spot.
})

test("Fail when placing a piece that would be out of bounds", () => {
  const player1Board = Gameboard('player1');
  player1Board.placeWich(player1Board.submarine, [1, 1], 'y')
  expect(player1Board.board[1][1]).toBe('');
  expect(player1Board.board[0][1]).toBe('');
})


test("test my checkSpace function", async () => {
  
})

