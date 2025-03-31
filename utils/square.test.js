// Unit test - stored in square.test.js
// First we import the square function
const { square } = require("./square");
// ++ Try creating a second function in square.js called
// squareRoot, then test that too!

// Then we test it by describing the test, running the
// code, and comparing expected vs. actual results
describe.skip("Square utils", () => {
  test("square 5 to get 25", () => {
    const result = square(5);
    const expectedResult = 45;
    expect(result).toBe(expectedResult);
  });
  test("handles null", () => {
    expect(square(null)).toBe(0);
  });
  test("pass in 5 as a string", () => {
    expect(square("5")).toEqual(25);
  });
});
