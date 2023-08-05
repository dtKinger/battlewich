import { makeWich } from "./wichFactory";

// makeWhich (description, length, anchorArr, axis)

test('Sandwich factory function', () => {
  const submarine = makeWich('submarine', 5, [0,0], 'x')
  expect(submarine.description).toMatch("submarine"),
  expect(submarine.length).toBe(5),
  expect(submarine.anchorArr).toEqual([0,0]), // .toBe not good for arrays
  expect(submarine.axis).toMatch("x")
})