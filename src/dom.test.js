// import { dom, myTest } from "./dom";
const dom = require('./dom')

test('Test Jest by testing the DOM', () => {
  expect(dom.myTest(10)).toBe(10);
})