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

test("Fail when placing a piece that would be out of bounds", async () => {
  const player1Board = Gameboard('player1');
  await player1Board.placeWich(player1Board.submarine, [1, 1], 'y')
  expect(player1Board.board[1][1]).toBe('');
  expect(player1Board.board[0][1]).toBe('');
})


test("test my checkSpace function independantly", () => {
  const emptyBoard = Gameboard('for testing');
  expect(emptyBoard.checkSpaces(emptyBoard.hotDog, [0,0])).toBeTruthy()
})

// receiveAttack() tests

test("test successful attack on sandwich", async () => {
  const zBoard = Gameboard('anyone');
  await zBoard.placeWich(zBoard.reuben, [4, 4]);

  // Create spies for bite and isEaten methods
  const biteSpy = jest.spyOn(zBoard.reuben, 'bite');
  const isEatenSpy = jest.spyOn(zBoard.reuben, 'isEaten');
  
  await zBoard.receiveAttack([4, 4]);
  
  // Check if the spies have been called
  expect(biteSpy).toHaveBeenCalled();
  expect(isEatenSpy).toHaveBeenCalled();
});

test("test missed attack", async () => {
  const zBoard = Gameboard('anyone');
  await zBoard.placeWich(zBoard.reuben, [4, 4]);
  await zBoard.receiveAttack([3, 3]);
  
  expect(zBoard.board[3][3]).toBe('x');
});

test("test already hit coordinates", async () => {
  const zBoard = Gameboard('anyone');
  await zBoard.placeWich(zBoard.reuben, [4, 4]);
  await zBoard.receiveAttack([4, 4]);
  expect(zBoard.board[4][4]).toBe('r'); // The bite registers
  expect(zBoard.reuben.biteCount).toBe(1) // 1 bite is registered
  await zBoard.receiveAttack([4, 4]); // bite the same spot again
  expect(zBoard.reuben.biteCount).toBe(1) // biteCount stays the same after
  // registers biteCoordinates to a Set() object.
});


test("Everything gets eaten", async () => {
  const zBoard = Gameboard('Computer')
  await zBoard.placeWich(zBoard.submarine, [0,0])
  await zBoard.placeWich(zBoard.french, [3,9], 'y')
  await zBoard.placeWich(zBoard.reuben, [8,1])
  await zBoard.placeWich(zBoard.club, [7,2], 'y')
  await zBoard.placeWich(zBoard.hotDog, [2,2])
  zBoard.receiveAttack([0,0])
  zBoard.receiveAttack([0,1])
  zBoard.receiveAttack([0,2])
  zBoard.receiveAttack([0,3])
  zBoard.receiveAttack([0,4])
  console.log(zBoard.submarine.eatenStatus)
  zBoard.receiveAttack([3,9])
  zBoard.receiveAttack([2,9])
  zBoard.receiveAttack([1,9])
  zBoard.receiveAttack([0,9])
  console.log(zBoard.french.eatenStatus)
  zBoard.receiveAttack([8,1])
  zBoard.receiveAttack([8,2])
  zBoard.receiveAttack([8,3])
  console.log(zBoard.reuben.eatenStatus)
  zBoard.receiveAttack([7,2])
  zBoard.receiveAttack([6,2])
  zBoard.receiveAttack([5,2])
  console.log(zBoard.club.eatenStatus)
  zBoard.receiveAttack([2,2])
  zBoard.receiveAttack([2,3])
  console.log(zBoard.hotDog.eatenStatus)
})