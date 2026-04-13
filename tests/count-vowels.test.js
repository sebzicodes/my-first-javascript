const countVowels = require("../src/count-vowels");

describe("countVowels", () => {
  test("counts vowels in a simple word", () => {
    expect(countVowels("hello")).toBe(2);
  });

  test("counts vowels in a word with all vowels", () => {
    expect(countVowels("aeiou")).toBe(5);
  });

  test("returns 0 when there are no vowels", () => {
    expect(countVowels("rhythm")).toBe(0);
  });

  test("counts vowels in a sentence", () => {
    expect(countVowels("javascript is fun")).toBe(5);
  });

  test("handles uppercase letters", () => {
    expect(countVowels("HELLO")).toBe(2);
  });
});