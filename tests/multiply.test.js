const multiply = require("../src/multiply");

describe("multiply", () => {
  test("multiply 5 * 3 to equal 25", () => {
    expect(multiply(5, 5)).toBe(25);
  });
  test("multiply 5 * 100 to equal 500", () => {
    expect(multiply(5, 100)).toBe(500);
  });
  test("multiply 6 * 3 to equal 18", () => {
    expect(multiply(6, 3)).toBe(18);
  });
});
