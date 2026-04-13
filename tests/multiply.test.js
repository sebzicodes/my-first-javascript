const subtract = require("../src/subtract");

describe("subtract", () => {
  test("subtracts 5 - 3 to equal 2", () => {
    expect(subtract(5, 3)).toBe(2);
  });
  test("subtracts 100 - 1 to equal 99", () => {
    expect(subtract(100, 1)).toBe(99);
  });
  test("subtracts 45 - 5 to equal 40", () => {
    expect(subtract(45, 5)).toBe(40);
  });
});
