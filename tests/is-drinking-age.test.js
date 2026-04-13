const isDrinkingAge = require("../src/is-drinking-age");

describe("isDrinkingAge", () => {
  test("is old enough is born in 1996 and it is 2026", () => {
    expect(isDrinkingAge(2026, 1996)).toBe(true);
  });
  test("is not old enough is born in 2020 and it is 2026", () => {
    expect(isDrinkingAge(2026, 2020)).toBe(false);
  });
  test("is old enough is born in 1741 and it is 1800", () => {
    expect(isDrinkingAge(1800, 1741)).toBe(true);
  });
});
