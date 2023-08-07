import { Gameboard } from "./Gameboard";
import { makeWich } from "./wichFactory";
// import { player1Board, computerBoard } from "./index"

test('Place and find submarine', () => {
  const player1Boardz = Gameboard('player1');
  player1Boardz.placeSubmarine([5,3], 'x')
  expect(player1Boardz.board[5][3]).toBe('s')
  expect(player1Boardz.board[5][4]).toBe('s')
  expect(player1Boardz.board[5][5]).toBe('s')
  expect(player1Boardz.board[5][6]).toBe('s')
  expect(player1Boardz.board[5][7]).toBe('s')
})

// test('Y-axis sandwich should build north by decrementing i', () => {
//   const player1Boardz = Gameboard('player1');
//   player1Boardz.placeFrench([3,2], 'y')
//   expect(player1Boardz.board[3][2]).toBe('f')
//   expect(player1Boardz.board[2][2]).toBe('f')
//   expect(player1Boardz.board[1][2]).toBe('f')
// })

test('Hot Dog is not too big or too small', () => {
  const computerBoardz = Gameboard('computer')
  computerBoardz.placeHotDog([4, 3], 'x')
  expect(computerBoardz.board[4][2]).toBe('')
  expect(computerBoardz.board[4][3]).toBe('h')
  expect(computerBoardz.board[4][4]).toBe('h')
  expect(computerBoardz.board[4][5]).toBe('')
})

test("Don't allow new sandwich on existing sandwich", () => {
  const aBoard = Gameboard('anyone')
  aBoard.placeReuben([5,3])
  aBoard.placeClub([5,3])
  expect(aBoard.board[5][3]).toBe('r') // r for Reuben should persist in the spot.
})

test("Fail when placing a piece that would be out of bounds", () => {
  const aBoard = Gameboard('anyone')
  const submarine = makeWich('submarine', 5)
  // aBoard.placeSubmarine([1,1], 'x') // change x to y to fail it
  expect(aBoard.placeIt(submarine, [1,1])).toBeDefined();
  expect(aBoard.checkXSpaces(submarine, [1,1])).toBeDefined();
  // aBoard.checkYSpaces(submarine, [1,1], 'x')
})

test("test my Yspace-checking function", () => {
  
})

test("test my Xspace-checking function", () => {
  
  
})