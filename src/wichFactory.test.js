import { makeWich } from "./wichFactory";

// makeWhich (description, length, anchorArr, axis)

test('Sandwich factory function', () => {
  const submarine = makeWich('submarine', 5, [0,0], 'x', 0)
  // Test properties
  expect(submarine.description).toMatch("submarine")
  expect(submarine.length).toBe(5)
  expect(submarine.anchorArr).toEqual([0,0]) // .toBe not good for arrays
  expect(submarine.axis).toMatch("x")
  expect(submarine.biteCount).toBe(0)
  expect(submarine.eatenStatus).toBe(false)
  // Test methods
  expect(submarine.bite).toBeInstanceOf(Function); // Check if hit() is a function
  expect(submarine.isEaten).toBeInstanceOf(Function); // Check if isSunk(
})

test('Sandwich gets bitten', () => {
  const submarine = makeWich('submarine', 5, [0,0], 'x', 0)
  submarine.bite()
  expect(submarine.biteCount).toBe(1)
})