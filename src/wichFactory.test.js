import { makeWich } from "./wichFactory";

// makeWhich (description, length, anchorArr, axis)

test('Sandwich factory function', () => {
  const submarine = makeWich('submarine', 5, [0,0], 'x', 0)
  // Test properties
  expect(submarine.description).toMatch("submarine")
  expect(submarine.length).toBe(5)
  expect(submarine.anchorArr).toEqual([0,0]) // .toBe not good for arrays
  expect(submarine.axis).toMatch("x")
  expect(submarine.hitCount).toBe(0)
  expect(submarine.sunkStatus).toBe(false)
  // Test methods
  expect(submarine.hit).toBeInstanceOf(Function); // Check if hit() is a function
  expect(submarine.isSunk).toBeInstanceOf(Function); // Check if isSunk(
})