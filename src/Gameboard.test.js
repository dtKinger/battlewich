import { Gameboard } from "./Gameboard"

test('Place a submarine', () => {
  const player1Board = Gameboard('Player1')
  player1Board.placeSubmarine([8,5], 'y')
  expect(player1Board.board[8][5]).toEqual('y')
})