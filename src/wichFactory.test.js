import { makeWich } from "./wichFactory";

test('Sandwich factory function', () => {
  const submarine = makeWich('submarine', 5)
  // Test properties
  expect(submarine.name).toMatch("submarine")
  expect(submarine.length).toBe(5)
  expect(submarine.biteCount).toBe(0)
  expect(submarine.eatenStatus).toBe(false)
  // Test methods
  expect(submarine.bite).toBeInstanceOf(Function); // Check if hit() is a function
  expect(submarine.isEaten).toBeInstanceOf(Function); // Check if isSunk(
})

test('Sandwich gets bitten', () => {
  const submarine = makeWich('submarine', 5)
  submarine.bite()
  submarine.bite()
  submarine.bite()
  expect(submarine.biteCount).toBe(3)
  expect(submarine.eatenStatus).toBeFalsy()
})

test('Sandwich gets fully eaten', () => {
  const reuben = makeWich('reuben', 3)
  reuben.bite()
  reuben.bite()
  expect(reuben.biteCount).toBe(2)
  expect(reuben.isEaten).toBeTruthy()
})

test("Sandwich cannot continue to be eaten after it's fully eaten", () => {
  const reuben = makeWich('reuben', 3)
  reuben.bite()
  reuben.bite()
  reuben.bite()
  reuben.bite() // do nothing
  reuben.bite() // do nothing
  expect(reuben.biteCount).toBe(3)
  expect(reuben.isEaten).toBeTruthy()
})

test("Check on eatenStatus state", () => {
  const hotDog = makeWich('hotdog', 2)
  hotDog.isEaten();
  expect(hotDog.eatenStatus).toBeFalsy()
  hotDog.bite()
  hotDog.bite()
  hotDog.isEaten();
  expect(hotDog.eatenStatus).toBeTruthy()
})