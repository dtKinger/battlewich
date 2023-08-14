import { Player } from "./Player"

test('Test that Player has => gameboard', () => {
  const readyPlayerOne = Player('Daniel')
  expect(readyPlayerOne.gameboard).toBeDefined();
})

// Is this an integration test?
test("Test that Player's Gameboard has an empty board", () => {
  const readyPlayerOne = Player('Player 1')
  expect(readyPlayerOne.gameboard.board[0][5]).toBe('')
})

test('Test the typeof Player.name', () => {
  const readyPlayerOne = Player('Daniel')
  expect(typeof readyPlayerOne.name).toBe('string');
})