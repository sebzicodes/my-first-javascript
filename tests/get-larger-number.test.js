const getLargerNumber = require("../src/get-larger-number");

describe("getLargerNumber", () => {
  test("1 and 2 returns 2", () => {
    expect(getLargerNumber(1, 2)).toBe(2);
  });
  test("100 and 2 returns 100", () => {
    expect(getLargerNumber(100, 2)).toBe(100);
  });
  test("200 and 200 returns 200", () => {
    expect(getLargerNumber(200, 200)).toBe(200);
  });
});
