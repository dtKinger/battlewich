import { Player } from "./Player";

export const player1 = Player(`placeholder`, `player1`)
export const computer = Player(`robotica`, `player2`)

// Gameboard alias creations
export const p1Gameboard = player1.gameboard; // alias for gameboard
export const p1Board = p1Gameboard.board; // alias for the board
export const compGameboard = computer.gameboard; // alias for gameboard
export const compBoard = compGameboard.board; // alias for the board